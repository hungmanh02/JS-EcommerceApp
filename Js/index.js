const userName = document.querySelector("p.username");
const userLogin = JSON.parse(localStorage.getItem("userLogin"));
const userRegister = JSON.parse(localStorage.getItem("userRegister"));
const buttonLogout = document.querySelector(".user button");
const buttonMenu = document.getElementById("menu-bar");
const navbar = document.querySelector("header .navbar");
userName.innerHTML = userLogin?.name || "";
buttonLogout.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("userLogin");
  window.location.href = "register.html";
});
if (userLogin === undefined) {
  window.location.href = "register.html";
}
buttonMenu.addEventListener("click", function (e) {
  e.preventDefault();
  navbar.style.left = "0";
  navbar.innerHTML += `<a href="#!">${userLogin?.name}</a>`;
});
