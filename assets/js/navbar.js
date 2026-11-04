(function () {
  var SCROLLED_CLASS = "is-scrolled";
  var OPEN_CLASS = "is-open";
  var SCROLL_TOLERANCE_PX = 1;

  function isPageScrolled(firstStep) {
    if (window.scrollY > SCROLL_TOLERANCE_PX) return true;
    return firstStep ? firstStep.getBoundingClientRect().top < -SCROLL_TOLERANCE_PX : false;
  }

  // O bundle do globo trava o <body> e move os [data-scroll-item] via transform,
  // então o evento "scroll" da janela nunca dispara: o estado é lido a cada frame.
  function watchScroll(nav) {
    var firstStep = document.querySelector("[data-scroll-item]");
    var scrolled = null;

    function tick() {
      var next = isPageScrolled(firstStep);
      if (next !== scrolled) {
        scrolled = next;
        nav.classList.toggle(SCROLLED_CLASS, next);
      }
      window.requestAnimationFrame(tick);
    }

    tick();
  }

  function syncMenuState(nav, button) {
    var observer = new MutationObserver(function () {
      var isOpen = nav.classList.contains(OPEN_CLASS);
      button.setAttribute("aria-expanded", String(isOpen));
      button.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });
    observer.observe(nav, { attributes: true, attributeFilter: ["class"] });
  }

  function closeMenuOnNavigate(nav, button) {
    nav.querySelectorAll(".navbar_menu a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (nav.classList.contains(OPEN_CLASS)) button.click();
      });
    });
  }

  // Sem o bundle (WebGL indisponível ou falha de rede) ninguém controla o menu mobile.
  function enableFallbackToggle(nav, button) {
    document.addEventListener("onlink:globe-failed", function () {
      button.addEventListener("click", function () {
        nav.classList.toggle(OPEN_CLASS);
      });
    }, { once: true });
  }

  function init() {
    var nav = document.querySelector(".navbar_component");
    var button = nav && nav.querySelector(".navbar_menu-button");
    if (!nav || !button) return;

    watchScroll(nav);
    syncMenuState(nav, button);
    closeMenuOnNavigate(nav, button);
    enableFallbackToggle(nav, button);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
