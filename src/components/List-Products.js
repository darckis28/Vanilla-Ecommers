import { getfromCategory } from "../assets/data/data.js";
import CardCategoys from "./Card-categoys.js";
export default (producID, max = Infinity) => {
  const main = document.createElement("main");
  main.classList.add("p-10", "flex", "justify-evenly", "flex-wrap", "gap-5");
  getfromCategory(producID).then((data) =>
    data.slice(0, max).forEach((element) => {
      main.appendChild(CardCategoys(element));
    })
  );
  return main;
};
