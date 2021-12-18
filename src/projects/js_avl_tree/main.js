import '@styles/globals.css';
import '@styles/tree.css';
import '../js_binary_search_tree/js_binary_search_tree.css';
import './js_avl_tree.css';
import AVLTree from './js_avl_tree';
import AVLTreeUI from './avl_tree_ui';
import createSampleTreeData from '../../common/create-sample-tree-data';

const main = () => {
  const avlTree = new AVLTree();
  // createSampleTreeData(avlTree);
  avlTree.insert(70);
  avlTree.insert(80);
  avlTree.insert(50);
  avlTree.insert(90);
  avlTree.insert(72);
  avlTree.insert(75);
  avlTree.insert(78);
  console.log('avlTreeData', avlTree);
  const avlUI = new AVLTreeUI(avlTree);
  avlUI.init();
  avlUI.render();
  const clone = _.cloneDeep(avlTree);
  const removedEl = clone.remove('50');
  if (removedEl) {
    avlUI.highlightNode(removedEl).then(() => {
      avlUI.render(avlTree.root);
    });
  } else {
    alert('Element not found');
  }
};

main();
