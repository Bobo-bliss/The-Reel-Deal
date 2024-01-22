const mainSlideshow = document.querySelectorAll(".slideshow-main img");
const header = document.querySelector("header");
const headerTitle = document.querySelector("header a");
const headerNav = document.querySelectorAll(".header-buttons button");
console.log(headerNav);

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
    headerNav.forEach((nav) => nav.classList.add("home-header-nav-scroll"));
    header.classList.remove("scroll-fade-out");
    headerNav.forEach((nav) => nav.classList.remove("home-header-nav"));
  } else {
    header.classList.remove("scroll-fade-in");
    headerTitle.classList.remove("header-title-scroll");
    headerNav.forEach((nav) => nav.classList.remove("home-header-nav-scroll"));
    header.classList.add("scroll-fade-out");
    headerNav.forEach((nav) => nav.classList.add("home-header-nav"));
  }
});
