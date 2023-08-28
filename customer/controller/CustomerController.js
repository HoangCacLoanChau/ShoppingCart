export let renderProduct = (product) => {
  let result = document.getElementById("phone-list");
  let contentHTML = "";
  product.forEach((item) => {
    let { id, name, backCamera, desc, frontCamera, img, price, screen, type } = item;
    contentHTML +=
      /*html*/
      `
      <div class="col-3">
      <div class="card">
      <img class="card-img-top" src="../assets/img/iphone1.jpg" alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title">${name} </h5>
      <p class= "card-text" >${desc}</p>
      </div>
      <a href="#" class="add-to-card btn btn-primary">Add to cart</a>

      </div>
      </div>
   
`;
  });
  result.innerHTML = contentHTML;
};
