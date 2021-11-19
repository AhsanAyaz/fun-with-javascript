import '@styles/globals.css';
import '@styles/linked_list.css';
import DoublyLinkedList from './doubly_linked_list';
import { renderLinkedList, initiateHandlers } from './ui-handlers';

const linkedList = new DoublyLinkedList();

const main = () => {
  linkedList.push('22');
  linkedList.push('33');
  linkedList.push('abc');
  linkedList.push('xyz');
  initiateHandlers(linkedList);
  renderLinkedList(linkedList);
};

main();
