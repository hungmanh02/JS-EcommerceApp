const inputName = document.querySelector(".name");
const inputPassword = document.querySelector(".password");
const button = document.querySelector("div.form-container button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  const userRegisterStorage = JSON.parse(localStorage.getItem("userRegister"));
  console.log(userRegisterStorage);
  if (inputName.value == "" || inputPassword == "") {
    alert("vui lòng nhập thông tin đăng nhập hệ thống");
  } else {
    if (
      inputName.value == userRegisterStorage.name &&
      inputPassword.value == userRegisterStorage.password
    ) {
      swal({
        title: "Đăng nhập hệ thống thành công",
        icon: "success",
      }).then(() => {
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1500);
      });
    } else {
      swal({
        title: "Đăng nhập hệ thống thất bại",
        icon: "error",
      });
    }
  }
});
