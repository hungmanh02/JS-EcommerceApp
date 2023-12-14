const inputName = document.querySelector(".name");
const inputPassword = document.querySelector(".password");
const button = document.querySelector("div.form-container button");

const userRegisterStorage = JSON.parse(localStorage.getItem("userRegister"));
button.addEventListener("click", function (e) {
  e.preventDefault();

  // console.log(userRegisterStorage);
  if (inputName.value == "" || inputPassword.value == "") {
    swal({
      title: "Đăng ký thất bại",
      text: "Vui lòng nhập lại những thông tin đăng ký",
      icon: "error",
    });
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
