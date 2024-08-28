const block_section = document.querySelectorAll(
  "#contents > ytd-rich-section-renderer",
);

if (block_section.length > 0) {
  block_section.forEach((element) => (element.style.display = "none"));
}

window.onload = function () {
  const in_focused_video_url_shorts = document.querySelectorAll(
    "#contents > ytd-reel-shelf-renderer",
  );

  if (in_focused_video_url_shorts.length > 0) {
    in_focused_video_url_shorts.forEach((element) => element.remove());
  }
};
