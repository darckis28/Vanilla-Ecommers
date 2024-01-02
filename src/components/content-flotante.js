import { getProductId } from "../assets/data/data.js";
import { convert } from "../index.js";
import { details } from "../index.js";
import { active } from "../index.js";
export default (id) =>
  getProductId(id).then(({ description, title, images, price }) => {
    const content = `
        <button onclick="${() =>
          active(false)}" id="close" class="absolute top-1 right-3 ">
          <i class="fa-solid fa-x "></i>
        </button>
        <h3 class="my-2 text-xl font-semibold text-gray-500">${title}</h3>
        <img
          class="rounded-xl w-full h-80 object-cover"
          src="${images[0]}"
          alt=""
        />
        <p class="my-2 text-sm font-light text-gray-400">${description}</p>
        <span
          class="absolute top-16 px-3 py-1 rounded-xl right-2 bg-red-500 text-white text-center rotate-45"
          >${convert(price)}</span
        >
        <button
          class="text-center w-full my-3 py-2 bg-red-600 rounded-md text-white text-lg font-semibold"
        >
          Añadir carrito
        </button>

  `;
    details(content);
  });
