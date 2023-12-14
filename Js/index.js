const userName = document.querySelector("p.username");
const userLogin = JSON.parse(localStorage.getItem("userLogin"));
const userRegister = JSON.parse(localStorage.getItem("userRegister"));
const button = document.querySelector(".user button");

userName.innerHTML = userLogin?.name || "";
button.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.removeItem("userLogin");
});
if (userLogin == undefined) {
  window.location.href = "register.html";
}
