const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  // constructor() {
  //   this.node = null
  // }

  root() {
    return this.node || null;
  }

  add(data) {
    const node = new Node(data)
    if ( !this.node) {
      this.node = node
    } else {
      let current = this.node

      while (current) {
        if(node.data < current.data) {
          if(!current.left) {
            current.left = node
            break
          }
          current = current.left
        } else {
          if (!current.right) {
            current.right = node
            break
          }
          current = current.right
        }
      }
    }
  }

  has(data ) {
    return !!this.find(data);
  }

  find(data) {
    let current = this.node;
    while(current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
  }

  remove(data, node = this.node) {
    if (!this.has(data)) return;
    if (!node){
      return null
    }

    if (data < node.data) {
      node.left = this.remove(data, node.left)
    } else if (data > node.data) {
      node.right = this.remove(data, node.right)
    } else {
      if (!node.left) {
        return node.right
      } else if (!node.right) {
        return  node.left
      } else {
        node.data = this.min(node.right)
        node.right = this.remove(node.data, node.right)
      }
    }
    
    return node
  }

  min(node = this.node) {
    let min =node.data || null
    let current = node

    while (current) {
      if (!min || current.data < min) {
        min = current.data
      }
      current = current.left
    }

    return min
  }

  max(node = this.node) {
    let max = node.data || null;
    let current = node;

    while(current) {
      if (!max || current.data > max) {
        max = current.data;
      }
      current = current.right;
    }

    return max;
  }
  
}

module.exports = {
  BinarySearchTree
};