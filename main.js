const mainSlideshow = document.querySelectorAll(".slideshow-main img");
const header = document.querySelector("header");
const menuButton = document.getElementById("menu-button");
const menuButtons = document.querySelectorAll(".menu-buttons");
console.log(menuButtons);

//Toggle menu
menuButton.addEventListener("click", () => {
  const menu = document.querySelector(".menu-buttons-ctn");
  menu.classList.toggle("active");
  menuButton.classList.toggle("active");
});

//Close menu when a menu button is clicked
menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const menu = document.querySelector(".menu-buttons-ctn");
    menu.classList.toggle("active");
  });
});

//Main slide show
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
    header.classList.remove("scroll-fade-out");
  } else {
    header.classList.remove("scroll-fade-in");
    header.classList.add("scroll-fade-out");
  }
});
