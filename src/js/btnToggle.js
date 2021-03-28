const btnMenu = document.querySelector(".js-btnMenu");
const navContainer = document.querySelector(".js-nav");
const navLink = document.querySelector(".js-link");
const navBar = document.querySelector(".js-bar__nav");

const openNav = () => {
  if (navContainer.classList.contains("hidden")) {
    navContainer.classList.remove("hidden");
    // navContainer.classList.add("open");
    // navContainer.classList.remove("close");
  } else {
    // navContainer.classList.add("close");
    // navContainer.classList.remove("open");
    navContainer.classList.add("hidden");
  }
};

btnMenu.addEventListener("click", openNav);

// const closeNav = () => {
//   // navContainer.classList.add("close");
//   // navContainer.classList.remove("open");
//   navContainer.classList.add("hidden");
// };

// navContainer.addEventListener("click", closeNav);

const closeNavLink = () => {
  if (navContainer.classList.contains("hidden")) {
    navContainer.classList.remove("hidden");
    // navContainer.classList.add("open");
    // navContainer.classList.remove("close");
  } else {
    // navContainer.classList.add("close");
    // navContainer.classList.remove("open");
    navContainer.classList.add("hidden");
  }
};

navLink.addEventListener("click", closeNavLink);
