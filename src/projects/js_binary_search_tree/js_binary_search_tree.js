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
    this.value = value.toString();
    this.parent = parent || null;
    this.left = null;
    this.right = null;
  }

  get isLeaf() {
    return this.left === null && this.right === null;
  }

  get hasChildren() {
    return !this.isLeaf;
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
    let node = this.root;
    if (node === null) {
      this.root = new TreeNode(value);
      return this.root;
    }
    const nodeInserted = (() => {
      while (true) {
        const comparison = this.compareFn(value, node.value);
        if (comparison === COMPARISON.EQUAL) {
          return false;
        }
        if (comparison === COMPARISON.SMALLER) {
          if (node.left === null) {
            node.left = new TreeNode(value, node);
            return true;
          } else {
            node = node.left;
          }
        } else if (comparison === COMPARISON.GREATER) {
          if (node.right === null) {
            node.right = new TreeNode(value, node);
            return true;
          } else {
            node = node.right;
          }
        }
      }
    })();
    if (nodeInserted) {
      return node;
    }
  }

  remove(value, node) {
    node = node ? node : this.search(value);
    if (!node) return null;

    const nodeIsRoot = node.parent === null;
    const hasBothChildren = node.left !== null && node.right !== null;
    const isLeftChild = !nodeIsRoot ? node.parent.left === node : false;

    if (node.isLeaf) {
      if (nodeIsRoot) {
        this.root = null;
      } else {
        if (node.parent.left === node) {
          node.parent.left = null;
        } else {
          node.parent.right = null;
        }
      }
      return node;
    } else if (!hasBothChildren) {
      const child = node.left !== null ? node.left : node.right;
      if (nodeIsRoot) {
        this.root = child;
      } else {
        if (isLeftChild) {
          node.parent.left = child;
        } else {
          node.parent.right = child;
        }
      }
      child.parent = node.parent;
      return node;
    } else {
      const minRightLeaf = this.min(node.right);
      console.log('minRightLeaf', minRightLeaf);
      if (minRightLeaf.parent.left === minRightLeaf) {
        minRightLeaf.parent.left = null;
      } else {
        minRightLeaf.parent.right = null;
      }
      node.value = minRightLeaf.value;
      return node;
    }
  }
  search(value) {
    return this.postOrderTraverse().find((node) => node.value === value);
  }
  min(node = this.root) {
    let current = node;
    while (current !== null && current.left !== null) {
      current = current.left;
    }
    return current;
  }
  max(node = this.root) {
    let current = node;
    while (current !== null && current.right !== null) {
      current = current.right;
    }
    return current;
  }
  inOrderTraverse(node = this.root, traversed = []) {
    if (node === null) {
      return traversed;
    }
    if (node.left) {
      traversed.push(...this.inOrderTraverse(node.left));
    }
    traversed.push(node);
    if (node.right) {
      traversed.push(...this.inOrderTraverse(node.right));
    }
    return traversed;
  }
  preOrderTraverse(node = this.root, traversed = []) {
    if (node === null) {
      return traversed;
    }
    traversed.push(node);
    if (node.left) {
      traversed.push(...this.preOrderTraverse(node.left));
    }
    if (node.right) {
      traversed.push(...this.preOrderTraverse(node.right));
    }
    return traversed;
  }
  postOrderTraverse(node = this.root, traversed = []) {
    if (node === null) {
      return traversed;
    }
    if (node.left) {
      traversed.push(...this.postOrderTraverse(node.left));
    }
    if (node.right) {
      traversed.push(...this.postOrderTraverse(node.right));
    }
    traversed.push(node);
    return traversed;
  }
}

export default BinarySearchTree;
