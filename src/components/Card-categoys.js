export let productoId = 0;
import { active } from "../index.js";
import { convert } from "../index.js";
import contentFlotante from "./content-flotante.js";
export default (data) => {
  const { id, title, price, images } = data;
  const div = document.createElement("div");
  div.classList.add(
    "overflow-hidden",
    "rounded-2xl",
    "bg-gray-200",
    "w-52",
    "cursor-pointer"
  );
  const content = `<img class="w-52 h-52 object-cover" src="${
    images[2]
  }" alt="${title}"/>
                    <h3 class="mx-2 text-center uppercase font-semibold text-ellipsis whitespace-nowrap overflow-hidden text-gray-600"> ${title} </h3>
                    <span class="block text-center font-semibold m-auto mb-4 text-gray-400">
                        ${convert(price)}</span>`;
  div.innerHTML = content;
  div.addEventListener("click", () => {
    contentFlotante(id);
    active(true);
  });
  return div;
};
