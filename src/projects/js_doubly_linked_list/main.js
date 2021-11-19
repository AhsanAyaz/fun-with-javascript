import '@styles/globals.css';
import '@styles/linked_list.css';
import './doubly_linked_list.css';
import LinkedList from './doubly_linked_list';
import renderLinkedList from './render';
import initiateHandlers from '../js_linked_list/ui_handlers';

const linkedList = new LinkedList();

const main = () => {
  linkedList.push('22');
  linkedList.push('33');
  linkedList.push('abc');
  linkedList.push('xyz');
  initiateHandlers(linkedList, renderLinkedList);
  renderLinkedList(linkedList);
};

main();
