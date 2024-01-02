import Categorias from "./components/Categorias.js";
import { getCategory } from "./assets/data/data.js";
const $container = document.getElementById("container-content");
const $btn = document.getElementById("close");
const $flot = document.getElementById("flot-content");
getCategory().then(async (data) => {
  data.slice(0, 5).forEach((category) => {
    $container.appendChild(Categorias(category));
  });
});
$flot.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName === "I") {
    active(false);
  }
});
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
  $flot.innerHTML = "";
  $flot.innerHTML = content;
}
