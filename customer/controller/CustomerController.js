export let renderProduct = (product) => {
  let result = document.getElementById("phone-list");
  let contentHTML = "";
  product.forEach((item) => {
    let { id, name, backCamera, desc, frontCamera, img, price, screen, type } = item;
    contentHTML +=
      /*html*/
      `
    <div class="card col-3" style="width: 18rem;">
    <img class="card-img-top" src="../assets/img/neon.jpg" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">${name} </h5>
    <p class= "card-text" >${desc}</p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
</div>`;
  });
  result.innerHTML = contentHTML;
};
