const userName = document.querySelector("p.username");
const userLogin = JSON.parse(localStorage.getItem("userLogin"));
const userRegister = JSON.parse(localStorage.getItem("userRegister"));
const buttonLogout = document.querySelector(".user button");
const iconMenu = document.querySelector("#menu-bar");
const navbar = document.querySelector("header .navbar");
const slides = document.querySelectorAll(".slide-container");
const buttonNextSlide = document.querySelector("div#next");
const buttonPrevSlide = document.querySelector("div#prev");
let index = 0;
userName.innerHTML = userLogin?.name || "";
buttonLogout.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("userLogin");
  window.location.href = "register.html";
});
if (userLogin === undefined) {
  window.location.href = "register.html";
}
iconMenu.addEventListener("click", function (e) {
  e.preventDefault();
  iconMenu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
buttonNextSlide.addEventListener("click", () => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
});

buttonPrevSlide.addEventListener("click", () => {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
});
