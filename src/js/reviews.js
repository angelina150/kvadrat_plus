import Swiper from "swiper";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css/bundle";

export function initReviews() {
  const reviewsList = document.querySelector(".reviews-list");
  const reviewsSwiperContainer = document.querySelector(
    ".reviews-swiper-container"
  );
  const reviewsNextButton = document.querySelector(
    ".reviews-swiper-button-next"
  );
  const reviewsPrevButton = document.querySelector(
    ".reviews-swiper-button-prev"
  );

  if (!reviewsSwiperContainer || !reviewsList) return;

  new Swiper(reviewsSwiperContainer, {
    modules: [Navigation, Keyboard],
    navigation: {
      nextEl: reviewsNextButton,
      prevEl: reviewsPrevButton,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      invert: true,
    },
    spaceBetween: 16,
    speed: 1100,
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 2,
      },
    },
  });
}
