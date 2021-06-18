import "../styles/globals.css";

export class Queue {
  items = [];
  add(item) {
    this.items.push(item);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items.length = 0;
  }

  takeOut() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}
