// Kiểm tra name khác rỗng và không chứa ký tự đặc biệt và không quá 10 từ
function validateName(idErr, value) {
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (value.trim() === "" || specialChars.test(value)) {
    document.getElementById(idErr).innerHTML =
      "Tên sản phẩm không được rỗng và không chứa ký tự đặc biệt";
    document.getElementById(idErr).style.display = "block";
    return false;
  }
  const words = value.split(/\s+/);
  if (words.length > 10) {
    document.getElementById(idErr).innerHTML = "Tên sản phẩm không quá 10 từ";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
// Kiểm tra giá lớn hơn 0 và không được rỗng
function validatePrice(idErr, value) {
  const trimValue = value.trim();
  const numberValue = parseFloat(trimValue);
  let valid = trimValue !== "" && !isNaN(numberValue) && numberValue > 0;
  console.log(
    "🚀 ~ file: validate_admin.js:25 ~ validatePrice ~ valid:",
    valid
  );
  if (!valid) {
    document.getElementById(idErr).innerHTML = "Giá phải là số dương";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
// Tên ảnh khác rỗng và không chứa ký tự đặc biệt và không quá 10 từ
function validateImg(idErr, value) {
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (value.trim() === "" || specialChars.test(value)) {
    document.getElementById(idErr).innerHTML =
      "Tên hình ảnh không được rỗng và không chứa ký tự đặc biệt";
    document.getElementById(idErr).style.display = "block";
    return false;
  }
  const words = value.split(/\s+/);
  if (words.length > 10) {
    document.getElementById(idErr).innerHTML = "Tên hình ảnh không quá 10 từ";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
// Mô tả sản phẩm không được trống và không quá 100 từ
function validateDesc(idErr, value) {
  if (value.trim() === "") {
    document.getElementById(idErr).innerHTML = "Mô tả sản phẩm không được rỗng";
    document.getElementById(idErr).style.display = "block";
    return false;
  }
  const words = value.split(/\s+/);
  if (words.length > 100) {
    document.getElementById(idErr).innerHTML =
      "Mô tả sản phẩm không quá 100 từ";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
// Screen, Back camera, Front camera, Loại sản phẩm kiểm tra với điều kiện như Name
function validateScreen(idErr, value) {
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (value.trim() === "" || specialChars.test(value)) {
    document.getElementById(idErr).innerHTML =
      "Screen không được rỗng và không chứa ký tự đặc biệt";
    document.getElementById(idErr).style.display = "block";
    return false;
  }
  const words = value.split(/\s+/);
  if (words.length > 10) {
    document.getElementById(idErr).innerHTML = "Screen không quá 10 từ";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
function validateBackCamera(idErr, value) {
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (value.trim() === "" || specialChars.test(value)) {
    document.getElementById(idErr).innerHTML =
      "Back camera không được rỗng và không chứa ký tự đặc biệt";
    document.getElementById(idErr).style.display = "block";
    return false;
  }
  const words = value.split(/\s+/);
  if (words.length > 10) {
    document.getElementById(idErr).innerHTML = "Back camera không quá 10 từ";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
function validateFrontCamera(idErr, value) {
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (value.trim() === "" || specialChars.test(value)) {
    document.getElementById(idErr).innerHTML =
      "Front camera không được rỗng và không chứa ký tự đặc biệt";
    document.getElementById(idErr).style.display = "block";
    return false;
  }
  const words = value.split(/\s+/);
  if (words.length > 10) {
    document.getElementById(idErr).innerHTML = "Front camera không quá 10 từ";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
function validateType(idErr, value) {
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (value.trim() === "" || specialChars.test(value)) {
    document.getElementById(idErr).innerHTML =
      "Loại sản phẩm không được rỗng và không chứa ký tự đặc biệt";
    document.getElementById(idErr).style.display = "block";
    return false;
  }
  const words = value.split(/\s+/);
  if (words.length > 10) {
    document.getElementById(idErr).innerHTML = "Loại sản phẩm không quá 10 từ";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
