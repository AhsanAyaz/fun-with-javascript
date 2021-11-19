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

const imageLazyLoadingFallback = () => {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading=lazy]');
    for (let index = 0; index < images.length; index++) {
      const element = images[index];
      element.src = element.dataset.src;
    }
  } else if (window.IntersectionObserver) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => {
          const image = entry.target;
          const dataSrcValue = image.getAttribute('data-src');
          if (!dataSrcValue) {
            return;
          }
          image.src = dataSrcValue;
          observer.unobserve(image);
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    for (let index = 0; index < images.length; index++) {
      const image = images[index];
      observer.observe(image);
    }
  } else {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'http://afarkas.github.io/lazysizes/lazysizes.min.js';
    document.body.appendChild(scriptTag);
    console.log('Works in IE11');
  }
};

const main = () => {
  console.log('JS is awesome!');
  generateImages();
  imageLazyLoadingFallback();
};

main();
