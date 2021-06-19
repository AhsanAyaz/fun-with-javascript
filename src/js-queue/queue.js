import "../styles/globals.css";

export class Queue {
  items = {};
  count = 0;
  lowestCount = 0;
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
    this.lowestCount = 0;
  }

  takeOut() {
    if (this.isEmpty()) {
      return undefined;
    }
    delete this.items[this.lowestCount];
    this.lowestCount++;
  }

  size() {
    return this.count - this.lowestCount;
  }

  peek() {
    return this.items[this.lowestCount];
  }
}
const myQueue = new Queue();

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
    myQueue.takeOut();
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
  const queueItems = Object.values(myQueue.items);
  queueItems.forEach((item) => {
    const queueItemElement = document.createElement("DIV");
    queueItemElement.classList.add("box_item");
    queueItemElement.textContent = item;
    queueElement.prepend(queueItemElement);
  });
};

const peekQueueItem = () => {
  const peekedElement = document.querySelector(".box_item:last-child");
  if (!peekedElement) {
    return;
  }
  peekedElement.classList.add("peeking");
  setTimeout(() => {
    peekedElement.classList.remove("peeking");
  }, 500);
};

const main = () => {
  initiateHandlers();
  renderQueue();
};

main();
