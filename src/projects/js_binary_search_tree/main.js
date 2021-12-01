import '@styles/globals.css';
import '@styles/tree.css';
import './js_binary_search_tree.css';
import BinarySearchTree from './js_binary_search_tree';

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
myTree.insert(14);
myTree.insert(12);
myTree.insert(13);

const main = () => {
  console.log('treeData', myTree);
  const treeDOMElement = document.querySelector('.tree');
  treeDOMElement.innerHTML = renderBinarySearchTree(myTree.root);
};

main();
