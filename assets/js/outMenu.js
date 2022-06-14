const menuElement = document.querySelector(".product-listss");
const categoryElement = document.querySelector(".category-list");
const btnOutProduct = document.querySelectorAll(".filter-btn");

const productFilterMenu = [
  {
    id: 0,
    tagName: "UM$xVO$ JACKET BLACK",
    imgSRC: "../assets/img/more0.webp",
    btn: "Explore clothes",
    price: 105,
  },

  {
    id: 1,
    tagName: "BASIC VARSITY RED",
    imgSRC: "../assets/img/more1.webp",
    btn: "Explore clothes",
    price: 90,
  },

  {
    id: 2,
    tagName: " BASIC VARSITY BLACK",
    imgSRC: "../assets/img/more2.webp",
    btn: "Explore clothes",
    price: 90,
  },

  {
    id: 3,
    tagName: "EDENSEE TIGER SHIRT",
    imgSRC: "../assets/img/more3.webp",
    btn: "Explore clothes",
    price: 43,
  },

  {
    id: 4,
    tagName: "CERAMIC FLORAL SHIRT",
    imgSRC: "../assets/img/more4.webp",
    btn: "Explore clothes",
    price: 51,
  },

  {
    id: 5,
    tagName: "PUNK FLAME SHIRT WHITE",
    imgSRC: "../assets/img/more5.webp",
    btn: "Explore clothes",
    price: 14,
  },
];

// const sliders = [
//   {
//     id: 1,
//     text: "NEW ARTICLE IS LIVE",
//     src: "/img/cfshop2.jpg",
//     title:
//       "Health Check: why do I get a headache when I haven’t had my coffee?",
//     content:
//       "Health Check: why do I get a headache when I haven’t had my coffee?",
//     sliderBtn: "read the full story",
//   },
//   {
//     id: 2,
//     text: "NEW ARTICLE IS LIVE",
//     src: "/img/cfshop1.jpg",
//     title:
//       "Health Check: why do I get a headache when I haven’t had my coffee?",
//     content:
//       "Health Check: why do I get a headache when I haven’t had my coffee?",
//     sliderBtn: "read the full story",
//   },
// ];

window.addEventListener("DOMContentLoaded", () => {
  displayMenu(productFilterMenu);
});

function displayMenu(menuItem) {
  let displayMenu = menuItem.map((product) => {
    return `
    <div class="product-item">
    <div class="product-img">
      <img src="${product.imgSRC}" alt="" />
      <a href="./productItem.html" class="product-img-add" id="add-cart" ">
      ${product.btn}
      </a>
    </div>
    <div class="product-desc">
      <a href = "#" class="product-name">${product.tagName}</a>
      <p class="product-price"> $ ${product.price} USD</p>
    </div>
  </div>
    `;
  });
  displayMenu = displayMenu.join("");
  menuElement.innerHTML = displayMenu;
}

// FiLTER ITEM OUR PRODUCT
btnOutProduct.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    // Filter Product Menu
    const type = event.target.dataset.id;
    const menuCategory = productFilterMenu.filter((menuItem) => {
      if (menuItem.category === type) {
        return menuItem;
      }
    });
    if (type == "all") {
      displayMenu(productFilterMenu);
    } else {
      document.querySelector(".slide").classList.add("hide-slider");
      displayMenu(menuCategory);
    }
    // Add active Button
    btnOutProduct.forEach((at) => at.classList.remove("active-btn"));
    this.classList.add("active-btn");
  });
});
