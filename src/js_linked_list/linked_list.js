const defaultEqFn = (a, b) => a === b;
class Node {
  constructor(element) {
    this.next = null;
    this.element = element;
  }
}

class LinkedList {
  head = null;
  constructor() {
    this.count = 0;
    this.head = null;
    this.equalsFn = defaultEqFn;
  }
  push(element) {
    let current;
    const node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) {
      return undefined;
    }
    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.next;
      previous.next = current.next;
    }
    this.count--;
    return current.element;
  }

  getElementAt(index) {
    if (index < 0 || index > this.count) {
      return undefined;
    }

    let node = this.head;
    for (let i = 0; i < index && node !== null; i++) {
      node = node.next;
    }
    return node;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.count) {
      return undefined;
    }
    const node = new Node(element);
    if (index === 0) {
      const current = this.head;
      node.next = current;
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1);
      const current = previous.next;
      node.next = current;
      previous.next = node;
    }
    this.count++;
    return true;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.head === null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 1; i < this.size() && current !== null; i++) {
      objString += `, ${current.element}`;
      current = current.next;
    }
    return objString;
  }
}

export default LinkedList;
