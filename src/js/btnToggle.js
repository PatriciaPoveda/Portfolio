const btnMenu = document.querySelector(".js-btnMenu");
const navContainer = document.querySelector(".js-nav");
const navLink = document.querySelector(".js-link");

const openNav = () => {
  if (navContainer.classList.contains("hidden")) {
    navContainer.classList.remove("hidden");
    window.addEventListener("scroll", closeNavLink);
  } else {
    navContainer.classList.add("hidden");
  }
};
const closeNavLink = () => {
  navContainer.classList.add("hidden");
};

btnMenu.addEventListener("click", openNav);
navLink.addEventListener("click", closeNavLink);
