const mainSlideshow = document.querySelectorAll(".slideshow-main img");
const header = document.querySelector("header");
const headerTitle = document.querySelector("header a");

let currentSlide = 0;

function slideshow(slides) {
  for (let i = 0; i < slides.length; i++) {
    if (i === currentSlide) {
      slides[i].classList.add("active");
    } else {
      slides[i].classList.remove("active");
    }
  }
  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(() => slideshow(mainSlideshow), 5000);

window.addEventListener("scroll", () => {
  if (window.scrollY >= 10) {
    header.classList.add("scroll-fade-in");
    headerTitle.classList.add("header-title-scroll");
    header.classList.remove("scroll-fade-out");
  } else {
    header.classList.remove("scroll-fade-in");
    headerTitle.classList.remove("header-title-scroll");
    header.classList.add("scroll-fade-out");
  }
});
