import '../styles/globals.css';
import './linked_list.css';
import LinkedList from './linked_list';
import { renderLinkedList, initiateHandlers } from './ui-handlers';

const linkedList = new LinkedList();

const main = () => {
  linkedList.push('22');
  linkedList.push('33');
  linkedList.push('abc');
  linkedList.push('xyz');
  initiateHandlers(linkedList);
  renderLinkedList(linkedList);
};

main();
