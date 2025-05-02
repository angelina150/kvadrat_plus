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

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var form = this;
    var formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("form-response").style.display = "block";
          form.reset();
        } else {
          alert("Щось пішло не так. Будь ласка, спробуйте ще раз.");
        }
      })
      .catch((error) => {
        alert("Помилка під час відправки форми.");
      });
  });

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    let name = document.querySelector('input[name="name"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let message = document.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
      event.preventDefault();
      alert("Будь ласка, заповніть всі поля!");
    }
  });
