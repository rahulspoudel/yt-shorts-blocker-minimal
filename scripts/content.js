const block_section = document.querySelectorAll("#dismissible #contents");

if (block_section.length > 0) {
  block_section.forEach((element) => (element.style.display = "none"));
}
