import { product } from "../model/product.js";

const IPHONE = "iphone";
const SAMSUNG = "samsung";
const IPHONE_IMG = "../../img/iphone1.jpg";
const SAMSUNG_IMG = "../../img/samsung.jpg";
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
      <div class="image-phone">
        <img class="card-img-top " src=${type ? IPHONE_IMG : SAMSUNG_IMG} alt="Card image cap">
        <div class="more-info ">
      <p class= "pt-2"><span class="font-weight-bold desc pl-3 ">Back CAM: </span>${backCamera}</p>
      <p><span class="font-weight-bold desc pl-3 ">Front CAM: </span>${frontCamera}</p>
      <p><span class="font-weight-bold desc pl-3 ">Screen: </span>${screen}</p>
      </div>
      </div>
      
    
      <div class="card-body">
      <h5 class="card-title">${name} </h5>
      <p class= "card-text" ><span class="font-weight-bold desc ">Descripton: </span>${desc}</p>
      <p class= "card-text" ><span class="font-weight-bold desc">Price: </span>${Intl.NumberFormat().format(
        price,
      )} VND</p>
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
  let result = document.getElementById("product-cart");
  let contentHTML = "";
  if (cart.length > 0) {
    cart.forEach((item) => {
      let { id, name, backCamera, desc, frontCamera, img, price, screen, type, quantity } = item;
      let totalPrice = quantity * price;
      contentHTML +=
        /* html */
        `
      <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img  src=${type ? IPHONE_IMG : SAMSUNG_IMG} alt="..." class="w-100 h-100">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class= "card-text " ><span class="font-weight-bold desc">Price: </span>${Intl.NumberFormat().format(
              price,
            )} VND</p>
            <p class="card-text">${desc}</p>
          
            <div id="total">
            <div class="ajust-quantity">
            <i class="fa fa-minus minus p-2 " onClick="handleQuantity(${id},false)"></i>
            <span id="quantity" class="p-3 font-weight-bold">${quantity}</span>
            <i class="fa fa-plus plus p-2" onClick="handleQuantity(${id},true)"></i>
            <i class="fa fa-trash-alt pl-3 trash" onClick="removeItemCart(${id})"></i>
            </div>
            <div>
            <span class= "card-text" ><span class="font-weight-bold desc">Total: </span>${Intl.NumberFormat().format(
              totalPrice,
            )}  VND</span>

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
              
        `;
    });
  } else {
    contentHTML = "Let's Buy Something my friend!";
  }

  result.innerHTML = contentHTML;
};

export let showMessage = (msg, result) => {
  Toastify({
    text: msg,
    gravity: "bottom", // `top` or `bottom`
    position: "right",
    className: result ? "success" : "danger",
    duration: 2000,
  }).showToast();
};
