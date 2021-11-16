import '../styles/globals.css';
import './linked_list.css';
import LinkedList from './linked_list';
import { renderLinkedList, initiateHandlers } from './ui-handlers';

const linkedList = new LinkedList();

const main = () => {
  initiateHandlers(linkedList);
  renderLinkedList(linkedList);
};

main();
