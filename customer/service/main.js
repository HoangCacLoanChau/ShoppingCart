import { renderProduct, showProduct } from "../controller/CustomerController.js";
const INCREASE = true;
const DECREASE = false;
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
export let carts = JSON.parse(localStorage.getItem("carts")) || [];

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
  console.log(item);
  //update itemCart

  if (action) {
    item.quantity += 1;
  } else {
    if (item.quantity === 1) {
      carts.splice(index, 1);
    } else {
      item.quantity -= 1;
    }
  }

  carts[index] = item;
  //render number
  showProduct(carts);
  localStorage.setItem("carts", JSON.stringify(carts));
};
