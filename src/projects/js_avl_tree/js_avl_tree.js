import BinarySearchTree from '../js_binary_search_tree/js_binary_search_tree';
const BALANCE_FACTORS = {
  LEFT_HEAVY: -1,
  BALANCED: 0,
  RIGHT_HEAVY: 1,
};
class AVLTree extends BinarySearchTree {
  getNodeHeight(node) {
    if (node == null) {
      return -1;
    }
    return (
      Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) +
      1
    );
  }

  getBalanceFactor(node) {
    if (node == null) {
      return 0;
    }
    return this.getNodeHeight(node.right) - this.getNodeHeight(node.left);
  }

  rotateRight(node) {
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

  rotateLeft(node) {
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
    node.left = this.rotateLeft(node.left);
    return this.rotateRight(node);
  }

  rotateRightLeft(node) {
    node.right = this.rotateRight(node.right);
    return this.rotateLeft(node);
  }

  balanceTreeFromNode(node) {
    if (!node) {
      return;
    }
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor < BALANCE_FACTORS.LEFT_HEAVY) {
      if (this.getBalanceFactor(node.left) === BALANCE_FACTORS.LEFT_HEAVY) {
        node = this.rotateRight(node);
      } else {
        node = this.rotateLeftRight(node);
      }
    } else if (balanceFactor > BALANCE_FACTORS.RIGHT_HEAVY) {
      if (this.getBalanceFactor(node.right) === BALANCE_FACTORS.RIGHT_HEAVY) {
        node = this.rotateLeft(node);
      } else {
        node = this.rotateRightLeft(node);
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
export default AVLTree;