function startLoading() {
  document.getElementById("spinner").style.display = "flex";
}
function endLoading() {
  document.getElementById("spinner").style.display = "none";
}
function renderProductList(list){
    let contentHTML = "";
    for (let i=0; i<list.length; i++){
        let product = list [i];
        let contentTr = `<tr>
        <td>${product.id}</td>
        <td>${product.type}</td>
        <td>${product.price}</td>
        <td>${product.id}</td>
        </tr>`;
        contentHTML= contentHTML+contentTr;
    }
    return document.getElementById("tbodyFood")=contentHTML;
}

// ID	Tên	Loại	Giá	Khuyến Mãi	Giá KM	Tình Trạng
// tbodyFood
// "name": "name 1",
//         "price": 94,
//         "img": "img 1",
//         "desc": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
//         "srceen": "srceen 1",
//         "backCamera": "backCamera 1",
//         "frontCamera": "frontCamera 1",
//         "type": "type 1",
//         "id": "1"