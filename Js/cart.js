const userLogin = JSON.parse(localStorage.getItem("userLogin"));
const userName = document.querySelector("p.username");
userName.innerHTML = userLogin?.name || "";
const cartTable = document.querySelector(".cart-detail table");
const cartListTable = JSON.parse(localStorage.getItem("carts"));
if (!cartListTable) {
  cartTable.innerHTML += `<tr>
                              <td colspan="5" style="text-align:center">Không có sản phẩm trong giỏ hàng</td>
                          </tr>`;
} else {
  cartListTable.forEach(function (element) {
    const { category, description, id, image, price, quantity, rating, title } =
      element;
    cartTable.innerHTML += `<tr>
                                  <td>${title}</td>
                                  <td><img src="${image}" alt="${title}"  style="width:50px"/></td>
                                  <td>${price}</td>
                                  <td>${quantity}</td>
                                  <td>${category}</td>
                              </tr>`;
  });
}
