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
      threshold: 0.1,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimation();
  initReviews();
  handleResponsiveVisibility();
  setupModal();
});

function toggleClass(element, className, add) {
  if (add) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}

function handleResponsiveVisibility() {
  const headerTitle = document.querySelector(".header-title");
  const headerNavList = document.querySelector(".header-nav-list");
  const aboutImg = document.querySelector(".about-img");
  const modalOverlay = document.querySelector(".modal-overlay");
  const headerMenuWrapper = document.querySelector(".header-menu-wrapper");

  if (window.innerWidth >= 1280) {
    toggleClass(headerTitle, "visually-hidden", false);
    toggleClass(headerNavList, "visually-hidden", false);
    toggleClass(aboutImg, "visually-hidden", false);
    toggleClass(modalOverlay, "visually-hidden", true);
    toggleClass(headerMenuWrapper, "visually-hidden", true);
  } else {
    toggleClass(headerTitle, "visually-hidden", true);
    toggleClass(headerNavList, "visually-hidden", true);
    toggleClass(aboutImg, "visually-hidden", true);
    toggleClass(modalOverlay, "visually-hidden", true);
    toggleClass(headerMenuWrapper, "visually-hidden", false);
  }
}

window.addEventListener("resize", handleResponsiveVisibility);

function setupModal() {
  const menuButton = document.querySelector(".header-menu-btn");
  const modalOverlay = document.querySelector(".modal-overlay");
  const closeModalButton = document.querySelector(".modal-close-btn");
  const headerMenuWrapper = document.querySelector(".header-menu-wrapper");

  function openModal() {
    toggleClass(modalOverlay, "is-open", true);
    toggleClass(modalOverlay, "visually-hidden", false);
    toggleClass(headerMenuWrapper, "visually-hidden", true);
  }

  function closeModal() {
    toggleClass(modalOverlay, "is-open", false);
    toggleClass(modalOverlay, "visually-hidden", true);

    if (window.innerWidth < 1280) {
      toggleClass(headerMenuWrapper, "visually-hidden", false);
    }
  }

  menuButton.addEventListener("click", openModal);
  closeModalButton.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("is-open")) {
      closeModal();
    }
  });

  const menuItems = document.querySelectorAll(".header-nav-item-menu");
  menuItems.forEach((item) => {
    item.addEventListener("click", closeModal);
  });
}
