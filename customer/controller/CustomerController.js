export let renderProduct = (product) => {
  let result = document.getElementById("phone-list");
  let contentHTML = "";
  product.reverse().forEach((item) => {
    let { id, name, backCamera, desc, frontCamera, img, price, screen, type } = item;
    contentHTML +=
      /*html*/
      `
      <div class="col-3">
      <div class="card h-100">
      <img class="card-img-top" src="../assets/img/iphone1.jpg" alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${name} </h5>
      <p class= "card-text" ><span class="font-weight-bold desc ">Descripton: </span>${desc}</p>
      <p class= "card-text" ><span class="font-weight-bold desc">Price: </span>${price}</p>

      </div>
      <div class="cart-button">
      <a href="#" class="add-to-card btn btn-primary" ><span>Add to cart </span><i class="fa fa-cart-arrow-down"></i></a>
      </div>

      </div>
      </div>
   
`;
  });
  result.innerHTML = contentHTML;
};
