import { renderProduct } from "../controller/CustomerController.js";

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

window.addToCart = (proId) => {
  let products = getLocalStorage("productList");
  let carts = JSON.parse(localStorage.getItem("carts")) || [];
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
  localStorage.setItem("carts", JSON.stringify(carts));
};
