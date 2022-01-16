import '@styles/globals.css';
import '@styles/tree.css';
import '../js_binary_search_tree/js_binary_search_tree.css';
import './js_avl_tree.css';
import AVLTree from './js_avl_tree';
import AVLTreeUI from './avl_tree_ui';
import createSampleTreeData from '../../common/create-sample-tree-data';

const main = () => {
  const avlTree = leftHeavyTree();
  const avlUI = new AVLTreeUI(avlTree);
  avlUI.init();
  avlUI.render();
  window.avlTree = avlTree;
};

const sampleData = () => {
  const tree = new AVLTree();
  createSampleTreeData(tree);
  return tree;
};

const leftHeavyTree = () => {
  // LL Imbalance
  const tree = new AVLTree();
  tree.insert(30);
  tree.insert(20);
  // tree.insert(10);
  return tree;
};
const rightHeavyTree = () => {
  // RR Imbalance
  const tree = new AVLTree();
  tree.insert(30);
  tree.insert(40);
  // tree.insert(50);
  return tree;
};

const leftRightHeavyTree = () => {
  // LR Imbalance
  const tree = new AVLTree();
  tree.insert(30);
  tree.insert(10);
  // tree.insert(20);
  return tree;
};

const rightLeftHeavy = () => {
  // RL Imbalance
  const tree = new AVLTree();
  tree.insert(30);
  tree.insert(50);
  // tree.insert(40);
  return tree;
};

const someWhatBalancedTree = () => {
  const tree = new AVLTree();
  createSampleTreeData(tree);
  return tree;
};



main();
