import { reviewsData } from "./data.js";

const reviewsCtn = document.querySelector(".reviews-reviews");

function addReviews(data) {
  data.forEach((review) => {
    const userCtn = document.createElement("div");
    userCtn.classList.add("user-ctn");
    userCtn.innerHTML = `
      <h3 tabindex="0" class="reviews-name">${review.userName}</h3>
      <p tabindex="0">
        <i class="fa-solid fa-star orange-red-star"></i>
        <i class="fa-solid fa-star orange-red-star"></i>
        <i class="fa-solid fa-star orange-red-star"></i>
        <i class="fa-solid fa-star orange-red-star"></i>
        <i class="fa-solid fa-star orange-red-star"></i>
      </p>
      <p tabindex="0" class="reviews-date">${review.userDate}</p>
      <p tabindex="0" class="reviews-comment">${review.userComment}</p>
      <p tabindex="0" class="reviews-text">
        ${review.userReview}
      </p>
    `;
    reviewsCtn.appendChild(userCtn);
  });
}

addReviews(reviewsData);
console.log(reviewsCtn);
