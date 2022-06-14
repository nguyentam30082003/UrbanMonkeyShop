window.addEventListener("DOMContentLoaded", () => {
  const productMoreElement = document.querySelector(".more-lists");
  const productMore = [
    {
      id: 0,
      tagName: "UM$xVO$ JACKET BLACK",
      imgSRC: "./assets/img/more0.webp",
      btn: "Explore clothes",
      price: 105,
    },

    {
      id: 1,
      tagName: "BASIC VARSITY RED",
      imgSRC: "./assets/img/more1.webp",
      btn: "Explore clothes",
      price: 90,
    },

    {
      id: 2,
      tagName: " BASIC VARSITY BLACK",
      imgSRC: "./assets/img/more2.webp",
      btn: "Explore clothes",
      price: 90,
    },

    {
      id: 3,
      tagName: "EDENSEE TIGER SHIRT",
      imgSRC: "./assets/img/more3.webp",
      btn: "Explore clothes",
      price: 43,
    },

    {
      id: 4,
      tagName: "CERAMIC FLORAL SHIRT",
      imgSRC: "./assets/img/more4.webp",
      btn: "Explore clothes",
      price: 51,
    },

    {
      id: 5,
      tagName: "PUNK FLAME SHIRT WHITE",
      imgSRC: "./assets/img/more5.webp",
      btn: "Explore clothes",
      price: 14,
    },
  ];

  function renderMoreProduct() {
    productMore.forEach((product) => {
      const template = `
             <div class="more-product">
                  <div class="more-img">
                  <img src="${product.imgSRC}" alt="" />
                    <a href="./html/productItem.html" class="more-img-add" id="add-cart" onclick = "addToCart(${product.id})">
                      ${product.btn}
                      </a>
                  </div>
                  <div class="more-desc">
                  <a href = "#" class="more-name">${product.tagName}</a>
                  <p class="more-price"> $ ${product.price} USD</p>
                  </div>
             </div>
                  `;
      productMoreElement.insertAdjacentHTML("beforeend", template);
    });
  }
  renderMoreProduct();
});
