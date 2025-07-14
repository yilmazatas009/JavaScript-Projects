// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".lightbox-trigger").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

closeBtn.onclick = function () {
  lightbox.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === lightbox) {
    lightbox.style.display = "none";
  }
};