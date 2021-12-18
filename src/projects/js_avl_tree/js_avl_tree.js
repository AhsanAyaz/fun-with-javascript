import BinarySearchTree from '../js_binary_search_tree/js_binary_search_tree';
const BALANCE_FACTORS = {
  LEFT_HEAVY: 1,
  BALANCED: 0,
  RIGHT_HEAVY: -1,
};

export default class AVLTree extends BinarySearchTree {
  constructor() {
    super(...arguments);
  }

  getNodeHeight(node) {
    if (node === null) {
      return -1;
    }
    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }

  getBalanceFactor(node) {
    if (!node) {
      return 0;
    }
    return this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
  }

  rotateLL(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    temp.parent = node.parent;
    node.parent = temp;
    if (temp.parent) {
      if (temp.parent.left === node) {
        temp.parent.left = temp;
      } else {
        temp.parent.right = temp;
      }
    }
    return temp;
  }

  rotateRR(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;
    temp.parent = node.parent;
    node.parent = temp;
    if (temp.parent) {
      if (temp.parent.left === node) {
        temp.parent.left = temp;
      } else {
        temp.parent.right = temp;
      }
    }
    return temp;
  }

  rotateLeftRight(node) {
    node.left = this.rotateRR(node.left);
    return this.rotateLL(node);
  }

  rotateRightLeft(node) {
    node.right = this.rotateLL(node.right);
    return this.rotateRR(node);
  }

  balanceTreeFromNode(node) {
    if (!node) {
      return;
    }
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor > BALANCE_FACTORS.LEFT_HEAVY) {
      if (this.getBalanceFactor(node.left) < BALANCE_FACTORS.BALANCED) {
        node = this.rotateLeftRight(node);
      } else {
        node = this.rotateLL(node);
      }
    } else if (balanceFactor < BALANCE_FACTORS.RIGHT_HEAVY) {
      if (this.getBalanceFactor(node.right) > BALANCE_FACTORS.BALANCED) {
        node = this.rotateRightLeft(node);
      } else {
        node = this.rotateRR(node);
      }
    }
    if (node.parent) {
      this.balanceTreeFromNode(node.parent);
    } else {
      this.root = node;
    }
  }

  remove(value) {
    const node = super.remove(value);
    this.balanceTreeFromNode(node.parent);
    return node;
  }

  insert(value) {
    const node = super.insert(value);
    this.balanceTreeFromNode(node.parent);
    return node;
  }
}
