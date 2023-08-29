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
      <div class="card h-100 ">
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
      <a class="add-to-card btn btn-primary" onClick="addToCart(${id})" ><span>Add to cart </span><i class="fa fa-cart-arrow-down"></i></a>
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
// show product to cart
export let showProduct = (cart) => {
  console.log("aaaa", cart);
  let result = document.getElementById("product-cart");
  let contentHTML = "";
  if (cart) {
    cart.forEach((item) => {
      let { id, name, backCamera, desc, frontCamera, img, price, screen, type, quantity } = item;

      contentHTML +=
        /* html */
        `
        <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="../assets/img/iphone1.jpg" alt="..." class="w-100 h-100">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${desc}</p>
            <div>
            <i class="fa fa-minus minus" onClick="handleQuantity(${id},false)"></i>
            <span id="quantity">${quantity}</span>
            <i class="fa fa-plus plus" onClick="handleQuantity(${id},true)"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
        `;
    });
  } else {
    contentHTML = "Hãy chọn 1 sản phẩm ";
  }

  result.innerHTML = contentHTML;
};
