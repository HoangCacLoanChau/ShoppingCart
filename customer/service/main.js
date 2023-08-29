import { renderProduct, showProduct } from "../controller/CustomerController.js";

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

window.addToCart = (proId) => {
  // let products = getLocalStorage("productList");
  let products = JSON.parse(localStorage.getItem("productList"));
  console.log("🚀 ~ products:", products);
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
  console.log(carts);
  totalQuantity();
  showProduct(carts);
  localStorage.setItem("carts", JSON.stringify(carts));
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
  //remove quantity ==0
  carts = carts.filter((x) => {
    return x.quantity !== 0;
  });
  //render number
  showProduct(carts);
  localStorage.setItem("carts", JSON.stringify(carts));
};

let totalQuantity = () => {
  let cartAmount = document.getElementById("cart-amount");
  let total = 0;
  carts.forEach((x) => {
    console.log(x.quantity);
    total += x.quantity;
    cartAmount.innerHTML = total;
  });
};
totalQuantity();
