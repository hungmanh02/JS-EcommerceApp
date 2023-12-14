const formContainer = document.querySelector("div.form-container");
const button = formContainer.querySelector("button");
const container = document.querySelector(".container");
const loader = document.querySelector(".loader");

setTimeout(() => {
  loader.style.display = "none";
  container.style.display = "flex";
}, 2000);

button.addEventListener("click", function (e) {
  e.preventDefault();
  let userRegister = {};
  let users = JSON.parse(localStorage.getItem("userRegister")) || [];
  formContainer.querySelectorAll("input").forEach(function (element) {
    userRegister[element.name] = element.value;
  });
  if (
    userRegister.name == "" ||
    userRegister.email == "" ||
    userRegister.password == ""
  ) {
    swal({
      title: "Đăng ký thất bại",
      text: "Vui lòng nhập lại những thông tin đăng ký",
      icon: "error",
    });
  } else {
    async function postData(urlApi = "", data = {}) {
      const config = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };
      const respon = await fetch(urlApi, config);
      return respon.json();
    }
    const res = postData(
      "https://657959a3f08799dc8046b4b6.mockapi.io/api/users",
      userRegister
    );
    res.then((data) => {
      users.push(data);
      localStorage.setItem("userRegister", JSON.stringify(users));
    });

    swal({
      title: "Đăng ký tài khoản thành công",
      icon: "success",
    }).then(() => {
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    });
  }
});
