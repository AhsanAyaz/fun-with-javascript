import "../styles/globals.css";
import "./dequeue.css";

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
  const string = "radar";
  renderDeQueue(string.split(""));
};

main();
