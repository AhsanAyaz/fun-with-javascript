class DeQueue {
  items = {};
  itemToRemoveFrontKey = 0;
  itemToAddRearKey = 0;
  addToRear(item) {
    this.items[this.itemToAddRearKey] = item;
    this.itemToAddRearKey++;
  }
  removeFromRear() {
    const itemToRemove = this.items[this.itemToAddRearKey - 1];
    delete this.items[this.itemToAddRearKey - 1];
    this.itemToAddRearKey--;
    return itemToRemove;
  }
  peekRear() {
    return this.items[this.itemToAddRearKey - 1];
  }
  addToFront(item) {
    if (this.isEmpty()) {
      this.addToRear(item);
    } else if (this.itemToRemoveFrontKey > 0) {
      this.itemToRemoveFrontKey--;
      this.items[this.itemToRemoveFrontKey] = item;
    } else {
      for (let i = this.itemToAddRearKey; i >= 1; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.items[0] = item;
      this.itemToAddRearKey++;
    }
  }
  removeFromFront() {
    const itemToRemove = this.items[this.itemToRemoveFrontKey];
    delete this.items[this.itemToRemoveFrontKey];
    this.itemToRemoveFrontKey++;
    return itemToRemove;
  }
  peekFront() {}
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.itemToAddRearKey - this.itemToRemoveFrontKey;
  }
  clear() {
    this.items = {};
    this.itemToRemoveFrontKey = 0;
    this.itemToAddRearKey = 0;
  }
}

export default DeQueue;
