(function () {
  var GLOBE_BUNDLE_URL = "assets/vendor/skylo-globe/main.js";

  function fallbackToNativeScroll(reason) {
    console.warn("[OnLink] Globo 3D indisponível; exibindo a página sem animação.", reason);
    document.body.classList.add("is-scroll-native");
    document.dispatchEvent(new CustomEvent("onlink:globe-failed"));
  }

  // O bundle só aplica o centro de câmera do desktop (globo à direita do texto) quando
  // emite progresso de scroll; um wheel de saldo zero força essa primeira emissão.
  function nudgeScroll() {
    window.dispatchEvent(new WheelEvent("wheel", { deltaY: 1 }));
    window.setTimeout(function () {
      window.dispatchEvent(new WheelEvent("wheel", { deltaY: -1 }));
    }, 50);
  }

  function primeCameraWhenGlReady() {
    var container = document.querySelector(".gl-canvas");
    if (!container) return;

    var observer = new MutationObserver(function () {
      if (!container.querySelector("canvas")) return;
      observer.disconnect();
      window.setTimeout(nudgeScroll, 100);
    });
    observer.observe(container, { childList: true, subtree: true });
  }

  function loadGlobe() {
    if (window.location.protocol === "file:") {
      fallbackToNativeScroll("Módulos ES exigem um servidor HTTP (ex.: npx serve src).");
      return;
    }

    var script = document.createElement("script");
    script.type = "module";
    script.src = GLOBE_BUNDLE_URL;
    script.onerror = function () {
      fallbackToNativeScroll("Falha ao carregar " + GLOBE_BUNDLE_URL);
    };
    primeCameraWhenGlReady();
    document.body.appendChild(script);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadGlobe);
  } else {
    loadGlobe();
  }
})();
