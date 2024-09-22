const hideShorts = () => {
  const shorts_sections = document.querySelectorAll(
    "#contents > ytd-rich-section-renderer, #contents > ytd-reel-shelf-renderer",
  );

  if (shorts_sections.length > 0) {
    shorts_sections.forEach((element) => (element.style.display = "none"));
  }
};

// Run initial blocking
hideShorts();

// Using MutationObserver to handle the dynamically loaded contents
// and rerun the blocking script when something changes
const observer = new MutationObserver(hideShorts);
observer.observe(document.body, { childList: true, subtree: true });
