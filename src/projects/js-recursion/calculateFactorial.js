const calculateFactorial = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
};

const result = calculateFactorial(5);
console.log(result);

/*
  /*
  n! = n * (n - 1)!


  5!
  5 * 4!
  5 * 4 * 3!
  5 * 4 * 3 * 2!
  5 * 4 * 3 * 2 * 1!

  5 * 4 * 3 * 2 * 1
  5 * 4 * 3 * 2
  5 * 4 * 6
  5 * 24
  120
*/
