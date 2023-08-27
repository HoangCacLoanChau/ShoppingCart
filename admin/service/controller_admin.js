function startLoading() {
  document.getElementById("spinner").style.display = "flex";
}
function endLoading() {
  document.getElementById("spinner").style.display = "none";
}
function renderProductList(list) {
  let contentProductTable = "";
  for (let i = list.length - 1; i >= 0; i--) {
    let product = list[i];
    let urlImg = `../../img/` + product.img + `.jpg`;
    let contentTr = `<tr>
        <td style="width: 10%; text-align: center;vertical-align: middle;">${product.id}</td>
        <td style="width: 10%; text-align: center;vertical-align: middle;">${product.name}</td>
        <td style="width: 10%; text-align: center;vertical-align: middle;">${product.type}</td>
        <td style="width: 10%;text-align: center;vertical-align: middle;">${product.price}</td>
        <td style="width: 20%;"><img src="${urlImg}" alt="${product.img}"></td>
        <td style="width: 30%;text-align: left;vertical-align: middle;">${product.desc}</td>
        <td style="width: 10%;text-align: center;vertical-align: middle;"><button class="btn btn-warning mt-2" onclick=editProduct(${product.id}) >Sửa</button>
        <button class="btn btn-danger mt-2" onclick=deleteProduct(${product.id})>Xóa</button></td>
        </tr>`;
    contentProductTable = contentProductTable + contentTr;
  }
  document.getElementById("searchErr").innerHTML = "";
  return (document.getElementById("tbodyFood").innerHTML = contentProductTable);
}
function getDataForm() {
  let name = document.getElementById("nameProduct").value;
  let price = document.getElementById("priceProduct").value;
  let img = document.getElementById("imgProduct").value;
  let desc = document.getElementById("descProduct").value;
  let screen = document.getElementById("screenProduct").value;
  let backCamera = document.getElementById("backCameraProduct").value;
  let frontCamera = document.getElementById("frontCameraProduct").value;
  let type = document.getElementById("typeProduct").value;
  let id = document.getElementById("idProduct").value;
  return {
    name: name,
    price: price,
    img: img,
    desc: desc,
    screen: screen,
    backCamera: backCamera,
    frontCamera: frontCamera,
    type: type,
    id: id,
  };
}
function showDataForm(data) {
  document.getElementById("nameProduct").value = data.name;
  document.getElementById("priceProduct").value = data.price;
  document.getElementById("imgProduct").value = data.img;
  document.getElementById("descProduct").value = data.des;
  document.getElementById("screenProduct").value = data.screen;
  document.getElementById("backCameraProduct").value = data.backCamera;
  document.getElementById("frontCameraProduct").value = data.frontCamera;
  document.getElementById("typeProduct").value = data.type;
  document.getElementById("idProduct").value = data.id;
  document.getElementById("idProduct").setAttribute("readOnly", "true");
}
