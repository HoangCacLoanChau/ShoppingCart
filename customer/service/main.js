import { renderProduct } from "../controller/CustomerController.js";

const BASE_URL = "https://64da100fe947d30a260ab426.mockapi.io/product";
//get phone list from API

let fetchProduct = () => {
  axios
    .get(BASE_URL)
    .then((res) => {
      renderProduct(res.data);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchProduct();
