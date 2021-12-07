const initiateHandlers = (tree, render) => {
  const insert = document.querySelector('#insertBtn');
  const removeElementBtn = document.querySelector('#removeElementBtn');
  const minValueBtn = document.querySelector('#minValueBtn');
  const maxValueBtn = document.querySelector('#maxValueBtn');
  const searchBtn = document.querySelector('#searchBtn');
  const toStringBtn = document.querySelector('#toStringBtn');
  const sizeBtn = document.querySelector('#sizeBtn');
  const isEmptyBtn = document.querySelector('#isEmptyBtn');
  const clearBtn = document.querySelector('#clearBtn');
  removeElementBtn.addEventListener('click', () => {
    const element = prompt('Enter element to remove from the tree');
    const removedEl = tree.remove(element);
    if (removedEl) {
      alert('Node removed');
      render(tree.root);
    } else {
      alert('Element not found');
    }
  });
  insert.addEventListener('click', () => {
    const element = prompt('Enter element to add to tree');
    tree.insert(element);
    render(tree.root);
  });
  minValueBtn.addEventListener('click', () => {
    const node = tree.min();
    if (node) {
      alert(`Tree min value = ${node.value}`);
    } else {
      alert('Node not found');
    }
  });
  searchBtn.addEventListener('click', () => {
    const searchVal = prompt('Enter the node value to search in the tree');
    const searchedNode = tree.search(searchVal);
    if (searchedNode) {
      const { parent, value, right, left } = searchedNode;
      alert(
        `value: ${value}, parent: ${parent ? parent.value : null}, left: ${
          left ? left.value : null
        }, right: ${right ? right.value : null}`
      );
    } else {
      alert('Node not found');
    }
  });
  maxValueBtn.addEventListener('click', () => {
    const node = tree.max();
    if (node) {
      alert(`Max tree value = ${node.value}`);
    } else {
      alert('Node not found');
    }
  });
  toStringBtn.addEventListener('click', () => {
    alert(tree.toString());
  });
  sizeBtn.addEventListener('click', () => {
    alert(`The size of the linked list is ${tree.size()}`);
  });
  isEmptyBtn.addEventListener('click', () => {
    alert(`Linked list is${tree.isEmpty() ? '' : ' not'} empty`);
  });
  clearBtn.addEventListener('click', () => {
    tree.clear();
    alert('Linked list cleared');
    render(tree.root);
  });
};

export default initiateHandlers;
