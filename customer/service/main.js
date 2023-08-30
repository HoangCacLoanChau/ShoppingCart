import { renderProduct, showMessage, showProduct } from "../controller/CustomerController.js";

const BASE_URL = "https://64da100fe947d30a260ab426.mockapi.io/product";
//get phone list from API

let fetchProduct = () => {
  axios
    .get(BASE_URL)
    .then((res) => {
      renderProduct(res.data);
      console.log(res);
      var jsonData = JSON.stringify(res.data);
      localStorage.setItem("productList", jsonData);
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchProduct();

let carts = JSON.parse(localStorage.getItem("carts")) || [];

let products = JSON.parse(localStorage.getItem("productList"));

window.addToCart = (proId) => {
  // let products = getLocalStorage("productList");
  console.log("🚀 ~ products:", products);
  try {
    let newProduct = products.find((item) => {
      return item.id == proId;
    });
    let cartItem = { ...newProduct, quantity: 1 };
    console.log("🚀 ~ cartItem:", cartItem);
    let checkCart = carts.findIndex((item) => {
      return item.id == cartItem.id;
    });
    console.log(checkCart);
    checkCart == -1 ? carts.push(cartItem) : (carts[checkCart].quantity += 1);
    showMessage("Thêm thành công", true);

    totalQuantity();
    totalBill();
    showProduct(carts);
    localStorage.setItem("carts", JSON.stringify(carts));
  } catch (error) {
    console.log(error);
    showMessage("Thêm thất bại", false);
  }
};
showProduct(carts);

window.handleQuantity = (id, action) => {
  let item = carts.find((item) => {
    return item.id == id;
  });

  let index = carts.findIndex((i) => {
    return i.id == item.id;
  });
  //update itemCart

  if (item.quantity == 0) {
    return;
  } else {
    action ? (item.quantity += 1) : (item.quantity -= 1);
    console.log(item.quantity);
  }
  carts[index] = item;
  totalBill();

  //remove quantity == 0
  carts = carts.filter((x) => {
    return x.quantity !== 0;
  });
  //render number

  showProduct(carts);
  //set item
  localStorage.setItem("carts", JSON.stringify(carts));
};

let totalQuantity = () => {
  let cartAmount = document.getElementById("cart-amount");
  let total = 0;
  if (carts.length > 0) {
    carts.forEach((x) => {
      console.log(x.quantity);
      total += x.quantity;
    });
  } else {
    total = 0;
  }
  cartAmount.innerHTML = total;
};
totalQuantity();

//filter
window.findByType = () => {
  var type = document.querySelector("#typeOfPhone").value;
  let pros = JSON.parse(localStorage.getItem("productList"));

  if (type == "1") {
    pros = products.filter((x) => {
      return x.type == true;
    });
  } else if (type == "0") {
    pros = products.filter((x) => {
      return x.type == false;
    });
  } else {
    renderProduct(pros);
  }

  renderProduct(pros);
};

let totalBill = () => {
  let result = document.getElementById("bill");
  let amount = 0;
  if (carts) {
    amount = carts
      .map((x) => {
        let { quantity, price } = x;
        return quantity * price;
      })
      .reduce((x, y) => x + y, 0);
  } else {
    return;
  }
  result.innerHTML = `Your Bill: ${Intl.NumberFormat().format(amount)} VND`;
  console.log(amount);
};
totalBill();

window.onCloseModal = () => {
  fetchProduct();
  showProduct(carts);
  totalQuantity();
  totalBill();
};
///remove cart item
window.removeItemCart = (id) => {
  let selectedItem = carts.find((item) => {
    return item.id == id;
  });
  console.log(selectedItem);
  carts = carts.filter((x) => {
    return x.id !== selectedItem.id;
  });
  localStorage.setItem("carts", JSON.stringify(carts));
  showProduct(carts);
};

//clear cart
window.clearCart = () => {
  try {
    carts = [];
    localStorage.setItem("carts", JSON.stringify(carts));
    fetchProduct();
    showProduct(carts);
    totalQuantity();
    totalBill();

    Swal.fire({
      icon: "success",
      title: "Thank you for buying",
      text: "See you later!",
    });
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  }
};
