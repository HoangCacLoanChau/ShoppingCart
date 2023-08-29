import { product } from "../model/product.js";

const IPHONE = "iphone";
const SAMSUNG = "samsung";
export let renderProduct = (product) => {
  let result = document.getElementById("phone-list");
  let contentHTML = "";

  product.reverse().forEach((item) => {
    let { id, name, backCamera, desc, frontCamera, img, price, screen, type } = item;
    contentHTML +=
      /*html*/
      `
      <div class="col-lg-3 col-sm-4 col-6 item">
      <div class="card h-100 w-100">
      <img class="card-img-top" src="../assets/img/iphone1.jpg" alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${name} </h5>
      <p class= "card-text" ><span class="font-weight-bold desc ">Descripton: </span>${desc}</p>
      <p class= "card-text" ><span class="font-weight-bold desc">Price: </span>${price} USD</p>
      <p class= "card-text" ><span class="font-weight-bold desc">Type: </span>${
        type ? IPHONE : SAMSUNG
      } </p>
      </div>
      <div class="cart-button">
      <a href="#" class="add-to-card btn btn-primary" onClick="addToCart(${id})" ><span>Add to cart </span><i class="fa fa-cart-arrow-down"></i></a>
      </div>

      </div>
      </div>
   
`;
  });
  result.innerHTML = contentHTML;
};

// get from ls
export let getLocalStorage = (itemName) => {
  var arr = [];
  var listFromLS = localStorage.getItem(itemName);
  if (listFromLS != null) {
    listFromLS = JSON.parse(listFromLS);
    return listFromLS.map((item) => {
      let { id, name, backCamera, desc, frontCamera, img, price, screen, type } = item;

      return new product(id, name, backCamera, desc, frontCamera, img, price, screen, type);
    });
  } else {
    return arr;
  }
};
