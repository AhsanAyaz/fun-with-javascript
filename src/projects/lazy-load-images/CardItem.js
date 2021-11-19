const CardItem = (index) => {
  const imageBaseSize = 120;
  const imageHeight = imageBaseSize + index;
  const imageWidth = imageBaseSize + index;
  // We can even return a string built using a template literal
  return `
    <div class="card" style="width: 18rem">
      <img
        loading="lazy"
        data-src="https://picsum.photos/${imageWidth}/${imageHeight}"
        class="card-img-top lazyload"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
        <a href="https://ahsanayaz.com" class="btn btn-primary">AhsanAyaz.com</a>
      </div>
    </div>
  `;
};

export default CardItem;
