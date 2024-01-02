import ListProducts from "./List-Products.js";
export default ({ name, id }) => {
  const div = document.createElement("div");
  const content = `<header class="flex justify-between px-8 my-4">
  <h2 class="text-2xl font-extrabold text-white">${name}</h2>
  <button class="text-1xl px-3 rounded-sm bg-green-500">
    ver mas <i class="fa-solid fa-plus"></i>
  </button>
</header>`;
  div.innerHTML = content;
  div.appendChild(ListProducts(id));

  return div;
};
