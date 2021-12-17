import '@styles/globals.css';
import '@styles/tree.css';
import './js_binary_search_tree.css';
import BinarySearchTree from './js_binary_search_tree';
import BinarySearchTreeUI from './bst-ui';
import createSampleTreeData from '../../common/create-sample-tree-data';

const main = () => {
  const myTree = new BinarySearchTree();
  createSampleTreeData(myTree);
  console.log('treeData', myTree);
  const bstUI = new BinarySearchTreeUI(myTree, null, '.tree');
  bstUI.init();
  bstUI.render();
};

main();
