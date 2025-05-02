import { initReviews } from "./reviews.js";

function initScrollAnimation() {
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimation();
  initReviews();
});

const menuButton = document.querySelector(".header-menu-btn");
const modalOverlay = document.querySelector(".modal-overley");
const closeModalButton = document.querySelector(".modal-close-btn");

function openModal() {
  modalOverlay.classList.add("is-open");
}

function closeModal() {
  modalOverlay.classList.remove("is-open");
}

menuButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);
