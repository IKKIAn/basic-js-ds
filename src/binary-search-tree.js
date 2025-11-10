
const { NotImplementedError } = require('../lib/errors');
const { Node } = require('../extensions/list-tree.js'); 

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
    } else {
      this._addNode(this.rootNode, newNode);
    }
  }

  _addNode(currentNode, newNode) {
    if (newNode.data < currentNode.data) {
      if (!currentNode.left) {
        currentNode.left = newNode;
      } else {
        this._addNode(currentNode.left, newNode);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
      } else {
        this._addNode(currentNode.right, newNode);
      }
    }
  }

  find(data) {
    return this._findNode(this.rootNode, data);
  }

  _findNode(currentNode, data) {
    if (!currentNode) return null;

    if (data === currentNode.data) {
      return currentNode;
    }

    if (data < currentNode.data) {
      return this._findNode(currentNode.left, data);
    } else {
      return this._findNode(currentNode.right, data);
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }

  _removeNode(currentNode, data) {
    if (!currentNode) return null;

    if (data < currentNode.data) {
      currentNode.left = this._removeNode(currentNode.left, data);
      return currentNode;
    } else if (data > currentNode.data) {
      currentNode.right = this._removeNode(currentNode.right, data);
      return currentNode;
    } else {
      if (!currentNode.left && !currentNode.right) {
        return null;
      }

      if (!currentNode.left) {
        return currentNode.right;
      } else if (!currentNode.right) {
        return currentNode.left;
      }

      const minNode = this._findMinNode(currentNode.right);
      currentNode.data = minNode.data;
      currentNode.right = this._removeNode(currentNode.right, minNode.data);
      return currentNode;
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    const minNode = this._findMinNode(this.rootNode);
    return minNode.data;
  }

  _findMinNode(currentNode) {
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};