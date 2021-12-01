import '@styles/tree.css';
import './style.css';
const getTreeData = () => {
  return {
    element: 'test',
    left: {
      element: 'test12',
      left: {
        element: 'test122',
      },
      right: {
        element: 'test123',
      },
    },
    right: {
      element: 'test13',
      left: {
        element: 'test132',
        left: {
          element: 'test1321',
          left: {
            element: 'test13211',
          },
        },
      },
      right: {
        element: 'test133',
        left: {
          element: 'test1332',
        },
        right: {
          element: 'test1333',
          left: {
            element: 'test1321',
            left: {
              element: 'test13211',
            },
          },
          right: {
            element: 'test1321',
            right: {
              element: 'test13211',
            },
          },
        },
      },
    },
  };
};

export const renderBinaryTree = (node) => {
  const { left, right, element } = node;
  return `
    <div class="node__element">${element}</div>
    ${
      left || right
        ? `
          <div class="node__bottom-line"></div>
          <div class="node__children">
            ${
              left
                ? `
                <div class="node node--left">
                  ${renderBinaryTree(left)}
                </div>
                `
                : ''
            }
            ${
              right
                ? `
                <div class="node node--right">
                  ${renderBinaryTree(right)}
                </div>
                `
                : ''
            }
          </div>
        `
        : ''
    }
  `;
};

const main = () => {
  const rootNode = getTreeData();
  console.log('treeData', rootNode);
  const treeDOMElement = document.querySelector('.tree');
  treeDOMElement.innerHTML = renderBinaryTree(rootNode);
};

main();
