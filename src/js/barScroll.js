const toggle = document.querySelector(".js-togg");
const btnFa = document.querySelector(".js-fa");

let lastScroll = 0;

const closeBar = () => {
  const currentScroll = window.pageYOffset;
  console.log(currentScroll);
  if (currentScroll == 0) {
    toggle.classList.remove("scrollUp");
    btnFa.classList.remove("scrollUp");
    return;
  }

  if (currentScroll > lastScroll && !toggle.classList.contains("scrollDown")) {
    // down
    toggle.classList.remove("scrollUp");
    btnFa.classList.remove("scrollUp");
    toggle.classList.add("scrollDown");
    btnFa.classList.add("scrollDown");
  } else if (
    currentScroll < lastScroll &&
    toggle.classList.contains("scrollDown")
  ) {
    // up
    toggle.classList.remove("scrollDown");
    btnFa.classList.remove("scrollDown");
    toggle.classList.add("scrollUp");
    btnFa.classList.add("scrollUp");
  }
  lastScroll = currentScroll;
};

window.addEventListener("scroll", closeBar);
