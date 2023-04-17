const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.tail = new ListNode('');
    this.head = this.tail;
    this.length = 0;
  }
  getUnderlyingList() {
    return this.tail;
  }

  enqueue( value ) {
    if (this.length == 0) {
      this.head.value = value;
      this.length += 1;
      return;
    }
    let item = new ListNode(value);
    this.head.next = item;
    this.head = item;
    this.length += 1;

  }

  dequeue() {
    let value = this.tail.value;
    this.tail = this.tail.next;

    return value;
  }
}

module.exports = {
  Queue
};

 const queue = new Queue();


