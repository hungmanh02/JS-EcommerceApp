const userName = document.querySelector("p.username");
const userLogin = JSON.parse(localStorage.getItem("userLogin"));
const userRegister = JSON.parse(localStorage.getItem("userRegister"));
const buttonLogout = document.querySelector(".user .logout");
const iconMenu = document.querySelector("#menu-bar");
const navbar = document.querySelector("header .navbar");
const slides = document.querySelectorAll(".slide-container");
const cartLength = document.querySelector(".cart-product #count");
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
let cart = JSON.parse(localStorage.getItem("carts")) || [];
products = JSON.parse(localStorage.getItem("products"));

const productContainer = document.querySelector("#product .box-container");

fetch("https://fakestoreapi.com/products?limit=10")
  .then((res) => res.json())
  .then(function (data) {
    if (localStorage.getItem("products") == null) {
      localStorage.setItem("products", JSON.stringify(data));
    }
    data.forEach((element) => {
      productContainer.innerHTML += `<div class="box">
        <div class="icons">
          <a href="#" class="fa fa-heart"></a>
          <a href="#" class="fa fa-share"></a>
          <a href="#" class="fa fa-eye"></a>
        </div>
        <div class="content">
          <img src="${element.image}" alt="" />
          <h3>${element.title}</h3>
          <div class="price">$${element.price} </div> 
          <div><a href="#" data-id="${element.id}" onclick="addToCart(${element.id})" class="btn">add to card</a></div>
          <div class="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
        </div>
      </div>`;
    });
  });
cartLength.innerHTML = cart.length;
function addToCart(a) {
  let idThisProductInCart = cart.findIndex((value) => value.id == a);

  if (cart.length == 0) {
    products.find(function (element) {
      if (element.id == a) {
        element["quantity"] = 1;
        cart.push(element);
        localStorage.setItem("carts", JSON.stringify(cart));
        cartLength.innerHTML = cart.length;
      }
    });
  } else {
    // Cách 1:
    if (idThisProductInCart < 0) {
      products.find(function (element) {
        if (element.id == a) {
          element["quantity"] = 1;
          cart.push(element);
          localStorage.setItem("carts", JSON.stringify(cart));
          cartLength.innerHTML = cart.length;
        }
      });
    } else {
      cart[idThisProductInCart].quantity =
        cart[idThisProductInCart].quantity + 1;
      cartLength.innerHTML = cart.length;
    }
  }
}
const buttonCart = document.querySelector(".user .cart-product");

buttonCart.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "cart.html";
});
