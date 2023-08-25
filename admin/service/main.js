// 1. Sử dụng Axios để call API, xây dựng các chức năng cho admin
// a. Hiện danh sách sản phẩm
const API = "https://64da100fe947d30a260ab426.mockapi.io/product";
function getProductListFormAPI() {
  axios({
    url: API,
    method: GET,
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
