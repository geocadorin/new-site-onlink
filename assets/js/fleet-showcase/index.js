import { SECTORS, getSectorByIndex } from "./catalog.js";
import { loadGltf } from "./loader.js";
import { createViewer } from "./viewer.js";

var SECTION_SELECTOR = ".js-fleet-showcase";
var showcaseActive = false;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isNativeScroll() {
  return document.body.classList.contains("is-scroll-native");
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

// Divide o progresso normalizado (0 a 1) nas 4 faixas:
// 0.00 - 0.24 -> [0] Construção
// 0.25 - 0.49 -> [1] Mineração
// 0.50 - 0.74 -> [2] Agro
// 0.75 - 1.00 -> [3] OffShore
export function getSectorIndexFromProgress(progress) {
  var p = clamp(progress, 0, 1);
  if (p < 0.25) return 0;
  if (p < 0.5) return 1;
  if (p < 0.75) return 2;
  return 3;
}

// Pausa a renderização do Globo WebGL (.gl-canvas) quando coberto pelos painéis opacos
// e evita mutações de DOM redundantes do scroll virtual quando parado.
function optimizeBackgroundGlobeAndScroll() {
  import("../../vendor/skylo-globe/Stars2.js")
    .then(function (mod) {
      var ticker = mod && mod.c;
      if (!ticker || !Array.isArray(ticker.frames)) return;

      var glCanvas = document.querySelector(".gl-canvas");
      var patchedRender = false;
      var patchedScroll = false;

      function tryPatch() {
        if (!ticker.frames || !ticker.frames.length) return;

        for (var i = 0; i < ticker.frames.length; i++) {
          var entry = ticker.frames[i];
          if (!entry || entry.__onlinkPatched) continue;

          if (entry.id === "renderer:render") {
            var origRender = entry.handler;
            entry.handler = function (now) {
              var scroll = window.onlinkScroll;
              var hiddenBehindPanels =
                showcaseActive ||
                (scroll &&
                  scroll.index &&
                  scroll.index.current >= 2 &&
                  scroll.scroll &&
                  Math.abs(scroll.scroll.current - scroll.scroll.lerped) < 40);

              if (hiddenBehindPanels) {
                if (glCanvas && glCanvas.style.visibility !== "hidden") {
                  glCanvas.style.visibility = "hidden";
                }
                return;
              }
              if (glCanvas && glCanvas.style.visibility === "hidden") {
                glCanvas.style.visibility = "";
              }
              origRender(now);
            };
            entry.__onlinkPatched = true;
            patchedRender = true;
          } else if (typeof entry.id === "string" && entry.id.indexOf("scroll_") === 0) {
            var origScroll = entry.handler;
            entry.handler = function (now) {
              var scroll = window.onlinkScroll;
              if (
                scroll &&
                scroll.scroll &&
                !scroll.resizing &&
                (!scroll.pointer || !scroll.pointer.active) &&
                scroll.scroll.delta === 0 &&
                Math.abs(scroll.scroll.current - scroll.scroll.lerped) < 0.05
              ) {
                return;
              }
              origScroll(now);
            };
            entry.__onlinkPatched = true;
            patchedScroll = true;
          }
        }

        if (!patchedRender || !patchedScroll) {
          window.setTimeout(tryPatch, 400);
        }
      }

      tryPatch();
    })
    .catch(function () {
      // Fallback silencioso caso o bundle do globo não esteja ativo
    });
}

// Integra a vitrine de 4 modelos ao motor de scroll virtual (window.onlinkScroll):
// Enquanto o usuário estiver na seção #frota, o scroll troca de modelo in-place (0 -> 1 -> 2 -> 3)
// mantendo a seção 100% parada na tela, e só avança/retrocede de seção após o último/primeiro modelo.
function setupVirtualScrollInPlaceStepping(trackEl, controller) {
  var attempts = 0;
  var lockUntil = 0;
  var lastStepTime = 0;
  var lastWheelEventTime = 0;
  var lastWheelAbsDelta = 0;
  var wheelGestureConsumed = false;
  var wheelAccum = 0;

  function lockFor(ms) {
    var now = performance.now();
    lockUntil = Math.max(lockUntil, now + ms);
    lastStepTime = now;
    wheelGestureConsumed = true;
    wheelAccum = 0;
  }

  function getShowcaseSectionIndex(scroll) {
    if (!scroll || !scroll.sections) return -1;
    for (var i = 0; i < scroll.sections.length; i++) {
      if (scroll.sections[i].el === trackEl) return i;
    }
    return -1;
  }

  function pinScrollAtShowcase(scroll, showcaseIdx) {
    var secObj = scroll.sections[showcaseIdx];
    if (!secObj) return;
    scroll.clearSnapTl();
    if (scroll.snapTimeOut) clearTimeout(scroll.snapTimeOut);
    if (scroll.wheelTimeOut) clearTimeout(scroll.wheelTimeOut);
    scroll.index.current = showcaseIdx;
    scroll.scroll.delta = 0;
    scroll.scroll.current = -secObj.elBounds.offsetTop;
  }

  function tryInstall() {
    var scroll = window.onlinkScroll;
    if (!scroll || !scroll.sections || !scroll.sections.length) {
      if (++attempts < 40) window.setTimeout(tryInstall, 150);
      return;
    }
    if (scroll.__onlinkInPlaceSteppingInstalled) return;
    scroll.__onlinkInPlaceSteppingInstalled = true;

    var origToNext = scroll.toNext.bind(scroll);
    var origToPrevious = scroll.toPrevious.bind(scroll);
    var origSnapToClosest = scroll.snapToClosest.bind(scroll);

    scroll.toNext = function () {
      if (!scroll.state.active) return false;
      var showcaseIdx = getShowcaseSectionIndex(scroll);
      if (showcaseIdx < 0) return origToNext();

      // Entrando na seção #frota vindo da seção anterior (#beneficios)
      if (scroll.index.current === showcaseIdx - 1) {
        lockFor(850);
        controller.setSectorIndex(0, { skipIntro: false });
        return origToNext();
      }

      //Já estamos na seção #frota: troca o modelo in-place sem descer a página
      if (scroll.index.current === showcaseIdx) {
        var currentSectorIdx = controller.getSectorIndex();
        if (currentSectorIdx < SECTORS.length - 1) {
          lockFor(600);
          pinScrollAtShowcase(scroll, showcaseIdx);
          controller.setSectorIndex(currentSectorIdx + 1, { skipIntro: true });
          return true;
        }
        // Já está no último modelo (04 OffShore): avança para a próxima seção (#publico)
        lockFor(850);
        return origToNext();
      }

      return origToNext();
    };

    scroll.toPrevious = function () {
      if (!scroll.state.active) return false;
      var showcaseIdx = getShowcaseSectionIndex(scroll);
      if (showcaseIdx < 0) return origToPrevious();

      // Entrando na seção #frota vindo da seção seguinte (#publico)
      if (scroll.index.current === showcaseIdx + 1) {
        lockFor(850);
        controller.setSectorIndex(SECTORS.length - 1, { skipIntro: true });
        return origToPrevious();
      }

      // Já estamos na seção #frota: volta o modelo in-place sem subir a página
      if (scroll.index.current === showcaseIdx) {
        var currentSectorIdx = controller.getSectorIndex();
        if (currentSectorIdx > 0) {
          lockFor(600);
          pinScrollAtShowcase(scroll, showcaseIdx);
          controller.setSectorIndex(currentSectorIdx - 1, { skipIntro: true });
          return true;
        }
        // Já está no primeiro modelo (01 Construção): volta para a seção anterior (#beneficios)
        lockFor(850);
        return origToPrevious();
      }

      return origToPrevious();
    };

    scroll.snapToClosest = function () {
      var showcaseIdx = getShowcaseSectionIndex(scroll);
      if (showcaseIdx >= 0 && scroll.index.current === showcaseIdx) {
        var secObj = scroll.sections[showcaseIdx];
        if (secObj && Math.abs(-scroll.scroll.current - secObj.elBounds.offsetTop) < scroll.layout.h * 0.45) {
          scroll.scrollTo(-secObj.elBounds.offsetTop);
          return Promise.resolve();
        }
      }
      return origSnapToClosest();
    };

    // Intercepta o evento wheel na fase de captura ANTES do window.onlinkScroll.onWheel
    // para que girar o scroll na seção #frota apenas troque o modelo sem mover a página.
    window.addEventListener(
      "wheel",
      function (event) {
        if (isNativeScroll()) return;
        if (!scroll || !scroll.state || !scroll.state.active) return;

        var showcaseIdx = getShowcaseSectionIndex(scroll);
        if (showcaseIdx < 0) return;

        var secObj = scroll.sections[showcaseIdx];
        if (!secObj) return;

        var currentScrollPos = -scroll.scroll.current;
        var distFromShowcase = Math.abs(currentScrollPos - secObj.elBounds.offsetTop);
        var isAtShowcase =
          scroll.index.current === showcaseIdx ||
          (distFromShowcase < scroll.layout.h * 0.35 && !scroll.state.animating);

        if (!isAtShowcase) return;

        // Bloqueia o onWheel nativo do bundle para não deslocar a página nem agendar snapToClosest
        if (event.cancelable) event.preventDefault();
        event.stopImmediatePropagation();

        var now = performance.now();
        var dy = event.deltaY || 0;
        var absDy = Math.abs(dy);
        var gap = now - lastWheelEventTime;
        lastWheelEventTime = now;

        // Se a página ainda está deslizando para chegar na seção #frota, absorve a inércia
        var distLerped = Math.abs(-scroll.scroll.lerped - secObj.elBounds.offsetTop);
        if (scroll.state.animating || distLerped > 16 || now < lockUntil) {
          lastWheelAbsDelta = absDy;
          wheelGestureConsumed = true;
          return;
        }

        // Detecta início de um novo gesto de scroll (pausa > 140ms ou nova aceleração clara após 620ms)
        if (gap > 140) {
          wheelGestureConsumed = false;
          wheelAccum = 0;
        } else if (now - lastStepTime > 620 && absDy > lastWheelAbsDelta * 1.15 && absDy > 18) {
          wheelGestureConsumed = false;
          wheelAccum = 0;
        }
        lastWheelAbsDelta = absDy;

        if (wheelGestureConsumed) {
          pinScrollAtShowcase(scroll, showcaseIdx);
          return;
        }

        wheelAccum += dy;
        if (Math.abs(wheelAccum) < 24) {
          pinScrollAtShowcase(scroll, showcaseIdx);
          return;
        }

        var dir = wheelAccum > 0 ? 1 : -1;
        var currentSectorIdx = controller.getSectorIndex();

        if (dir > 0 && currentSectorIdx < SECTORS.length - 1) {
          lockFor(580);
          pinScrollAtShowcase(scroll, showcaseIdx);
          controller.setSectorIndex(currentSectorIdx + 1, { skipIntro: true });
          return;
        }

        if (dir < 0 && currentSectorIdx > 0) {
          lockFor(580);
          pinScrollAtShowcase(scroll, showcaseIdx);
          controller.setSectorIndex(currentSectorIdx - 1, { skipIntro: true });
          return;
        }

        // Já estamos no limite (04 OffShore descendo ou 01 Construção subindo):
        // se acabou de chegar nesse modelo há menos de 550ms, segura na seção para visualização
        if (now - lastStepTime < 550) {
          lockFor(350);
          pinScrollAtShowcase(scroll, showcaseIdx);
          return;
        }

        // Novo gesto intencional no limite: sai da seção #frota para a próxima/anterior
        lockFor(850);
        if (dir > 0) {
          origToNext();
        } else {
          origToPrevious();
        }
      },
      { capture: true, passive: false }
    );
  }

  tryInstall();
}

function renderSectorContent(root, sector) {
  var panel = root.querySelector("[data-sector-panel]");
  var tagEl = root.querySelector("[data-sector-tag]");
  var counterEl = root.querySelector("[data-sector-counter]");
  var titleEl = root.querySelector("[data-sector-title]");
  var descEl = root.querySelector("[data-sector-description]");
  var highlightsEl = root.querySelector("[data-sector-highlights]");
  var liveEl = root.querySelector("[data-showcase-live]");

  if (panel && !prefersReducedMotion()) {
    panel.classList.remove("is-switching");
    void panel.offsetWidth;
    panel.classList.add("is-switching");
  }

  if (tagEl) tagEl.textContent = sector.tag;
  if (counterEl) counterEl.textContent = "Setor " + sector.number + " / 0" + SECTORS.length;
  if (titleEl) titleEl.textContent = sector.title;
  if (descEl) descEl.textContent = sector.description;
  if (liveEl) liveEl.textContent = "Satélite 24/7 · " + sector.shortName;

  if (highlightsEl) {
    highlightsEl.replaceChildren();
    sector.highlights.forEach(function (text) {
      var item = document.createElement("li");
      item.className = "fleet-showcase_highlight";
      var icon = document.createElement("span");
      icon.className = "fleet-showcase_highlight-dot";
      icon.setAttribute("aria-hidden", "true");
      var copy = document.createElement("p");
      copy.className = "surface-card_text";
      copy.textContent = text;
      item.appendChild(icon);
      item.appendChild(copy);
      highlightsEl.appendChild(item);
    });
  }
}

function updateStepperUI(root, activeIndex, progress) {
  var stage = root.querySelector("#fleet-showcase-stage");
  var progressFill = root.querySelector("[data-showcase-progress-fill]");
  var progressBar = root.querySelector("[data-showcase-progress]");

  if (progressFill) {
    progressFill.style.transform = "scaleX(" + clamp(progress, 0, 1).toFixed(4) + ")";
  }
  if (progressBar) {
    progressBar.setAttribute("aria-valuenow", String(Math.round(clamp(progress, 0, 1) * 100)));
  }

  root.querySelectorAll("[data-sector-step]").forEach(function (stepBtn) {
    var stepIndex = Number(stepBtn.getAttribute("data-sector-step"));
    var isActive = stepIndex === activeIndex;
    var isCompleted = stepIndex < activeIndex;

    stepBtn.classList.toggle("is-active", isActive);
    stepBtn.classList.toggle("is-completed", isCompleted);
    stepBtn.setAttribute("aria-selected", String(isActive));
    stepBtn.setAttribute("aria-current", isActive ? "step" : "false");
    stepBtn.tabIndex = isActive ? 0 : -1;

    if (isActive && stage && stepBtn.id) {
      stage.setAttribute("aria-labelledby", stepBtn.id);
    }
  });
}

function setLoading(root, isLoading, percent) {
  var overlay = root.querySelector("[data-showcase-loading]");
  var label = root.querySelector("[data-showcase-loading-label]");
  if (!overlay) return;
  overlay.hidden = !isLoading;
  overlay.setAttribute("aria-busy", isLoading ? "true" : "false");
  if (label) {
    label.textContent =
      typeof percent === "number" && percent > 0 && percent < 100
        ? "Carregando modelo " + percent + "%"
        : "Carregando modelo";
  }
}

function setError(root, message) {
  var error = root.querySelector("[data-showcase-error]");
  if (!error) return;
  error.hidden = !message;
  error.textContent = message || "";
}

function createController(trackEl) {
  var stage = trackEl.querySelector("[data-showcase-stage]");
  if (!stage) return null;

  var viewer = null;
  var loadToken = 0;
  var activeSectorIndex = 0;
  var introPlayed = false;
  var active = false;

  function getProgressForIndex(idx) {
    return (clamp(idx, 0, SECTORS.length - 1) + 1) / SECTORS.length;
  }

  function ensureViewer() {
    if (!viewer) {
      viewer = createViewer(stage);
    }
    return viewer;
  }

  function showSectorModel(sector, options) {
    var token = ++loadToken;
    var nextViewer = ensureViewer();
    setError(trackEl, "");

    if (nextViewer.hasModel(sector.id)) {
      setLoading(trackEl, false);
      nextViewer.setModel(sector.id, null, {
        transition: !(options && options.skipTransition),
        direction: options && options.direction,
        cameraTheta: sector.cameraTheta
      });
      return Promise.resolve();
    }

    setLoading(trackEl, true, 0);

    return loadGltf(sector.url, function (percent) {
      if (token === loadToken) setLoading(trackEl, true, percent);
    })
      .then(function (gltf) {
        if (token !== loadToken) return;
        nextViewer.setModel(sector.id, gltf.scene, {
          transition: !(options && options.skipTransition),
          direction: options && options.direction,
          cameraTheta: sector.cameraTheta
        });
        setLoading(trackEl, false);
        if (!introPlayed && !(options && options.skipIntro) && !prefersReducedMotion()) {
          nextViewer.playIntro();
          introPlayed = true;
        } else {
          nextViewer.requestRender(80);
        }
      })
      .catch(function (error) {
        if (token !== loadToken) return;
        console.warn("[OnLink] Falha ao carregar o modelo 3D.", error);
        setLoading(trackEl, false);
        setError(trackEl, "Não foi possível carregar este modelo agora.");
      });
  }

  function setActiveSector(nextIndex, options) {
    var clampedIndex = clamp(nextIndex, 0, SECTORS.length - 1);
    var prevIndex = activeSectorIndex;
    var changed = clampedIndex !== prevIndex || (options && options.force);
    activeSectorIndex = clampedIndex;

    var sector = getSectorByIndex(clampedIndex);
    trackEl.setAttribute("data-active-sector", sector.id);
    trackEl.setAttribute("data-active-machine", sector.id);
    trackEl.setAttribute("data-active-index", String(clampedIndex));

    var progress =
      options && typeof options.progress === "number"
        ? options.progress
        : getProgressForIndex(activeSectorIndex);

    updateStepperUI(trackEl, activeSectorIndex, progress);

    if (!changed) return;

    renderSectorContent(trackEl, sector);
    if (active || viewer) {
      showSectorModel(sector, {
        skipIntro: options && options.skipIntro,
        skipTransition: options && options.skipTransition,
        direction: clampedIndex >= prevIndex ? 1 : -1
      });
    }
  }

  // Usado apenas no fallback de scroll nativo (.is-scroll-native) onde a trilha tem 400vh
  function syncFromNativeScroll() {
    if (!isNativeScroll()) return;
    var rect = trackEl.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight || 1;
    var scrollable = Math.max(1, rect.height - vh);
    var nextProgress = clamp(-rect.top / scrollable, 0, 1);
    var targetIndex = getSectorIndexFromProgress(nextProgress);

    if (targetIndex !== activeSectorIndex) {
      setActiveSector(targetIndex, { skipIntro: true, progress: nextProgress });
    } else {
      updateStepperUI(trackEl, activeSectorIndex, nextProgress);
    }
  }

  function selectSectorByClick(targetIndex) {
    var clampedIndex = clamp(targetIndex, 0, SECTORS.length - 1);

    // No modo de scroll virtual (padrão), troca de modelo IMEDIATAMENTE in-place sem rolar a página
    if (!isNativeScroll()) {
      if (window.onlinkScroll) {
        window.onlinkScroll.clearSnapTl();
        if (window.onlinkScroll.snapTimeOut) clearTimeout(window.onlinkScroll.snapTimeOut);
      }
      setActiveSector(clampedIndex, { skipIntro: true });
      return;
    }

    // Fallback de scroll nativo
    setActiveSector(clampedIndex, { skipIntro: true });
    var rect = trackEl.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight || 1;
    var scrollable = Math.max(0, rect.height - vh);
    var trackPageTop = (window.scrollY || window.pageYOffset || 0) + rect.top;
    var targetY = trackPageTop + (scrollable * clampedIndex) / (SECTORS.length - 1);

    window.scrollTo({
      top: targetY,
      behavior: prefersReducedMotion() ? "auto" : "smooth"
    });
  }

  function activate() {
    if (active) return;
    active = true;
    showcaseActive = true;
    ensureViewer();
    viewer.activate();
    if (isNativeScroll()) {
      syncFromNativeScroll();
    } else {
      updateStepperUI(trackEl, activeSectorIndex, getProgressForIndex(activeSectorIndex));
    }
    var currentSector = getSectorByIndex(activeSectorIndex);
    showSectorModel(currentSector, { skipTransition: true });
  }

  function deactivate() {
    active = false;
    showcaseActive = false;
    setLoading(trackEl, false);
    if (viewer) {
      viewer.deactivate();
    }
  }

  // Impede que cliques nos botões de setor disparem o drag/snapToClosest do window.onlinkScroll
  var stepperEl = trackEl.querySelector(".fleet-showcase_stepper");
  var panelEl = trackEl.querySelector(".fleet-showcase_panel");
  [stepperEl, panelEl].forEach(function (el) {
    if (!el) return;
    el.addEventListener("mousedown", function (e) {
      e.stopPropagation();
    });
    el.addEventListener("mouseup", function (e) {
      e.stopPropagation();
    });
  });

  trackEl.addEventListener("click", function (event) {
    var stepBtn = event.target.closest("[data-sector-step]");
    if (!stepBtn || !trackEl.contains(stepBtn)) return;
    var nextIdx = Number(stepBtn.getAttribute("data-sector-step"));
    if (Number.isNaN(nextIdx)) return;
    selectSectorByClick(nextIdx);
  });

  trackEl.addEventListener("keydown", function (event) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    var stepBtn = event.target.closest("[data-sector-step]");
    if (!stepBtn) return;
    var steps = Array.prototype.slice.call(trackEl.querySelectorAll("[data-sector-step]"));
    var idx = steps.indexOf(stepBtn);
    if (idx < 0) return;
    var delta = event.key === "ArrowRight" ? 1 : -1;
    var nextStep = steps[(idx + delta + steps.length) % steps.length];
    nextStep.focus();
    selectSectorByClick(Number(nextStep.getAttribute("data-sector-step")));
    event.preventDefault();
  });

  var scrollRaf = 0;
  function onNativeWindowScroll() {
    if (!isNativeScroll() || scrollRaf) return;
    scrollRaf = window.requestAnimationFrame(function () {
      scrollRaf = 0;
      syncFromNativeScroll();
    });
  }

  window.addEventListener("scroll", onNativeWindowScroll, { passive: true });
  window.addEventListener("resize", onNativeWindowScroll, { passive: true });

  return {
    activate: activate,
    deactivate: deactivate,
    getSectorIndex: function () {
      return activeSectorIndex;
    },
    setSectorIndex: function (idx, opts) {
      setActiveSector(idx, opts);
    }
  };
}

function observeSection(section, controller) {
  if (!("IntersectionObserver" in window)) {
    controller.activate();
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) controller.activate();
        else controller.deactivate();
      });
    },
    { root: null, threshold: 0.15, rootMargin: "40px 0px" }
  );

  observer.observe(section);
}

function init() {
  if (window.location.protocol === "file:") return;

  var section = document.querySelector(SECTION_SELECTOR);
  if (!section) return;

  renderSectorContent(section, SECTORS[0]);
  updateStepperUI(section, 0, 1 / SECTORS.length);

  var controller = createController(section);
  if (!controller) return;

  setupVirtualScrollInPlaceStepping(section, controller);
  optimizeBackgroundGlobeAndScroll();
  observeSection(section, controller);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
