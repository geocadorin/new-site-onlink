(function () {
  var AOS_ANIMATE_CLASS = "aos-animate";

  function revealAos(el) {
    el.classList.add(AOS_ANIMATE_CLASS);
  }

  // O scroll virtual move os painéis via transform e não altera pageYOffset.
  // Observar o .scroll-panel (não cada filho): o fade-up do AOS começa 100px abaixo
  // e, num painel de 100vh, a última fila nunca cruzaria o threshold sozinha.
  function revealOnIntersect() {
    var targets = document.querySelectorAll("[data-aos]");
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach(revealAos);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        if (entry.target.hasAttribute("data-aos")) {
          revealAos(entry.target);
        } else {
          entry.target.querySelectorAll("[data-aos]").forEach(revealAos);
        }
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.2 });

    document.querySelectorAll(".scroll-panel").forEach(function (panel) {
      observer.observe(panel);
    });
    targets.forEach(function (el) {
      if (!el.closest(".scroll-panel")) observer.observe(el);
    });
  }

  function initAnimations() {
    if (typeof window.AOS === "undefined") {
      console.warn("[OnLink] AOS não carregou; as animações de entrada foram desativadas.");
    } else {
      var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      window.AOS.init({
        disable: prefersReducedMotion,
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 80,
      });
    }

    revealOnIntersect();
    initAppShowcase();
  }

  function initAppShowcase() {
    var root = document.querySelector("[data-app-showcase]");
    if (!root) return;

    var pillars = root.querySelectorAll("[data-app-pillar]");
    var items = root.querySelectorAll("[data-app-item]");
    if (!pillars.length || !items.length) return;

    function setActive(index) {
      pillars.forEach(function (pillar, i) {
        pillar.classList.toggle("is-active", i === index);
      });
      items.forEach(function (item, i) {
        item.classList.toggle("is-active", i === index);
      });
    }

    pillars.forEach(function (pillar, index) {
      pillar.addEventListener("mouseenter", function () {
        setActive(index);
      });
      pillar.addEventListener("focus", function () {
        setActive(index);
      });
      pillar.addEventListener("click", function () {
        setActive(index);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", initAnimations);
})();
