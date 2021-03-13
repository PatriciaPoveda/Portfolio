const btnMenu = document.querySelector(".js-btnMenu");
const navContainer = document.querySelector(".js-nav");
const navLink = document.querySelector(".js-link");

const openNav = () => {
  navContainer.classList.toggle("hidden");
};

btnMenu.addEventListener("click", openNav);

const closeNav = () => {
  navContainer.classList.toggle("hidden");
};

navLink.addEventListener("click", closeNav);
