"use strict";
const imgProjects = document.querySelector(".js-img-wrapper");

const moveImg = () => {
  imgProjects.classList.add("magictime", "boingInUp");
  console.log("5");
};

imgProjects.addEventListener("click", moveImg);
