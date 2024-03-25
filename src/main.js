// Light & Dark Mode
const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");
checkbox.addEventListener("click", function () {
  checkbox.checked ? html.classList.add("dark") : html.classList.remove("dark");
});

// Zoom in image portofolio
document.addEventListener("DOMContentLoaded", function () {
  const zoomableImages = document.querySelectorAll(".zoomable");
  const handleScroll = () => {
    zoomableImages.forEach((image) => {
      if (image.classList.contains("zoomed")) {
        image.classList.remove("zoomed");
      }
    });
  };
  zoomableImages.forEach((image) => {
    image.addEventListener("click", function () {
      this.classList.toggle("zoomed");
    });
  });
  window.addEventListener("scroll", handleScroll);
});
