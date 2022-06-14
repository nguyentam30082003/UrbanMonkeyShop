const $ = document.querySelector.bind(document);
const btnOpenMenu = document.querySelector(".nav-hamberger");
const menu = document.querySelector(".nav-menu");
// OUT PRODUCT BTN

// Open menu
btnOpenMenu.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
});
