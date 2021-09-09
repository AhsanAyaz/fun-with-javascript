const calculateFactorialWithUI = (n, args) => {
  const { onNested, onReturn } = args;
  let result;
  if (n === 1 || n === 0) {
    result = 1;
  } else {
    onNested(n - 1);
    result = n * calculateFactorialWithUI(n - 1, args);
  }
  onReturn({ n, result });
  return result;
};

export default calculateFactorialWithUI;
