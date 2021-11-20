import '@styles/globals.css';
import '@styles/linked_list.css';
import './doubly_linked_list.css';
import DoublyLinkedList from './doubly_linked_list';
import renderLinkedList from './render';
import initiateHandlers from '../js_linked_list/ui_handlers';

const doublyLinkedList = new DoublyLinkedList();

const main = () => {
  doublyLinkedList.push('22');
  doublyLinkedList.push('33');
  doublyLinkedList.push('abc');
  doublyLinkedList.push('xyz');
  initiateHandlers(doublyLinkedList, renderLinkedList);
  renderLinkedList(doublyLinkedList);
};

main();
