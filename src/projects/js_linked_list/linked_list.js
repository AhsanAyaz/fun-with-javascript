export const defaultEqFn = (a, b) => a === b;

export class Node {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  constructor(equalsFn = defaultEqFn) {
    this.head = null;
    this.count = 0;
    this.equalsFn = equalsFn;
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
    return node;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
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
    return current;
  }

  getElementAt(index) {
    if (index < 0 || index > this.size()) {
      return undefined;
    }

    let current = this.head;
    for (let i = 0; i < index && current !== null; i++) {
      current = current.next;
    }
    return current;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size()) {
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
    return node;
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.size() && current !== null; i++) {
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
    if (this.isEmpty()) {
      return '';
    }
    const linkedListArr = [];
    let current = this.head;
    for (let i = 0; i < this.size() && current !== null; i++) {
      linkedListArr.push(current.element);
      current = current.next;
    }

    return linkedListArr.join(', ');
  }
}
export default LinkedList;
