// $(document).ready(function () {
//   $(".menu_icon").click(function () {
//     $("body").toggleClass("menu-close");
//   });
//   setInterval(() => {
//     var currentDate = new Date();
//     var completDate =
//       currentDate.getDate() +
//       "/" +
//       (currentDate.getMonth() + 1) +
//       "/" +
//       currentDate.getFullYear() +
//       "   " +
//       currentDate.getHours() +
//       ":" +
//       currentDate.getMinutes() +
//       ":" +
//       currentDate.getSeconds();
//     $(".Dashboard").find("span").html(completDate);
//   }, 500);
// });

window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("top-nav");
var sticky = header.offsetTop;
var pagetitle = document.getElementById("page-title");

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  if (window.pageYOffset > sticky) {
    pagetitle.classList.add("body-content");
  } else {
    pagetitle.classList.remove("body-content");
  }
}

function general() {
  document.getElementById("general-edit").classList.add("active-category-tab");
  document
    .getElementById("attribute-edit")
    .classList.remove("active-category-tab");
  document
    .getElementById("option-edit")
    .classList.remove("active-category-tab");
  document
    .getElementById("discount-edit")
    .classList.remove("active-category-tab");
  document
    .getElementById("images-edit")
    .classList.remove("active-category-tab");
}
function attribute() {
  document
    .getElementById("general-edit")
    .classList.remove("active-category-tab");
  document
    .getElementById("attribute-edit")
    .classList.add("active-category-tab");
  document
    .getElementById("option-edit")
    .classList.remove("active-category-tab");
  document
    .getElementById("discount-edit")
    .classList.remove("active-category-tab");
  document
    .getElementById("images-edit")
    .classList.remove("active-category-tab");
}
function options() {
  document
    .getElementById("general-edit")
    .classList.remove("active-category-tab");
  document
    .getElementById("attribute-edit")
    .classList.remove("active-category-tab");
  document.getElementById("option-edit").classList.add("active-category-tab");
  document
    .getElementById("discount-edit")
    .classList.remove("active-category-tab");
  document
    .getElementById("images-edit")
    .classList.remove("active-category-tab");
}
function discount() {
  document
    .getElementById("general-edit")
    .classList.remove("active-category-tab");
  document
    .getElementById("attribute-edit")
    .classList.remove("active-category-tab");
  document
    .getElementById("option-edit")
    .classList.remove("active-category-tab");
  document.getElementById("discount-edit").classList.add("active-category-tab");
  document
    .getElementById("images-edit")
    .classList.remove("active-category-tab");
}

function image() {
  document
    .getElementById("general-edit")
    .classList.remove("active-category-tab");
  document
    .getElementById("attribute-edit")
    .classList.remove("active-category-tab");
  document
    .getElementById("option-edit")
    .classList.remove("active-category-tab");
  document
    .getElementById("discount-edit")
    .classList.remove("active-category-tab");
  document.getElementById("images-edit").classList.add("active-category-tab");
}
function General(){
  document
  .getElementById("general-edit")
  .classList.add("active-category-tab");
  document
    .getElementById("filters-edit")
    .classList.remove("active-category-tab");
}

function filters() {
  document.getElementById("filters-edit").classList.add("active-category-tab");
  document
    .getElementById("general-edit")
    .classList.remove("active-category-tab");
}
