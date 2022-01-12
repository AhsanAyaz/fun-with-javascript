import BinarySearchTreeUI from '../js_binary_search_tree/bst-ui';
import BinarySearchTree from '../js_binary_search_tree/js_binary_search_tree';

const colors = ['#D6FFB7', '#F5FF90', '#FFC15E', '#FF9F1C', '#2AFC98'];

export default class AVLTreeUI extends BinarySearchTreeUI {
  balancePreviewVisible = true;
  balancedTree;
  constructor() {
    super(...arguments);
    this.treeContainerSelector = '.avl-tree';
    this.actionsContainerSelector = '.avl-actions-container';
  }

  resetBalancedTreeView() {
    if (!this.balancedTree) {
      return;
    }
    const toggleBalancePreviewBtn = document.querySelector('#switchPreviewBtn');
    this.tree = _.clone(this.balancedTree);
    this.balancedTree = null;
    this.hideBalancePreview();
    this.render(this.tree.root);
    toggleBalancePreviewBtn.setAttribute('hidden', true);
    document.querySelectorAll('button').forEach((btn) => {
      btn.removeAttribute('disabled');
    });
  }

  init() {
    super.init();
    const toggleBalancePreviewBtn = document.querySelector('#switchPreviewBtn');

    toggleBalancePreviewBtn.addEventListener('click', () => {
      this.resetBalancedTreeView();
    });
  }

  template() {
    let baseTemplate = super.template();
    baseTemplate += `
      <div class="btn-group">
        <button id="switchPreviewBtn" hidden="true" class="btn btn-dark">
          Hide Balance Tree Preview
        </button>
      </div>
    `;
    return baseTemplate;
  }

  onInsertBtnClick() {
    const element = prompt('Enter element to insert into the tree');
    const bst = new BinarySearchTree();
    bst.root = _.cloneDeep(this.tree).root;
    const insertedEl = this.tree.insert(element);
    if (this.balancePreviewVisible) {
      this.balancedTree = _.cloneDeep(this.tree);
    }
    if (insertedEl) {
      if (!this.balancePreviewVisible) {
        this.render(this.tree.root);
        this.hideBalancePreview();
        this.highlightNode(insertedEl);
      } else {
        bst.insert(element);
        this.render(bst.root);
        this.showBalancePreview(this.balancedTree, bst);
      }
    } else {
      alert('Element already exists');
    }
  }

  onRemoveElementBtnClick() {
    const element = prompt('Enter element to remove from the tree');
    let removedEl;
    if (this.balancePreviewVisible) {
      this.balancedTree = _.cloneDeep(this.tree);
      removedEl = this.balancedTree.remove(element);
    } else {
      removedEl = this.tree.remove(element);
      this.balancedTree = null;
    }
    if (removedEl) {
      this.highlightNode(removedEl).then(() => {
        if (!this.balancePreviewVisible) {
          this.render(this.tree.root);
          this.hideBalancePreview();
        } else {
          this.showBalancePreview(this.balancedTree);
        }
      });
    } else {
      alert('Element not found');
    }
  }

  hideBalancePreview() {
    const selector = '.avl-tree-clone';
    const treeContainer = document.querySelector(selector);
    treeContainer.innerHTML = '';
  }

  disableAllBtnsExceptPreview() {
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach((btn) => {
      if (btn.getAttribute('id') === 'switchPreviewBtn') {
        btn.removeAttribute('hidden');
      } else {
        btn.setAttribute('disabled', true);
      }
    });
  }

  showBalancePreview(clone, tree = this.tree) {
    this.disableAllBtnsExceptPreview();
    const selector = '.avl-tree-clone';
    const treeContainer = document.querySelector(selector);
    this.renderTree(clone.root, selector);
    treeContainer.innerHTML = `<div style="margin-bottom:30px;">Balanced Tree</div>${treeContainer.innerHTML}`;
    const cloneTree = clone.inOrderTraverse();
    const colorsHash = {};
    let index = 0;
    for (const current of cloneTree) {
      const match = tree.search(current.value);
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
