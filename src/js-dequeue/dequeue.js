import "../styles/globals.css";
import "./dequeue.css";

export class DeQueue {}

const renderDeQueue = (items = []) => {
  const boxElement = document.querySelector(".box");
  boxElement.querySelectorAll(".box_item").forEach((item) => item.remove());
  items.forEach((item) => {
    const itemElement = document.createElement("DIV");
    itemElement.classList.add("box_item");
    itemElement.textContent = item;
    boxElement.append(itemElement);
  });
};

const main = () => {
  renderDeQueue(new Array(12).fill(0).map((_, index) => index + 1));
};

main();
