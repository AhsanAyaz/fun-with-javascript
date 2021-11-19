import './scrollIndicator.css';

function getDocument() {
  const body = document.body; //IE 'quirks'
  let doc = document.documentElement; //IE with doctype
  doc = doc.clientHeight ? doc : body;
  return doc;
}

class ScrollIndicator {
  colors = {
    0: '#a28089',
    25: '#a0d2eb',
    50: '#ffa8b6',
    75: '#d0bdf4',
    100: '#d0bdf4',
  };
  constructor() {
    const indicator = document.createElement('DIV');
    indicator.classList.add('scroll-indicator');
    const progressBar = document.createElement('DIV');
    progressBar.classList.add('scroll-indicator__progress-bar');
    indicator.appendChild(progressBar);
    document.body.appendChild(indicator);
    document.addEventListener('scroll', this.render.bind(this));
  }

  getColor(percentVal) {
    let color;
    for (const key in this.colors) {
      if (percentVal >= key) {
        color = this.colors[key];
      }
    }
    return color;
  }

  render() {
    const { clientHeight, scrollTop, scrollHeight } = getDocument();
    const percentAge = (scrollTop / (scrollHeight - clientHeight)) * 100;
    const el = document.querySelector('.scroll-indicator__progress-bar');
    el.style.width = `${percentAge}%`;
    el.style.backgroundColor = this.getColor(percentAge);
  }
}

export default ScrollIndicator;

/**
 * <div class="wrapper">
 *    <div class="progressbar"></div>
 * </div>
 */
