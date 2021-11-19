const initiateHandlers = (linkedList, renderLinkedList) => {
  const pushBtn = document.querySelector('#pushBtn');
  const insertAtBtn = document.querySelector('#insertAtBtn');
  const removeElementBtn = document.querySelector('#removeElementBtn');
  const getElementAtBtn = document.querySelector('#getElementAtBtn');
  const indexOfBtn = document.querySelector('#indexOfBtn');
  const removeElementAtBtn = document.querySelector('#removeElementAtBtn');
  const toStringBtn = document.querySelector('#toStringBtn');
  const sizeBtn = document.querySelector('#sizeBtn');
  const isEmptyBtn = document.querySelector('#isEmptyBtn');
  const clearBtn = document.querySelector('#clearBtn');
  pushBtn.addEventListener('click', () => {
    const element = prompt('Enter element to add to linkedlist');
    linkedList.push(element);
    renderLinkedList(linkedList);
  });
  removeElementBtn.addEventListener('click', () => {
    const element = prompt('Enter element to remove from linkedlist');
    const removedEl = linkedList.remove(element);
    if (removedEl) {
      alert('Element removed');
      renderLinkedList(linkedList);
    } else {
      alert('Element not found');
    }
  });
  insertAtBtn.addEventListener('click', () => {
    const element = prompt('Enter element to add to linkedlist');
    const index = prompt('Enter the index the element is to be added at');
    linkedList.insertAt(element, Number(index));
    renderLinkedList(linkedList);
  });
  getElementAtBtn.addEventListener('click', () => {
    const index = prompt('Enter the index the element is to be retrieved from');
    const node = linkedList.getElementAt(Number(index));
    if (node) {
      alert(`Element retrieved = ${node.element}`);
    } else {
      alert('Element not found');
    }
  });
  removeElementAtBtn.addEventListener('click', () => {
    const index = prompt('Enter the index the element is to be removed from');
    const removedEl = linkedList.removeAt(Number(index));
    if (removedEl) {
      alert('Element removed');
      renderLinkedList(linkedList);
    } else {
      alert('Element not found');
    }
  });
  indexOfBtn.addEventListener('click', () => {
    const element = prompt('Enter element you want to find index of');
    const index = linkedList.indexOf(element);
    if (index >= 0) {
      alert(`Index of element '${element}' is ${index}`);
    } else {
      alert('Element not found');
    }
  });
  toStringBtn.addEventListener('click', () => {
    alert(linkedList.toString());
  });
  sizeBtn.addEventListener('click', () => {
    alert(`The size of the linked list is ${linkedList.size()}`);
  });
  isEmptyBtn.addEventListener('click', () => {
    alert(`Linked list is${linkedList.isEmpty() ? '' : ' not'} empty`);
  });
  clearBtn.addEventListener('click', () => {
    linkedList.clear();
    alert('Linked list cleared');
    renderLinkedList(linkedList);
  });
};

export default initiateHandlers;
