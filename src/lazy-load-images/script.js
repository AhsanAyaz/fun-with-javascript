import './styles.css';
import CardItem from './CardItem';

const generateImages = () => {
  const container = document.querySelector('.app-container');
  const sections = container.querySelectorAll('section');
  for (let i = 0, len = sections.length; i < len; ++i) {
    const section = sections[i];
    const columns = section.querySelectorAll('.col-md-6');
    const targetColumn = i % 2 === 0 ? columns[1] : columns[0];
    targetColumn.innerHTML = CardItem(i);
  }
};
const main = () => {
  console.log('JS is awesome!');
  generateImages();
};

main();
