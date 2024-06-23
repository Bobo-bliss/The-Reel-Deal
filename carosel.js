import { carouselData } from "./data.js";

const carouselDataNames = carouselData.map((item) => {
  return item.name;
});

const carouselDataText = carouselData.map((item) => {
  return item.text;
});

const carouselDataPictures = carouselData.map((item) => {
  return item.images.map((image) => {
    return image.src;
  });
});

const roomButtons = document.querySelectorAll(".rooms");

const tourContainer = document.querySelector(".tour-ctn");
let carouselImages = document.querySelectorAll(".carousel");
const carouselButtons = document.querySelectorAll(".carousel-buttons button");

roomButtons.forEach((room) => {
  room.addEventListener("click", () => {
    const roomId = room.id;

    tourContainer.innerHTML = "";
    tourContainer.innerHTML = `
    <div class="tour-title">
    <h1 tabindex="0">${carouselDataNames[roomId]}</h1>
    <p tabindex="0">${carouselDataText[roomId]}</p>
    </div>
    <div class="carousel-ctn">
      <div class="carousel-img-ctn"></div>
  
      <div class="carousel-buttons">
        <button>
          <i class="fas fa-arrow-left"></i>
        </button>
        <button>
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
    `;

    const carouselImgCtn = document.querySelector(".carousel-img-ctn"); //select the img container

    let imagesLoaded = 0;

    //Load images to the container
    carouselDataPictures[roomId].forEach((image, index) => {
      let img = document.createElement("img");
      img.src = image;
      img.alt = carouselDataNames[roomId];
      img.classList.add("carousel");

      if (index === carouselDataPictures[roomId].length - 1) {
        img.classList.add("prev");
      } else if (index === 0) {
        img.classList.add("current");
      } else if (index === 1) {
        img.classList.add("next");
      }

      carouselImgCtn.appendChild(img);

      img.onload = function () {
        imagesLoaded++;

        if (imagesLoaded === carouselDataPictures[roomId].length) {
          carouselImages = document.querySelectorAll(".carousel");
          current = 0;
          next = current < carouselImages.length - 1 ? current + 1 : 0;
          prev = current > 0 ? current - 1 : carouselImages.length - 1;
          updateCarousel();
        }
      };
    });

    const carouselButtons = document.querySelectorAll(
      ".carousel-buttons button"
    );

    for (let i = 0; i < carouselButtons.length; i++) {
      carouselButtons[i].addEventListener("click", () => {
        i === 0 ? goToPrev() : goToNext();
      });
    }
  });
});

let current = 0;
let next = current < carouselImages.length - 1 ? current + 1 : 0;
let prev = current > 0 ? current - 1 : carouselImages.length - 1;

const updateCarousel = () => {
  carouselImages.forEach((image) => {
    image.classList.remove("prev", "current", "next"); //Remove all classes
  });
  carouselImages[next].classList.add("next"); //Add classes to current, next, and prev
  carouselImages[current].classList.add("current");
  carouselImages[prev].classList.add("prev");
};

const moveCarousel = (index) => {
  //Update next and prev
  current = index;
  next = current < carouselImages.length - 1 ? current + 1 : 0;
  prev = current > 0 ? current - 1 : carouselImages.length - 1;
  updateCarousel();
};

const goToNext = () => {
  //Move carousel to the next image
  current < carouselImages.length - 1
    ? moveCarousel(current + 1)
    : moveCarousel(0);
};
const goToPrev = () => {
  //Move carousel to the previous image
  current > 0
    ? moveCarousel(current - 1)
    : moveCarousel(carouselImages.length - 1);
};

for (let i = 0; i < carouselButtons.length; i++) {
  carouselButtons[i].addEventListener("click", () => {
    i === 0 ? goToPrev() : goToNext();
  });
}
