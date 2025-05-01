import { initReviews } from "./reviews.js";

async function loadSection(selector, path) {
  try {
    const res = await fetch(path);
    if (!res.ok) {
      throw new Error(`Failed to load ${path}: ${res.statusText}`);
    }
    const html = await res.text();
    document.querySelector(selector).innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

loadSection("#header", "/src/partials/header.html");
loadSection("#hero", "/src/partials/hero.html");
loadSection("#about", "/src/partials/about.html");
loadSection("#services", "/src/partials/services.html");
loadSection("#benefits", "/src/partials/benefits.html");
loadSection("#reviews", "/src/partials/reviews.html").then(() => {
  initReviews();
});
loadSection("#form", "/src/partials/form.html");
loadSection("#location", "/src/partials/location.html");
loadSection("#footer", "/src/partials/footer.html");

function initScrollAnimation() {
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          unobserve(entry.target);
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
});
