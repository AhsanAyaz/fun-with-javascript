import '@styles/globals.css';
import './js_binary_tree.css';
import BinaryTree from './js_binary_tree';

const myTree = new BinaryTree();

const renderTree = (node) => {
  const { element, left, right } = node;

  return `
    <div class="node__element">${element}</div>
    
    ${
      left || right
        ? `<div class="node__bottom-line"></div>
        <div class="node__children">
          ${
            left
              ? `<div class="node">
                ${renderTree(left)}
              </div>`
              : ''
          }
          ${
            right
              ? `
          <div class="node">
            ${renderTree(right)}
          </div>
          `
              : ''
          }
        </div>`
        : ''
    }
  `;

  // const nodeElement = document.createElement('DIV');
  // nodeElement.classList.add('node__element');
  // nodeElement.textContent = element;

  // LI.innerHTML = `<div>${element} <br /></div>`;
  // const CHILD_UL = document.createElement('UL');
  // DOMElementUL.appendChild(LI);
  // LI.appendChild(CHILD_UL);
  // if (!left && !right) {
  //   return;
  // }
  // if (left) {
  //   renderTree(left, CHILD_UL);
  // }
  // if (right) {
  //   renderTree(right, CHILD_UL);
  // }
};

const main = () => {
  // renderTree(myTree, document.querySelector('.tree ul'));
  const treeHTML = renderTree(myTree);
  document.querySelector('.tree .node--root').innerHTML = treeHTML;
};

main();
