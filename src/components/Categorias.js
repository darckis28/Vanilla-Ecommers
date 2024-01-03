import ListProducts from "./List-Products.js";
export default ({ name, id }) => {
  const div = document.createElement("div");
  const content = `<header class="flex justify-between px-8 my-4">
  <h2 class="text-2xl font-extrabold text-white">${name}</h2>
  <buttom  class="btn-category text-1xl px-3 rounded-sm bg-green-500 cursor-pointer">
    ver mas <i class="fa-solid fa-plus"></i>
  </buttom>
</header>`;
  div.innerHTML = content;
  const btn = div.querySelector(".btn-category ");

  btn.addEventListener("click", () => {
    location.href = "./src/pages/products-category.html";
    localStorage.setItem("id", id);
    localStorage.setItem("category", name);
  });

  div.appendChild(ListProducts(id, 5));
  return div;
};
