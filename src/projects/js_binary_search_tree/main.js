import '@styles/globals.css';
import '@styles/tree.css';
import './js_binary_search_tree.css';
import BinarySearchTree from './js_binary_search_tree';
import initiateHandlers from './bst-ui';

export const renderBinarySearchTree = (node) => {
  const { left, right, value } = node;
  return `
    <div class="node__element">${value}</div>
    ${
      left || right
        ? `
          <div class="node__bottom-line"></div>
          <div class="node__children">
          <div class="node node--left">
          ${left ? renderBinarySearchTree(left) : ''}
          </div>
          <div class="node node--right">
          ${right ? renderBinarySearchTree(right) : ''}
          </div>
            
          </div>
        `
        : ''
    }
  `;
};

const myTree = new BinarySearchTree();

myTree.insert(11);
myTree.insert(7);
myTree.insert(5);
myTree.insert(3);
myTree.insert(6);
myTree.insert(9);
myTree.insert(8);
myTree.insert(10);
myTree.insert(15);
console.log(myTree.insert(13));
myTree.insert(12);
myTree.insert(14);
myTree.insert(20);
myTree.insert(18);
myTree.insert(25);
console.log('inOrderTraverse');
console.log(myTree.inOrderTraverse());
console.log('preOrderTraverse');
console.log(myTree.preOrderTraverse());
console.log('postOrderTraverse');
console.log(myTree.postOrderTraverse());
console.log('min', myTree.min());
console.log('max', myTree.max());
console.log(myTree.search(12));

const reRender = (tree, render) => {
  const treeDOMElement = document.querySelector('.tree');
  treeDOMElement.innerHTML = render(tree.root);
};

const main = () => {
  console.log('treeData', myTree);
  reRender(myTree, renderBinarySearchTree);
  const treeDOMElement = document.querySelector('.tree');
  treeDOMElement.innerHTML = renderBinarySearchTree(myTree.root);
  initiateHandlers(myTree, () => {
    reRender(myTree, renderBinarySearchTree);
  });
};

main();
