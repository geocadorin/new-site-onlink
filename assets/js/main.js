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
    initIndustriesShowcase();
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

  function initIndustriesShowcase() {
    var panel = document.querySelector("[data-industries-showcase]");
    if (!panel) return;

    var stage = panel.querySelector("[data-industries-stage]");
    var cards = panel.querySelectorAll("[data-industry-card]");
    if (!stage || !cards.length) return;

    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var activeIndex = 0;
    var isInView = false;
    var isPointerInside = false;
    var cycleTimer = null;
    var enteredTimer = null;

    if (!prefersReducedMotion) {
      panel.classList.add("is-ready");
    } else {
      panel.classList.add("is-inview", "has-entered");
    }

    function setActiveCard(index) {
      activeIndex = index;
      cards.forEach(function (card, i) {
        card.classList.toggle("is-active", i === index);
      });
    }

    function startAutoCycle() {
      stopAutoCycle();
      if (prefersReducedMotion || !isInView || isPointerInside) return;
      cycleTimer = window.setInterval(function () {
        setActiveCard((activeIndex + 1) % cards.length);
      }, 3200);
    }

    function stopAutoCycle() {
      if (cycleTimer) {
        window.clearInterval(cycleTimer);
        cycleTimer = null;
      }
    }

    cards.forEach(function (card, index) {
      card.addEventListener("mouseenter", function () {
        isPointerInside = true;
        stopAutoCycle();
        setActiveCard(index);
      });

      card.addEventListener("focus", function () {
        isPointerInside = true;
        stopAutoCycle();
        setActiveCard(index);
      });

      card.addEventListener("blur", function () {
        isPointerInside = false;
        startAutoCycle();
      });

      card.addEventListener("click", function () {
        setActiveCard(index);
      });

      card.addEventListener("pointermove", function (e) {
        var rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        var x = ((e.clientX - rect.left) / rect.width) * 100;
        var y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--spot-x", x.toFixed(1) + "%");
        card.style.setProperty("--spot-y", y.toFixed(1) + "%");
      });
    });

    if (!prefersReducedMotion) {
      stage.addEventListener("pointermove", function (e) {
        var rect = stage.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        var normX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        var normY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        stage.style.setProperty("--parallax-x", (normX * -14).toFixed(1) + "px");
        stage.style.setProperty("--parallax-y", (normY * -6).toFixed(1) + "px");
      });

      stage.addEventListener("pointerleave", function () {
        isPointerInside = false;
        stage.style.setProperty("--parallax-x", "0px");
        stage.style.setProperty("--parallax-y", "0px");
        startAutoCycle();
      });
    }

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            isInView = true;
            panel.classList.add("is-inview");
            window.clearTimeout(enteredTimer);
            enteredTimer = window.setTimeout(function () {
              panel.classList.add("has-entered");
            }, 850);
            startAutoCycle();
          } else {
            isInView = false;
            panel.classList.remove("is-inview", "has-entered");
            window.clearTimeout(enteredTimer);
            stopAutoCycle();
          }
        });
      }, { threshold: 0.16 });

      observer.observe(panel);
    } else {
      isInView = true;
      panel.classList.add("is-inview", "has-entered");
      startAutoCycle();
    }
  }

  document.addEventListener("DOMContentLoaded", initAnimations);
})();
