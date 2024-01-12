import { modalData } from "./data.js";

const modalNames = modalData.map((item) => {
  return item.name;
});

const modalPictures = modalData.map((item) => {
  return item.images.map((image) => {
    return image.src;
  });
});

const mainSlideshow = document.querySelectorAll(".slideshow-main img");
const header = document.querySelector("header");

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

const modalButtons = document.querySelectorAll(".popup-modal");
const modalContainer = document.querySelector(".modal-container");

modalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonId = button.id;
    const modal = document.createElement("div");
    modal.classList.add("modal-bg");
    modal.innerHTML = `
        <div class="modal">
          <div class="modal-header">
            <h3 class="modal-title">${modalNames[buttonId]}</h3>
            <button class="modal-close">X</button>
          </div>
          <div class="modal-body"></div>
        </div>
    `;
    modalContainer.appendChild(modal);
    const modalBody = document.querySelector(".modal-body");
    modalPictures[buttonId].forEach((image) => {
      modalBody.innerHTML += `
        <img src="${image}" alt="modal image">
      `;
    });
  });
});
