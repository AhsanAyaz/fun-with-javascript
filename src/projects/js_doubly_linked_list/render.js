const renderLinkedList = (linkedList) => {
  const boxElement = document.querySelector('.box');
  boxElement.querySelectorAll('.box_item').forEach((item) => item.remove());
  const boxContainer = document.querySelector('.box_container');
  boxContainer.setAttribute(
    'before-text',
    linkedList.size() > 0 ? 'null' : 'Head\nTail'
  );
  console.log(linkedList);
  let current = linkedList.head;
  if (linkedList.head === null) {
    return;
  }

  for (let i = 0; i < linkedList.size() && current !== null; i++) {
    const itemElement = document.createElement('DIV');
    itemElement.classList.add('box_item');
    itemElement.innerHTML = `
      <div class="icon icon-arrow-left">
      </div>
      <div class="box-item-text">${current.element}</div>
      <div class="icon icon-arrow-right">
      </div>
    `;
    boxElement.append(itemElement);
    current = current.next;
  }
};

export default renderLinkedList;
