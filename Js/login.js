const inputName = document.querySelector(".name");
const inputPassword = document.querySelector(".password");
const button = document.querySelector("div.form-container button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  const userRegisterStorage = JSON.parse(localStorage.getItem("userRegister"));

  // console.log(userRegisterStorage);
  if (inputName.value == "" || inputPassword == "") {
    alert("vui lòng nhập thông tin đăng nhập hệ thống");
  } else {
    userRegisterStorage.map(function (element) {
      if (
        inputName.value == element.name &&
        inputPassword.value == element.password
      ) {
        localStorage.setItem("userLogin", JSON.stringify(element));
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
    });
  }
});
