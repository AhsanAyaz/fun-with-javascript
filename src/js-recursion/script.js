import '../styles/globals.css';
import './style.css';
import calculateFactorial from './calculateFactorial';
import calculateFactorialWithUI from './calculateFactorialWithUI';

const main = () => {
  const factorialInput = document.querySelector('#factorialInput');
  factorialInput.addEventListener('change', (e) => {
    const value = +e.target.value;
    console.log(calculateFactorial(value));
  });
  const jobQueue = [];
  const number = 5;
  jobQueue.push({
    action: 'nested',
    n: number,
  });
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
      return;
    }
    const factList = document.querySelector('.fact-list');
    switch (job.action) {
      case 'nested':
        if (factList.children.length) {
          factList.lastChild.textContent += '  👇';
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
            targetDiv.classList.add('fact-list-item--delete');
            targetDiv.addEventListener('webkitAnimationEnd', () => {
              targetDiv.remove();
            });
          }, 500);
        }
        break;
      case 'return':
        if (factList.children.length) {
          factList.lastChild.remove();
        } else {
          clearInterval(timer);
        }
      default:
        break;
    }
  }, 1000);
};

main();
