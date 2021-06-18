const { expect, beforeEach } = require("@jest/globals");
const { Queue } = require("./queue");

describe("Queue", () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });
  it("should add item to the queue", () => {
    queue.add(5);
    expect(queue.items.length).toEqual(1);
    expect(queue.peek()).toEqual(5);
  });
});
