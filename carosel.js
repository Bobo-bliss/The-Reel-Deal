const carouselImages = document.querySelectorAll(".carousel");
const carouselButtons = document.querySelectorAll(".carousel-buttons button");

let current = Math.floor(Math.random() * carouselImages.length); // random image start
let next = current < carouselImages.length - 1 ? current + 1 : 0;
let prev = current > 0 ? current - 1 : carouselImages.length - 1;

const updateCarousel = () => {
  carouselImages.forEach((image) => {
    image.classList.remove("prev", "current", "next"); //Remove all classes
  });
  carouselImages[current].classList.add("current");
  carouselImages[next].classList.add("next"); //Add classes to current, next, and prev
  carouselImages[prev].classList.add("prev");
};

const moveCarousel = (index) => {
  current = index;
  next = current < carouselImages.length - 1 ? current + 1 : 0; //Update next and prev
  prev = current > 0 ? current - 1 : carouselImages.length - 1;
  updateCarousel();
};

const goToNext = () => {
  current < carouselImages.length - 1
    ? moveCarousel(current + 1)
    : moveCarousel(0); //Move carousel to the next image
};
const goToPrev = () => {
  current > 0
    ? moveCarousel(current - 1)
    : moveCarousel(carouselImages.length - 1); //Move carousel to the previous image
};

for (let i = 0; i < carouselButtons.length; i++) {
  carouselButtons[i].addEventListener("click", () => {
    i === 0 ? goToPrev() : goToNext();
  });
}

updateCarousel();
