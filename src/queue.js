const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
    this.value = null;
  }

  getUnderlyingList() {
    return this.value;
  }

  enqueue( value ) {
    this.value = addValue(this.value, value)
    function addValue(node,value){
      if (node == null) {
        return new ListNode(value);
      }
      node.next = addValue(node.next, value);
      return node;
    }
  }

  dequeue() {
    if (this.value === null){
      return null
    }

    let head = this.value;
    this.value = head.next;
    return  head.value;
  }
}

module.exports = {
  Queue
};
