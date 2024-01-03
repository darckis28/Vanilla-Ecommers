import Categorias from "./components/Categorias.js";
import { getCategory } from "./assets/data/data.js";
const $container = document.getElementById("container-content");
const $flot = document.getElementById("flot-content");
if (!localStorage.getItem("id")) {
  localStorage.setItem("id", "0");
}
if (!localStorage.getItem("category")) {
  localStorage.setItem("category", "0");
}
try {
  getCategory().then(async (data) => {
    data.slice(0, 5).forEach((category) => {
      try {
        $container.appendChild(Categorias(category));
      } catch (e) {
        console.log(e);
      }
    });
  });
  $flot.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName === "I") {
      $flot.innerHTML = "";
      active(false);
    }
  });
} catch (e) {
  console.log(e);
}
export function active(interuptor) {
  interuptor
    ? document
        .getElementById("flotante")
        .classList.replace("invisible", "visible")
    : document
        .getElementById("flotante")
        .classList.replace("visible", "invisible");
}
export function convert(num) {
  return num.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
export function details(content) {
  $flot.innerHTML = content;
}
