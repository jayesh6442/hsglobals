var wraper = document.querySelector("body .wraper");
var a = document.querySelectorAll(".menu a");
var section = document.querySelectorAll(".section");
var header = document.getElementById("header");
var menu = document.querySelector("header .menu");
var openBar = document.querySelector(".show-bar");
var menuShadow = document.querySelector(".menu-shadow");
section[0].classList.add("active-sec");

function openMenu() {
  menu.classList.add("menu-active");
  openBar.classList.add("hide-bar");
  menuShadow.classList.add("shadow-active");
}
function closeMenu() {
  menu.classList.remove("menu-active");
  openBar.classList.remove("hide-bar");
  menuShadow.classList.remove("shadow-active");
}
window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// slider js
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});
