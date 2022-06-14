window.addEventListener("DOMContentLoaded", () => {
  const featuredElement = document.querySelector(".featured-lists");
  const productFeatured = [
    {
      id: 0,
      imgSRC: "./assets/img/featured1.webp",
      tagName: " SKELETON VARSITY",
      btn: "Explore clothes",
      price: 98.0,
    },
    {
      id: 1,
      imgSRC: "./assets/img/featured2.webp",
      tagName: " SKELETON VARSITY",
      btn: "Explore clothes",
      price: 98.0,
    },
  ];

  function renderProductFeatured() {
    productFeatured.forEach((product) => {
      const teamplate = `
      <div class="featured-product">
          <div class="featured-img">
              <img src="${product.imgSRC}" alt="" />
              <span class="featured-img-sale">On Sale.</span>
              <a href="./html/productItem.html" class="featured-img-add" id="add-cart">
                ${product.btn}
              </a>
          </div>
          <div class="featured-desc">
              <p class="${product.tagName}">SKELETON VARSITY</p>
              <p class="featured-price">$ ${product.price} USD</p>
          </div>
      </div>

          `;
      featuredElement.insertAdjacentHTML("beforeend", teamplate);
    });
  }

  renderProductFeatured();
});
