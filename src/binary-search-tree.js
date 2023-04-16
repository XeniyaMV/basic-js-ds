const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeRoot = '';
  }
  
  root() {
    if (this.treeRoot === '') {
      return null;
    }
    return this.treeRoot;
  }

  add( data ) {
    if (this.has(data)) {
      return;
    }
    
    let node = {
      'data': data,
      'parent': '',
      'childLeft': '',
      'childRight': ''
    }
    let root = this.root();
    
    if (!root) {
      this.treeRoot = node;
      return;

    }
   
    let parent = root;
    while(1) {
      if (node.data > parent.data) {
        if (parent.childRight !== '') {
          parent = parent.childRight;
        }
        else {
          node.parent = parent;
          parent.childRight = node;
          break;
        }
      }
      if (node.data < parent.data) {
        if (parent.childLeft !== '') {
          parent = parent.childLeft;
        }
        else {
          node.parent = parent;
          parent.childLeft = node;
          break;
        }
      }
    }
  }

  has(data) {
    let parent = this.root();
    if (!parent) {
      return false;
    }
    while(1) {
      if (data > parent.data) {
        if (parent.childRight === '') {
          return false;
        }
        parent = parent.childRight;

      }
      else if (data < parent.data) {
        if (parent.childLeft === '') {
          return false;
        }
        parent = parent.childLeft;
      }
      else {
        return true;
      }
    }
  }

  find( data ) {
    if (!this.has(data)) {
      return null;
    }

    let parent = this.root();
    while(1) {
      if (data > parent.data) {
        parent = parent.childRight;

      }
      else if (data < parent.data) {
        parent = parent.childLeft;
      }
      else {
        return parent;
      }
    }
    
  }

  remove( data ) {    
    let node = this.find(data);
    if (node === null) {
      return;
    }
    let parent = node.parent;
    let leave = node.childRight;
    
    if (parent === '') {
      if (leave === '') {
        this.treeRoot = node.childLeft;
        this.treeRoot.parent = '';
        return;
      }
      else {
        while(1) {
          if (leave.childLeft === '') {
            leave.childLeft = node.childLeft;
            if (node.childLeft !== '') {
              leave.childLeft.parent = leave;
            }
            break;
          }
          leave = leave.childLeft;
        }
        this.treeRoot = node.childRight;
        this.treeRoot.parent = '';
        return;
      }
    }
    if (leave === '') {
      if (data > parent.data) {
        parent.childRight = node.childLeft;
        if (node.childLeft !== '') {
          parent.childRight.parent = parent;
          
        }

      }
      if (data < parent.data) {
        parent.childLeft = node.childLeft;
        if (node.childLeft !== '') {
          parent.childLeft.parent = parent;
        }

      }
      return;     
    }
    
    while(1) {
      if (leave.childLeft === '') {
        leave.childLeft = node.childLeft;
        if (node.childLeft !== '') {
          leave.childLeft.parent = leave;
        }        break;
      }
      leave = leave.childLeft;
    }

    if (data > parent.data) {
      parent.childRight = node.childRight;
      parent.childRight.parent = parent;

    }
    else {
      parent.childLeft = node.childRight;
      parent.childLeft.parent = parent;
      
    }
    return;
  }

  min() {
    let parent = this.root();
    if (!parent) {
      return null;
    }
    while(1) {
      if (parent.childLeft === '') {
        return parent.data;
      }
      else {
        parent = parent.childLeft;
      }
    }
  }

  max() {
    let parent = this.root();
    if (!parent) {
      return null;
    }
    while(1) {
      if (parent.childRight === '') {
        return parent.data;
      }
      else {
        parent = parent.childRight;
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};


