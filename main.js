const mainSlideshow = document.querySelectorAll(".slideshow-main img");
const header = document.querySelector("header");

let currentSlide = 0;

function slideshow(mainSlideshow) {
  for (let i = 0; i < mainSlideshow.length; i++) {
    if (i === currentSlide) {
      mainSlideshow[i].classList.add("active");
    } else {
      mainSlideshow[i].classList.remove("active");
    }
  }
  currentSlide = (currentSlide + 1) % mainSlideshow.length;
}

setInterval(() => slideshow(mainSlideshow), 5000);

window.addEventListener("scroll", () => {
  if (window.scrollY >= 10) {
    header.classList.add("scroll-fade-in");
    header.classList.remove("scroll-fade-out"); // Change the background color to your desired color
  } else {
    header.classList.remove("scroll-fade-in");
    header.classList.add("scroll-fade-out"); // Reset the background color
  }
});

const modalButtons = document.querySelectorAll(".popup-modal");
const modalContainer = document.querySelector(".modal-container");

modalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.createElement("div");
    modal.classList.add("modal-bg");
    modal.innerHTML = `
        <div class="modal">
          <div class="modal-header">
            <h3 class="modal-title">Modal Title</h3>
            <button class="modal-close">X</button>
          </div>
          <div class="modal-body">
            
          </div>
        </div>
    `;
    modalContainer.appendChild(modal);
  });
});
