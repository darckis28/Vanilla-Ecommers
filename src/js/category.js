import ListProducts from "../components/List-Products.js";
const productos = document.getElementById("content-category");
addEventListener("load", () => {
  productos.appendChild(ListProducts(localStorage.getItem("id")));
  window.document.title = localStorage.getItem("category");
});
