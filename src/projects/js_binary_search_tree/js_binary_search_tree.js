const COMPARISON = {
  EQUAL: 0,
  SMALLER: -1,
  GREATER: 1,
};

const defaultCompareFn = (a, b) => {
  if (a == b) {
    return COMPARISON.EQUAL;
  }

  return a < b ? COMPARISON.SMALLER : COMPARISON.GREATER;
};

class TreeNode {
  constructor(value, parent) {
    this.value = value;
    this.parent = parent || null;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  root;
  compareFn;
  constructor(compareFn = defaultCompareFn) {
    this.root = null;
    this.compareFn = compareFn;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new TreeNode(value);
    } else {
      this.insertTreeNode(value, this.root);
    }
  }

  insertTreeNode(value, parentNode) {
    const comparison = this.compareFn(value, parentNode.value);
    if (comparison === COMPARISON.EQUAL) {
      return;
    }
    if (comparison === COMPARISON.SMALLER) {
      if (!parentNode.left) {
        parentNode.left = new TreeNode(value, parentNode);
      } else {
        this.insertTreeNode(value, parentNode.left);
      }
    } else {
      if (!parentNode.right) {
        parentNode.right = new TreeNode(value, parentNode);
      } else {
        this.insertTreeNode(value, parentNode.right);
      }
    }
  }

  remove(value) {}
  search(value) {}
  min() {}
  max() {}
  inOrderTraverse() {}
  preOrderTraverse() {}
  postOrderTraverse() {}
}

export default BinarySearchTree;
