(function () {
  var ITEM_SELECTOR = "[data-scroll-item]";
  var NATIVE_CLASS = "is-scroll-native";

  function isNativeScroll() {
    return document.body.classList.contains(NATIVE_CLASS);
  }

  // Instância do scroll virtual exposta pelo bundle skylo-globe (window.onlinkScroll).
  function getVirtualScroll() {
    var scroll = window.onlinkScroll;
    return scroll && scroll.sections && scroll.sections.length ? scroll : null;
  }

  // Alvos fora do scroll virtual (ex.: #inicio, o hero fixo) levam ao primeiro passo.
  function findSectionIndex(scroll, target) {
    var item = target.closest(ITEM_SELECTOR) || target.querySelector(ITEM_SELECTOR);
    if (!item) return 0;

    for (var i = 0; i < scroll.sections.length; i++) {
      if (scroll.sections[i].el === item) return i;
    }
    return -1;
  }

  function goToSection(scroll, index) {
    if (index < 0) return;
    scroll.clearSnapTl();
    scroll.index.current = index;
    scroll.scrollTo(-scroll.sections[index].elBounds.offsetTop);
  }

  function onAnchorClick(event) {
    var link = event.target.closest('a[href^="#"]');
    if (!link || isNativeScroll()) return;

    var target = document.getElementById(link.getAttribute("href").slice(1));
    if (!target) return;

    event.preventDefault();
    var scroll = getVirtualScroll();
    if (scroll) goToSection(scroll, findSectionIndex(scroll, target));
  }

  function onFocusIn(event) {
    var scroll = !isNativeScroll() && getVirtualScroll();
    if (!scroll || !event.target.closest(ITEM_SELECTOR)) return;

    var index = findSectionIndex(scroll, event.target);
    if (index !== scroll.index.current) goToSection(scroll, index);
  }

  // O body é travado pelo bundle; âncoras, foco e "localizar na página" rolariam o .page-wrapper e desalinhariam o palco.
  function pinWrapper(wrapper) {
    wrapper.addEventListener("scroll", function () {
      if (isNativeScroll()) return;
      wrapper.scrollTop = 0;
      wrapper.scrollLeft = 0;
    });
  }

  function init() {
    var wrapper = document.querySelector(".page-wrapper");
    if (wrapper) pinWrapper(wrapper);

    document.addEventListener("click", onAnchorClick);
    document.addEventListener("focusin", onFocusIn);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
