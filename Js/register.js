const formContainer = document.querySelector("div.form-container");
const button = formContainer.querySelector("button");
const inputNameValue = formContainer.querySelector(".name");
const inputEmailValue = formContainer.querySelector(".email");
const inputPasswordValue = formContainer.querySelector(".password");
const container = document.querySelector(".container");
const loader = document.querySelector(".loader");

setTimeout(() => {
  loader.style.display = "none";
  container.style.display = "flex";
}, 2000);

button.addEventListener("click", function (e) {
  e.preventDefault();
  const userRegister = {
    name: inputNameValue.value,
    email: inputEmailValue.value,
    password: inputPasswordValue.value,
  };
  if (
    inputNameValue.value == "" ||
    inputEmailValue.value == "" ||
    inputPasswordValue == ""
  ) {
    alert("vui lòng nhập lại thông tin");
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
      localStorage.setItem("userRegister", JSON.stringify(data));
    });

    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    }).then(() => {
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    });
  }
});
