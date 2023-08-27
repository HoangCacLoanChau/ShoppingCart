// Phần 2
// 1. Sử dụng Axios để call API, xây dựng các chức năng cho admin
// 1a. Hiện danh sách sản phẩm
const API = "https://64da100fe947d30a260ab426.mockapi.io/product";
function getnRenderProductListFormAPI() {
  startLoading();
  axios({
    url: API,
    method: "GET",
  })
    .then((res) => {
      list = res.data;
      renderProductList(list);
      endLoading();
    })
    .catch((err) => {
      console.log("🚀 ~ file: main.js:14 ~ getProductListFormAPI ~ err:", err);
      endLoading();
    });
}
getnRenderProductListFormAPI();
// 1b.Thêm sản phẩm và validate
function addProduct() {
  let product = getDataForm();
  let isValid =
    validateName("invalidNameProduct", product.name) &
    validatePrice("invalidPriceProduct", product.price) &
    validateImg("invalidImgProduct", product.img) &
    validateDesc("invalidDescProduct", product.desc) &
    validateScreen("invalidScreenProduct", product.screen) &
    validateBackCamera("invalidBackCameraProduct", product.backCamera) &
    validateFrontCamera("invalidFrontCameraProduct", product.frontCamera) &
    validateType("invalidTypeProduct", product.type);
  if (isValid) {
    axios({
      url: API,
      method: "POST",
      data: product,
    })
      .then(function (res) {
        $("#exampleModal").modal("hide");
        getnRenderProductListFormAPI();
      })
      .catch(function (err) {
        console.log("🚀 ~ file: main_admin.js:33 ~ addProduct ~ err:", err);
      });
  } else return;
}
// 1c. Xóa sản phẩm
function deleteProduct(id) {
  axios({
    url: `https://64da100fe947d30a260ab426.mockapi.io/product/${id}`,
    method: "DELETE",
  })
    .then(function (res) {
      getnRenderProductListFormAPI();
    })
    .catch(function (err) {
      console.log("🚀 ~ file: main_admin.js:49 ~ deleteProduct ~ err:", err);
    });
}
// 1d. Cập nhật sản phẩm và validate
function editProduct(id) {
  $("#exampleModal").modal("show");
  axios({
    url: `https://64da100fe947d30a260ab426.mockapi.io/product/${id}`,
    method: "GET",
  })
    .then(function (res) {
      showDataForm(res.data);
    })
    .catch(function (err) {
      console.log("🚀 ~ file: main_admin.js:62 ~ editProduct ~ err:", err);
    });
}
function updateProduct() {
  var product = getDataForm();
  let isValid =
    validateName("invalidNameProduct", product.name) &
    validatePrice("invalidPriceProduct", product.price) &
    validateImg("invalidImgProduct", product.img) &
    validateDesc("invalidDescProduct", product.desc) &
    validateScreen("invalidScreenProduct", product.screen) &
    validateBackCamera("invalidBackCameraProduct", product.backCamera) &
    validateFrontCamera("invalidFrontCameraProduct", product.frontCamera) &
    validateType("invalidTypeProduct", product.type);
  if (isValid) {
    axios({
      url: `https://64da100fe947d30a260ab426.mockapi.io/product/${product.id}`,
      method: "PUT",
      data: product,
    })
      .then(function (res) {
        $("#exampleModal").modal("hide");
        getnRenderProductListFormAPI();
      })
      .catch(function (err) {
        console.log("🚀 ~ file: main.js:68 ~ updateProduct ~ err:", err);
      });
  } else return;
}
// 2. Tìm kiếm sản phẩm theo tên
function searchName() {
  startLoading();
  let searchInput = document.getElementById("searchInput").value;
  axios({
    url: API,
    method: "GET",
  })
    .then((res) => {
      list = res.data;
    })
    .catch((err) => {
      console.log("🚀 ~ file: main.js:14 ~ getProductListFormAPI ~ err:", err);
    });
  let searchResult = [];
  for (let i = 0; i < list.length; i++) {
    let product = list[i];
    if (product.name == searchInput) {
      searchResult.push(product);
    }
  }
  if (searchResult.length > 0) {
    renderProductList(searchResult);
    endLoading();
  } else {
    renderProductList(searchResult);
    endLoading();
    document.getElementById("searchErr").innerHTML =
      "Không có sản phẩm cần tìm";
  }
}
// Sắp xếp theo giá
function sortPrice() {
  startLoading();
  axios({
    url: API,
    method: "GET",
  })
    .then((res) => {
      list = res.data;
      endLoading();
    })
    .catch((err) => {
      console.log("🚀 ~ file: main.js:14 ~ getProductListFormAPI ~ err:", err);
      endLoading();
    });

  let value = document.getElementById("sortOptions").value * 1;
  if (value == 0) return;
  else if (value == 1) {
    function giamDan(list) {
      return list.sort((a, b) => b.price - a.price);
    }
    list = giamDan(list);
    renderProductList(list);
  } else if (value == 2) {
    function tangDan(list) {
      return list.sort((a, b) => a.price - b.price);
    }
    list = tangDan(list);
    renderProductList(list);
  }
}
