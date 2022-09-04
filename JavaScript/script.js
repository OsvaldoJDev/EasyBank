const menuButton = document.querySelector(".hamburger-menu");
const menuButtonIcon = document.querySelector(".hamburger-menu img");
const menu = document.querySelector(".menu");

function abrirMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  menu.classList.toggle("open");
  if (!menu.classList.contains("open")) {
    menuButtonIcon.src = "./img/icon-hamburger.svg";
  } else {
    console.log("n tem");
    menuButtonIcon.src = "./img/icon-close.svg";
  }
}

menuButton.addEventListener("click", abrirMenu);
menuButton.addEventListener("touchstart", abrirMenu);
