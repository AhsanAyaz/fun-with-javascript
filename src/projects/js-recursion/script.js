import '@styles/globals.css';
import './style.css';
import calculateFactorial from './calculateFactorial';
import calculateFactorialWithUI from './calculateFactorialWithUI';

const onCalcBtnClick = () => {
  const factorialInput = document.querySelector('#factorialInput');
  const jobQueue = [];
  const jobTimer = 1000;
  const number = factorialInput.value;
  let result = 0;
  document.getElementById('factorialNumber').textContent = `${number}!`;
  jobQueue.push({
    action: 'nested',
    n: number,
  });
  showCalculation();
  calculateFactorialWithUI(number, {
    onNested: (n) => {
      jobQueue.push({
        action: 'nested',
        n,
      });
    },
    onReturn: ({ n, result }) => {
      jobQueue.push(
        ...[
          {
            action: 'calculated',
            n,
            result,
          },
          {
            action: 'return',
            n,
            result,
          },
        ]
      );
    },
  });

  const timer = setInterval(() => {
    const job = jobQueue.shift();
    if (!job) {
      clearInterval(timer);
      document.getElementById('factorialNumber').textContent += ` = ${result}`;
      enableCaclBtn();
      enableInput();
      return;
    }
    const factList = document.querySelector('.fact-list');
    switch (job.action) {
      case 'nested':
        if (factList.children.length) {
          factList.lastChild.textContent = `calculating ${job.n + 1} x ${
            job.n
          }! 👇`;
        }
        const div = document.createElement('DIV');
        div.textContent = `calculating ${job.n}!`;
        div.classList.add('fact-list-item');
        const margin = `${factList.children.length * 16}px`;
        div.style.marginLeft = margin;
        div.style.marginRight = margin;
        factList.appendChild(div);
        break;
      case 'calculated':
        if (factList.children.length) {
          const targetDiv = factList.lastChild;
          targetDiv.textContent = `Calculated ${job.n} factorial. Result = ${job.result}  👆`;
          const divId = `job_${job.n}`;
          targetDiv.id = divId;
          setTimeout(() => {
            const animationTime = 500;
            const delayTime = jobTimer / 2 - animationTime;
            targetDiv.style.animation = `nested-item-disappear ${animationTime}ms ease-in ${delayTime}ms`;
            targetDiv.addEventListener('webkitAnimationEnd', () => {
              targetDiv.remove();
            });
          }, jobTimer / 2);
        }
        break;
      case 'return':
        if (factList.children.length) {
          factList.lastChild.remove();
          result = job.result;
        }
      default:
        break;
    }
  }, jobTimer);
};

const showCalculation = () => {
  const calculationContainer = document.getElementById('calculationContainer');
  calculationContainer.style.visibility = 'visible';
};

const hideCalculation = () => {
  const calculationContainer = document.getElementById('calculationContainer');
  calculationContainer.style.visibility = 'hidden';
};

const disableInput = () => {
  const factorialInput = document.getElementById('factorialInput');
  factorialInput.setAttribute('disabled', true);
};

const enableInput = () => {
  const factorialInput = document.getElementById('factorialInput');
  factorialInput.removeAttribute('disabled');
};

const enableCaclBtn = () => {
  const calcFactBtn = document.getElementById('calcFactBtn');
  calcFactBtn.removeAttribute('disabled');
};

const disableCaclBtn = () => {
  const calcFactBtn = document.getElementById('calcFactBtn');
  calcFactBtn.setAttribute('disabled', true);
};

const main = () => {
  disableCaclBtn();
  hideCalculation();
  const factorialInput = document.getElementById('factorialInput');
  const calcFactBtn = document.getElementById('calcFactBtn');
  factorialInput.addEventListener('input', (e) => {
    const inputVal = e.target.value;
    inputVal ? enableCaclBtn() : disableCaclBtn();
    hideCalculation();
  });
  calcFactBtn.addEventListener('click', () => {
    disableCaclBtn();
    disableInput();
    onCalcBtnClick();
  });
};

main();
