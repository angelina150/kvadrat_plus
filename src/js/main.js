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
console.log("Loaded section:", about);

loadSection("#header", "/src/partials/header.html");
loadSection("#hero", "/src/partials/hero.html");
loadSection("#about", "/src/partials/about.html");
loadSection("#services", "/src/partials/services.html");
loadSection("#benefits", "/src/partials/benefits.html");
loadSection("#form", "/src/partials/form.html");
loadSection("#location", "/src/partials/location.html");

loadSection("#footer", "/src/partials/footer.html");
