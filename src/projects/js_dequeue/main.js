import '@styles/globals.css';
import './dequeue.css';
import Dequeue from './dequeue';

const myDequeue = new Dequeue();

const renderDeQueue = (items = Object.values(myDequeue.items)) => {
  const boxElement = document.querySelector('.box');
  boxElement.querySelectorAll('.box_item').forEach((item) => item.remove());
  items.forEach((item) => {
    const itemElement = document.createElement('DIV');
    itemElement.classList.add('box_item');
    itemElement.textContent = item;
    boxElement.append(itemElement);
  });
};

const PEEK_SIDES = {
  FRONT: 'front',
  REAR: 'rear',
};

const peekDequeue = (side) => {
  const target =
    side === PEEK_SIDES.FRONT
      ? '.box_item:first-child'
      : '.box_item:last-child';
  const peekedElement = document.querySelector(target);
  if (!peekedElement) {
    return;
  }
  peekedElement.scrollIntoView();
  peekedElement.classList.add('peeking');
  setTimeout(() => {
    peekedElement.classList.remove('peeking');
  }, 500);
};

const checkIfPalindrome = (str) => {
  let isPalindrome = true;
  // radar
  const palDeq = new Dequeue();
  str.split('').forEach((char) => palDeq.addToRear(char));
  while (palDeq.size() > 1 && isPalindrome) {
    const front = palDeq.removeFromFront();
    const rear = palDeq.removeFromRear();
    if (front !== rear) {
      isPalindrome = false;
    }
  }

  return isPalindrome;
};

const initiateHandlers = () => {
  const addToRearBtn = document.querySelector('#addToRearBtn');
  const peekRearBtn = document.querySelector('#peekRearBtn');
  const removeFromRearBtn = document.querySelector('#removeFromRearBtn');
  const addToFrontBtn = document.querySelector('#addToFrontBtn');
  const peekFrontBtn = document.querySelector('#peekFrontBtn');
  const removeFromFrontBtn = document.querySelector('#removeFromFrontBtn');
  const clearBtn = document.querySelector('#clearBtn');
  const palindromeBtn = document.querySelector('#palindromeBtn');
  palindromeBtn.addEventListener('click', () => {
    const palindromeInput = document.querySelector('#palindromeInput');
    const result = checkIfPalindrome(palindromeInput.value);
    alert(
      `The string ${palindromeInput.value} is ${
        result ? '' : 'not '
      }a palindrome`
    );
  });
  clearBtn.addEventListener('click', () => {
    myDequeue.clear();
    renderDeQueue();
  });
  addToRearBtn.addEventListener('click', () => {
    const randomNumber = Math.round(Math.random() * 50 + 1);
    myDequeue.addToRear(randomNumber);
    renderDeQueue();
  });
  removeFromRearBtn.addEventListener('click', () => {
    myDequeue.removeFromRear();
    renderDeQueue();
    peekDequeue(PEEK_SIDES.REAR);
  });
  peekRearBtn.addEventListener('click', () => {
    peekDequeue(PEEK_SIDES.REAR);
  });
  addToFrontBtn.addEventListener('click', () => {
    const randomNumber = Math.round(Math.random() * 50 + 1);
    myDequeue.addToFront(randomNumber);
    renderDeQueue();
  });
  removeFromFrontBtn.addEventListener('click', () => {
    myDequeue.removeFromFront();
    renderDeQueue();
    peekDequeue(PEEK_SIDES.FRONT);
  });
  peekFrontBtn.addEventListener('click', () => {
    peekDequeue(PEEK_SIDES.FRONT);
  });
};

const main = () => {
  initiateHandlers();
};

main();
