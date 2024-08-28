window.onload = function () {
  const shorts_sections = document.querySelectorAll(
    "#contents > ytd-rich-section-renderer, #contents > ytd-reel-shelf-renderer",
  );

  if (shorts_sections.length > 0) {
    shorts_sections.forEach((element) => (element.style.display = "none"));
  }
};
