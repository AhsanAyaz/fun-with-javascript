import '@styles/globals.css';
(() => {
  class Stack {
    items = [];
    add(item) {
      this.items.push(item);
    }

    isEmpty() {
      return this.items.length === 0;
    }

    clear() {
      this.items.length = 0;
    }

    takeOut() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items.pop();
    }

    size() {
      return this.items.length;
    }

    peek() {
      return this.items[this.items.length - 1];
    }
  }

  const decimalToBinary = (decimalNumber) => {
    const reminderStack = new Stack();
    let currentNumber = decimalNumber;
    let currentReminder;
    let binaryString = '';
    while (currentNumber > 0) {
      currentReminder = Math.floor(currentNumber % 2);
      reminderStack.add(currentReminder);
      addItemToStack(currentReminder); // JUST TO SHOW IN THE UI
      currentNumber = Math.floor(currentNumber / 2);
    }

    while (!reminderStack.isEmpty()) {
      const stackItem = reminderStack.takeOut();
      binaryString += stackItem.toString();
    }

    return binaryString;
  };

  const myStack = new Stack();

  const peekStackItem = () => {
    const peekedElement = document.querySelector('.box_item:first-child');
    if (!peekedElement) {
      return;
    }
    peekedElement.classList.add('peeking');
    setTimeout(() => {
      peekedElement.classList.remove('peeking');
    }, 500);
  };

  const addItemToStack = (item) => {
    myStack.add(item);
    renderStack();
  };

  const initiateHandlers = () => {
    const addItemBtn = document.querySelector('#addItemBtn');
    const peekItemBtn = document.querySelector('#peekItemBtn');
    const takeOutItemBtn = document.querySelector('#takeOutItemBtn');
    const dToBConvertBtn = document.querySelector('#dToBConvertBtn');

    dToBConvertBtn.addEventListener('click', () => {
      myStack.clear();
      const input = document.querySelector('#decimalToBinaryInput');
      decimalToBinary(Number(input.value));
    });

    addItemBtn.addEventListener('click', () => {
      const randomNumber = Math.round(Math.random() * 50 + 1);
      addItemToStack(randomNumber);
    });

    takeOutItemBtn.addEventListener('click', () => {
      myStack.takeOut();
      renderStack();
      peekStackItem();
    });

    peekItemBtn.addEventListener('click', () => {
      peekStackItem();
    });
  };

  const renderStack = () => {
    const stackElement = document.querySelector('.box');
    stackElement.querySelectorAll('.box_item').forEach((item) => item.remove());
    myStack.items.forEach((item) => {
      const stackItemElement = document.createElement('DIV');
      stackItemElement.classList.add('box_item');
      stackItemElement.textContent = item;
      stackElement.prepend(stackItemElement);
    });
  };

  renderStack();
  initiateHandlers();
})();
