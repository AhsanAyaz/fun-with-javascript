import "../styles/globals.css";
import "./js-queue.css";

export class Queue {
  items = {};
  count = 0;
  itemToRemoveIndex = 0;
  add(item) {
    this.items[this.count] = item;
    this.count++;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.itemToRemoveIndex = 0;
  }

  remove() {
    if (this.isEmpty()) {
      return undefined;
    }
    const itemToRemove = this.items[this.itemToRemoveIndex];
    delete this.items[this.itemToRemoveIndex];
    this.itemToRemoveIndex++;
    return itemToRemove;
  }

  size() {
    return this.count - this.itemToRemoveIndex;
  }

  peek() {
    return this.items[this.itemToRemoveIndex];
  }
}

const myQueue = new Queue();

const peekQueueItem = () => {
  const peekedElement = document.querySelector(".box_item:first-child");
  if (!peekedElement) {
    return;
  }
  peekedElement.classList.add("peeking");
  setTimeout(() => {
    peekedElement.classList.remove("peeking");
  }, 500);
};

const initiateHandlers = () => {
  const addItemBtn = document.querySelector("#addItemBtn");
  const peekItemBtn = document.querySelector("#peekItemBtn");
  const takeOutItemBtn = document.querySelector("#takeOutItemBtn");
  const clearBtn = document.querySelector("#clearBtn");
  clearBtn.addEventListener("click", () => {
    myQueue.clear();
    renderQueue();
  });
  addItemBtn.addEventListener("click", () => {
    const randomNumber = Math.round(Math.random() * 50 + 1);
    myQueue.add(randomNumber);
    renderQueue();
  });
  takeOutItemBtn.addEventListener("click", () => {
    myQueue.remove();
    renderQueue();
    peekQueueItem();
  });
  peekItemBtn.addEventListener("click", () => {
    peekQueueItem();
  });
};

const renderQueue = () => {
  const queueElement = document.querySelector(".box");
  queueElement.querySelectorAll(".box_item").forEach((item) => item.remove());
  for (const key in myQueue.items) {
    const item = myQueue.items[key];
    const queueItemElement = document.createElement("DIV");
    queueItemElement.classList.add("box_item");
    queueItemElement.textContent = item;
    queueElement.append(queueItemElement);
  }
};

const main = () => {
  initiateHandlers();
  renderQueue();
};

main();
