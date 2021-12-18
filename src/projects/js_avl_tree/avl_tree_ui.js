import BinarySearchTreeUI from '../js_binary_search_tree/bst-ui';

const colors = ['#D6FFB7', '#F5FF90', '#FFC15E', '#FF9F1C', '#2AFC98'];

export default class AVLTreeUI extends BinarySearchTreeUI {
  showBalancePreview = true;
  constructor() {
    super(...arguments);
    this.treeContainerSelector = '.avl-tree';
    this.actionsContainerSelector = '.avl-actions-container';
  }

  init() {
    super.init();
  }

  onRemoveElementBtnClick() {
    // const balancePreviewEnabled = this.showBalancePreview;
    // Todo: this will be better. Don't judge me
    const balancePreviewEnabled = window.SHOW_BALANCE_PREVIEW;
    const element = prompt('Enter element to remove from the tree');
    const clone = _.cloneDeep(this.tree);
    const removedEl = balancePreviewEnabled
      ? clone.remove(element)
      : this.tree.remove(element);
    if (removedEl) {
      this.highlightNode(removedEl).then(() => {
        if (!balancePreviewEnabled) {
          this.render(this.tree.root);
        } else {
          this.balancePreview(clone);
        }
      });
    } else {
      alert('Element not found');
    }
  }

  balancePreview(clone) {
    const selector = '.avl-tree-clone';
    const treeContainer = document.querySelector(selector);
    this.renderTree(clone.root, selector);
    treeContainer.innerHTML = `<div style="margin-bottom:30px;">Balanced Tree</div>${treeContainer.innerHTML}`;
    const cloneTree = clone.inOrderTraverse();
    const colorsHash = {};
    let index = 0;
    for (const current of cloneTree) {
      const match = this.tree.search(current.value);
      if (!match) {
        continue;
      }
      if (match.left !== current.left || match.right !== current.right) {
        colorsHash[current.value] = colors[index];
        index++;
      }
    }
    for (const key in colorsHash) {
      const elements = document.querySelectorAll(`[data-node-id="${key}"]`);
      elements.forEach((el) => {
        el.style.backgroundColor = colorsHash[key];
      });
    }
  }
}
