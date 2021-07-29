const calculateFactorial = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * calculateFactorial(n - 1);
};

export default calculateFactorial;
