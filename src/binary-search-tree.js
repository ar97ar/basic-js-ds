const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {

    let newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.insertNode(this.rootNode, newNode);
    }

  }

  insertNode(node, newNode) {

    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }


  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    return this.findNode(this.rootNode, data);
  }

  findNode(node, data) {

    if (node === null) {
      return null;
    }
    if (data < node.data) {
      return this.findNode(node.left, data);
    } else if (data > node.data) {
      return this.findNode(node.right, data);
    } else {
      return node;
    }
  }


  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, key) {

    if (node === null ){
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }  else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      let del = this.findMin(node.right);
      node.data = del.data;
      node.right = this.removeNode(node.right, del.data);
      return node;
    }

  }

  findMin(node) {

    if (node.left === null ){
      return node;
    } else
      return this.findMin(node.left);
  }

  min() {

    if (this.rootNode === null){
      return null;
    }

    let current = this.rootNode;

    while (current.left !== null)
      current = current.left;

    return current.data;
  }

  max() {

    if (this.rootNode === null){
      return null;
    }

    let current = this.rootNode;

    while (current.right !== null)
      current = current.right;

    return current.data;
  }

}



module.exports = {
  BinarySearchTree
};