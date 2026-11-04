(function () {
  var ROOT_SELECTOR = ".faq-list";
  var ITEM_SELECTOR = ".faq-item";

  function closeSiblings(opened) {
    var root = opened.closest(ROOT_SELECTOR);
    if (!root) return;

    root.querySelectorAll(ITEM_SELECTOR).forEach(function (item) {
      if (item !== opened && item.open) item.open = false;
    });
  }

  function init() {
    var root = document.querySelector(ROOT_SELECTOR);
    if (!root) return;

    root.addEventListener("toggle", function (event) {
      var item = event.target;
      if (!item.matches(ITEM_SELECTOR) || !item.open) return;
      closeSiblings(item);
    }, true);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
