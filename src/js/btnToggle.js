const btnMenu = document.querySelector(".js-btnMenu");
const navContainer = document.querySelector(".js-nav");
const navLink = document.querySelector(".js-link");
const navBar = document.querySelector(".js-bar__nav");

const openNav = () => {
  if (navContainer.classList.contains("hidden")) {
    navContainer.classList.remove("hidden");
    btnMenu.classList.add("whiteBtnToggle");
  } else {
    btnMenu.classList.remove("whiteBtnToggle");
    navContainer.classList.add("hidden");
  }
};

btnMenu.addEventListener("click", openNav);

const closeNavLink = () => {
  navContainer.classList.add("hidden");
  btnMenu.classList.remove("whiteBtnToggle");
};

navLink.addEventListener("click", closeNavLink);
