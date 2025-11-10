const { ListNode } = require('../extensions/list-node.js');  

function removeKFromList(l, k) {
  let currentNode = l;
  
  while (currentNode && currentNode.value === k) {
    currentNode = currentNode.next;
  }
  
  
  let newHead = currentNode;
  
  while (currentNode && currentNode.next) {
    if (currentNode.next.value === k) {
     
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;  
    }
  }
  
  return newHead;  
}

module.exports = {
  removeKFromList
};