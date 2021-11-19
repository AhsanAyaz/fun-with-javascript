const { expect, beforeEach } = require('@jest/globals');
const { Queue } = require('./queue');

describe('Queue', () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });
  it('should add item to the queue', () => {
    queue.add(5);
    expect(queue.size()).toEqual(1);
    expect(queue.peek()).toEqual(5);
  });

  it('should remove items in the sequence of FIFO from the queue', () => {
    queue.add(5);
    queue.add(6);
    queue.add(7);
    queue.add(8);

    queue.remove();
    queue.remove();

    expect(queue.size()).toEqual(2);
    expect(queue.peek()).toEqual(7);
    expect(queue.isEmpty()).toBeFalsy();
  });
});
