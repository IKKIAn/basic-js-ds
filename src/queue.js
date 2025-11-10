const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) return; 
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return value;
  }

  getUnderlyingList() {
    function toPlainObject(node) {
      if (!node) return null;
      return {
        value: node.value,
        next: toPlainObject(node.next)
      };
    }

    return toPlainObject(this.head);
  }
}

module.exports = {
  Queue
};