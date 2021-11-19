const basket = [
  {
    fruit: '🍎',
  },
  {
    fruit: '🍎',
  },
  {
    fruit: '🍎',
  },
  {
    fruit: '🍎',
  },
  {
    fruit: '🍎',
  },
  {
    fruit: '🍎',
  },
  {
    fruit: '🍎',
  },
  {
    fruit: '🍇',
  },
  {
    fruit: '🍎',
  },
  {
    fruit: '🍎',
  },
  {
    fruit: '🍎',
  },
];

const findGrape = (index) => {
  const element = basket[index];
  if (!element) {
    return null;
  }
  if (element.fruit === '🍇') {
    return index;
  } else {
    return findGrape(index + 1);
  }
};

const grapeIndex = findGrape(0);

console.log(grapeIndex);
