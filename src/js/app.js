const items = [
  // Canon Cameras
  {
    id: 1,
    type: "camera",
    brand: "Canon",
    modelName: "EOS R5",
    onOffer: false,
    price: 3899,
    imageUrl: "../assets/images/item-pictures/EOS R5.jpg",
  },
  {
    id: 2,
    type: "camera",
    brand: "Canon",
    modelName: "EOS R6",
    onOffer: false,
    price: 2499,
    imageUrl: "../assets/images/item-pictures/EOS R6.jpg",
  },
  {
    id: 3,
    type: "camera",
    brand: "Canon",
    modelName: "EOS 5D Mark IV",
    onOffer: false,
    price: 2799,
    imageUrl: "../assets/images/item-pictures/EOS 5D Mark IV.webp",
  },
  {
    id: 4,
    type: "camera",
    brand: "Canon",
    modelName: "EOS 90D",
    onOffer: false,
    price: 1199,
    imageUrl: "../assets/images/item-pictures/EOS 90D.jpg",
  },

  {
    id: 5,
    type: "camera",
    brand: "Canon",
    modelName: "EOS Rebel T7",
    onOffer: true,
    price: 449,
    imageUrl: "../assets/images/item-pictures/EOS Rebel T7.jpg",
  },
  {
    id: 6,
    type: "camera",
    brand: "Canon",
    modelName: "EOS R3",
    onOffer: false,
    price: 5999,
    imageUrl: "../assets/images/item-pictures/EOS R3.jpg",
  },
  {
    id: 7,
    type: "camera",
    brand: "Canon",
    modelName: "EOS 1DX Mark III",
    onOffer: false,
    price: 6499,
    imageUrl: "../assets/images/item-pictures/EOS 1DX Mark III.webp",
  },

  {
    id: 8,
    type: "camera",
    brand: "Canon",
    modelName: "EOS R8",
    onOffer: false,
    price: 1599,
    imageUrl: "../assets/images/item-pictures/EOS R8.jpg",
  },

  // Nikon Cameras
  {
    id: 9,
    type: "camera",
    brand: "Nikon",
    modelName: "Z9",
    onOffer: true,
    price: 5499,
    imageUrl: "../assets/images/item-pictures/Z9.jpg",
  },
  {
    id: 10,
    type: "camera",
    brand: "Nikon",
    modelName: "Z7 II",
    onOffer: false,
    price: 2999,
    imageUrl: "../assets/images/item-pictures/Z7 II.webp",
  },
  {
    id: 11,
    type: "camera",
    brand: "Nikon",
    modelName: "Z6 II",
    onOffer: true,
    price: 1999,
    imageUrl: "../assets/images/item-pictures/Z6 II.webp",
  },
  {
    id: 12,
    type: "camera",
    brand: "Nikon",
    modelName: "Z50",
    onOffer: false,
    price: 859,
    imageUrl: "../assets/images/item-pictures/Z50.jpg",
  },
  {
    id: 13,
    type: "camera",
    brand: "Nikon",
    modelName: "Z30",
    onOffer: true,
    price: 709,
    imageUrl: "../assets/images/item-pictures/Z30.jpg",
  },
  {
    id: 14,
    type: "camera",
    brand: "Nikon",
    modelName: "D850",
    onOffer: false,
    price: 2996,
    imageUrl: "../assets/images/item-pictures/D850.webp",
  },
  {
    id: 15,
    type: "camera",
    brand: "Nikon",
    modelName: "D780",
    onOffer: true,
    price: 2299,
    imageUrl: "../assets/images/item-pictures/D780.webp",
  },
  {
    id: 16,
    type: "camera",
    brand: "Nikon",
    modelName: "D3500",
    onOffer: false,
    price: 449,
    imageUrl: "../assets/images/item-pictures/d3500.webp",
  },
  {
    id: 17,
    type: "camera",
    brand: "Nikon",
    modelName: "D6",
    onOffer: true,
    price: 6499,
    imageUrl: "../assets/images/item-pictures/D6.webp",
  },
  {
    id: 18,
    type: "camera",
    brand: "Nikon",
    modelName: "Zfc",
    onOffer: false,
    price: 959,
    imageUrl: "../assets/images/item-pictures/Zfc.jpg",
  },

  // Panasonic Cameras
  {
    id: 19,
    type: "camera",
    brand: "Panasonic",
    modelName: "Lumix S5",
    onOffer: true,
    price: 1999,
    imageUrl: "../assets/images/item-pictures/Lumix S5.webp",
  },
  {
    id: 20,
    type: "camera",
    brand: "Panasonic",
    modelName: "Lumix GH6",
    onOffer: false,
    price: 2199,
    imageUrl: "../assets/images/item-pictures/Lumix GH6.jpg",
  },

  {
    id: 21,
    type: "camera",
    brand: "Panasonic",
    modelName: "Lumix G85",
    onOffer: false,
    price: 899,
    imageUrl: "../assets/images/item-pictures/Lumix G85.jpg",
  },

  {
    id: 22,
    type: "camera",
    brand: "Panasonic",
    modelName: "Lumix FZ1000 II",
    onOffer: false,
    price: 899,
    imageUrl: "../assets/images/item-pictures/Lumix FZ1000 II.jpg",
  },

  {
    id: 23,
    type: "camera",
    brand: "Panasonic",
    modelName: "Lumix G7",
    onOffer: false,
    price: 799,
    imageUrl: "../assets/images/item-pictures/Lumix G7.jpg",
  },
  {
    id: 24,
    type: "camera",
    brand: "Panasonic",
    modelName: "Lumix S1",
    onOffer: false,
    price: 2499,
    imageUrl: "../assets/images/item-pictures/Lumix S1.jpg",
  },

  // Canon Lenses
  {
    id: 25,
    type: "lens",
    brand: "Canon",
    modelName: "EF 50mm f/1.8 STM",
    onOffer: true,
    price: 125,
    imageUrl: "../assets/images/item-pictures/EF 50mm 1.8 STM.jpg",
  },
  {
    id: 26,
    type: "lens",
    brand: "Canon",
    modelName: "EF 70-200mm f/2.8L IS III USM",
    onOffer: false,
    price: 2099,
    imageUrl: "../assets/images/item-pictures/EF 70-200mm f2.8L IS III USM.jpg",
  },
  {
    id: 27,
    type: "lens",
    brand: "Canon",
    modelName: "RF 24-70mm f/2.8L IS USM",
    onOffer: true,
    price: 2299,
    imageUrl: "../assets/images/item-pictures/RF 24-70mm f2.8L IS USM.jpg",
  },
  {
    id: 28,
    type: "lens",
    brand: "Canon",
    modelName: "EF 16-35mm f/4L IS USM",
    onOffer: false,
    price: 1099,
    imageUrl: "../assets/images/item-pictures/EF 16-35mm f4L IS USM.webp",
  },
  {
    id: 29,
    type: "lens",
    brand: "Canon",
    modelName: "EF 85mm f/1.8 USM",
    onOffer: false,
    price: 419,
    imageUrl: "../assets/images/item-pictures/./EF 85mm f1.8 USM.jpg",
  },
  {
    id: 30,
    type: "lens",
    brand: "Canon",
    modelName: "RF 50mm f/1.2L USM",
    onOffer: false,
    price: 2299,
    imageUrl: "../assets/images/item-pictures/RF 50mm f1.2L USM.webp",
  },
  {
    id: 31,
    type: "lens",
    brand: "Canon",
    modelName: "RF 85mm f/2 Macro IS STM",
    onOffer: false,
    price: 799,
    imageUrl: "../assets/images/item-pictures/RF 85mm f2 Macro IS STM.webp",
  },
  {
    id: 32,
    type: "lens",
    brand: "Canon",
    modelName: "RF 100-500mm f/4.5-7.1L IS USM",
    onOffer: false,
    price: 2799,
    imageUrl:
      "../assets/images/item-pictures/RF 100-500mm f4.5-7.1L IS USM.jpg",
  },

  // Nikon Lenses
  {
    id: 33,
    type: "lens",
    brand: "Nikon",
    modelName: "AF-S DX NIKKOR 35mm f/1.8G",
    onOffer: true,
    price: 199,
    imageUrl: "../assets/images/item-pictures/AF-S DX NIKKOR 35mm ;1.8G.jpg",
  },
  {
    id: 34,
    type: "lens",
    brand: "Nikon",
    modelName: "AF-S NIKKOR 50mm f/1.8G",
    onOffer: false,
    price: 216,
    imageUrl: "../assets/images/item-pictures/AF-S NIKKOR 50mm f1.8G.webp",
  },
  {
    id: 35,
    type: "lens",
    brand: "Nikon",
    modelName: "Z 24-70mm f/4 S",
    onOffer: true,
    price: 996,
    imageUrl: "../assets/images/item-pictures/Z 24-70mm f4 S.jpg",
  },
  {
    id: 36,
    type: "lens",
    brand: "Nikon",
    modelName: "AF-P DX NIKKOR 10-20mm f/4.5-5.6G VR",
    onOffer: false,
    price: 306,
    imageUrl:
      "../assets/images/item-pictures/AF-P DX NIKKOR 10-20mm f4.5-5.6G VR.jpg",
  },
  {
    id: 37,
    type: "lens",
    brand: "Nikon",
    modelName: "Z 14-30mm f/4 S",
    onOffer: false,
    price: 1296,
    imageUrl: "../assets/images/item-pictures/Z 14-30mm f4 S.jpg",
  },
  {
    id: 38,
    type: "lens",
    brand: "Nikon",
    modelName: "Z 85mm f/1.8 S",
    onOffer: false,
    price: 796,
    imageUrl: "../assets/images/item-pictures/Z 85mm f1.8 S.jpg",
  },
  {
    id: 39,
    type: "lens",
    brand: "Nikon",
    modelName: "AF-S DX Micro-NIKKOR 40mm f/2.8G",
    onOffer: true,
    price: 276,
    imageUrl:
      "../assets/images/item-pictures/AF-S DX Micro-NIKKOR 40mm f2.8G.jpg",
  },
  {
    id: 40,
    type: "lens",
    brand: "Nikon",
    modelName: "Z 70-200mm f/2.8 VR S",
    onOffer: false,
    price: 2596,
    imageUrl: "../assets/images/item-pictures/Z 70-200mm f2.8 VR S.jpg",
  },
  {
    id: 41,
    type: "lens",
    brand: "Nikon",
    modelName: "AF-S NIKKOR 24-70mm f/2.8E ED VR",
    onOffer: false,
    price: 2396,
    imageUrl:
      "../assets/images/item-pictures/AF-S NIKKOR 24-70mm f2.8E ED VR.jpg",
  },
  {
    id: 42,
    type: "lens",
    brand: "Nikon",
    modelName: "AF-S DX NIKKOR 18-140mm f/3.5-5.6G ED VR",
    onOffer: false,
    price: 496,
    imageUrl:
      "../assets/images/item-pictures/AF-S DX NIKKOR 18-140mm f3.5-5.6G ED VR.webp",
  },

  //  Panasonic Lenses
  {
    id: 43,
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix S PRO 50mm f/1.4",
    onOffer: false,
    price: 2299,
    imageUrl: "../assets/images/item-pictures/Lumix S PRO 50mm f1.4.jpg",
  },
  {
    id: 44,
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix G Vario 12-35mm f/2.8 II ASPH",
    onOffer: false,
    price: 899.9,
    imageUrl:
      "../assets/images/item-pictures/Lumix G Vario 12-35mm f2.8 II ASPH.jpg",
  },
  {
    id: 45,
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix S 20-60mm f/3.5-5.6",
    onOffer: true,
    price: 599,
    imageUrl: "../assets/images/item-pictures/Lumix S 20-60mm f3.5-5.6.jpg",
  },
  {
    id: 46,
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix G 42.5mm f/1.7 ASPH",
    onOffer: false,
    price: 347.9,
    imageUrl: "../assets/images/item-pictures/Lumix G 42.5mm f1.7 ASPH.jpg",
  },
  {
    id: 47,
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix G Macro 30mm f/2.8 ASPH",
    onOffer: false,
    price: 399.9,
    imageUrl: "../assets/images/item-pictures/Lumix G Macro 30mm f2.8 ASPH.jpg",
  },
  {
    id: 48,
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix G Vario 14-140mm f/3.5-5.6 ASPH",
    onOffer: false,
    price: 797.9,
    imageUrl:
      "../assets/images/item-pictures/Lumix G Vario 14-140mm f3.5-5.6 ASPH.jpg",
  },
  {
    id: 49,
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix S 24-105mm f/4 Macro OIS",
    onOffer: true,
    price: 1299,
    imageUrl:
      "../assets/images/item-pictures/Lumix S 24-105mm f4 Macro OIS.jpg",
  },
  {
    id: 50,
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix S PRO 70-200mm f/4 OIS",
    onOffer: false,
    price: 1699,
    imageUrl: "../assets/images/item-pictures/Lumix S PRO 70-200mm f4 OIS.jpg",
  },
  {
    id: 51,
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix S PRO 16-35mm f/4",
    onOffer: true,
    price: 1499,
    imageUrl: "../assets/images/item-pictures/Lumix S PRO 16-35mm f4.jpg",
  },
  {
    id: 52,
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix G 25mm f/1.7 ASPH",
    onOffer: false,
    price: 247.99,
    imageUrl: "../assets/images/item-pictures/Lumix G 25mm f1.7 ASPH.jpg",
  },

  //   // Camera Peripherals
  {
    id: 53,
    type: "peripheral",
    brand: "SanDisk",
    modelName: "Extreme Pro 128GB SD Card",
    onOffer: false,
    price: 49.99,
    imageUrl: "../assets/images/item-pictures/Extreme Pro 128GB SD Card.jpg",
  },
  {
    id: 54,
    type: "peripheral",
    brand: "Manfrotto",
    modelName: "Compact Action Tripod",
    onOffer: false,
    price: 69.99,
    imageUrl: "../assets/images/item-pictures/Compact Action Tripod.jpg",
  },
  {
    id: 55,
    type: "peripheral",
    brand: "Godox",
    modelName: "TT600 Flash",
    onOffer: true,
    price: 69,
    imageUrl: "../assets/images/item-pictures/TT600 Flash.jpg",
  },
  {
    id: 56,
    type: "peripheral",
    brand: "Peak Design",
    modelName: "Slide Camera Strap",
    onOffer: false,
    price: 69.95,
    imageUrl: "../assets/images/item-pictures/Slide Camera Strap.jpg",
  },
  {
    id: 57,
    type: "peripheral",
    brand: "Rode",
    modelName: "VideoMic Pro+",
    onOffer: true,
    price: 299,
    imageUrl: "../assets/images/item-pictures/VideoMic Pro+.jpg",
  },
  {
    id: 58,
    type: "peripheral",
    brand: "Lowepro",
    modelName: "ProTactic BP 450 AW II Backpack",
    onOffer: false,
    price: 249.9,
    imageUrl:
      "../assets/images/item-pictures/ProTactic BP 450 AW II Backpack.jpg",
  },
  {
    id: 59,
    type: "peripheral",
    brand: "DJI",
    modelName: "Ronin-SC Gimbal",
    onOffer: false,
    price: 439.9,
    imageUrl: "../assets/images/item-pictures/Ronin-SC Gimbal.jpg",
  },
  {
    id: 60,
    type: "peripheral",
    brand: "Neewer",
    modelName: "LED Ring Light Kit",
    onOffer: false,
    price: 119.9,
    imageUrl: "../assets/images/item-pictures/LED Ring Light Kit.jpg",
  },
  {
    id: 61,
    type: "peripheral",
    brand: "Tiffen",
    modelName: "Variable ND Filter",
    onOffer: true,
    price: 129,
    imageUrl: "../assets/images/item-pictures/Variable ND Filter.webp",
  },
  {
    id: 62,
    type: "peripheral",
    brand: "Sony",
    modelName: "Tough 64GB SD Card",
    onOffer: false,
    price: 129.9,
    imageUrl: "../assets/images/item-pictures/Tough 64GB SD Card.webp",
  },
];

//calling navbar items
const navbarLinksContainer = document.querySelector(".navbar__links");
const links = document.querySelectorAll(".navbar__link");
const cartIndicator = document.querySelector(".navbar__cart-badge");

// calling items grid

const itemGridContainer = document.querySelector(".items__grid-container");

const sortButtons = document.querySelectorAll(".sort-button");
const filterButtons = document.querySelectorAll(".filter-button");

//calling add to cart button and modal for cart
const cartIcon = document.querySelector(".navbar__cart");
const cartContainer = document.querySelector(".cart-container");
const cartContentContainer = document.querySelector(".cart__content-container");
const clearCartButton = document.querySelector(".cart__clear-button");
const cartEmpty = document.querySelector(".cart__empty");
const cartTotal = document.querySelector(".cart__total");

//calling checkout cart container
const checkoutCartContainer = document.querySelector(
  ".checkout__cart-container"
);
//const checkoutTotal = document.querySelector(".checkout__total");

//rendering on page load
document.addEventListener("DOMContentLoaded", () => renderItems(items));
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  if (path.includes("order.html")) {
    const currentCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    renderCheckout(currentCartItems);
  }
});
document.addEventListener("DOMContentLoaded", () => renderCartIndicator());

// toggle active navbar link
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => link.classList.remove("navbar__link--active"));
    e.currentTarget.classList.add("navbar__link--active");
  });
});

//Function for rendering itens on DOMcontentloaded
function renderItems(itemsArray) {
  itemGridContainer.textContent = "";
  const currentCartItems = JSON.parse(localStorage.getItem("cartItems")) || []; //Fixed here

  itemsArray.forEach((item) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");

    const itemImageContainer = document.createElement("div");
    itemImageContainer.classList.add("item__image-container");

    const itemImage = document.createElement("img");
    itemImage.src = item.imageUrl;

    const ItemDescriptionContainer = document.createElement("div");
    ItemDescriptionContainer.classList.add("item__description-container");

    const brand = document.createElement("p");
    brand.textContent = `Brand: ${item.brand}`;

    const model = document.createElement("p");
    model.textContent = `Model: ${item.modelName}`;

    const price = document.createElement("p");
    price.textContent = `Price: $${item.price}`;

    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("add-to-cart-button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.setAttribute("data-id", item.id);

    addToCartButton.addEventListener("click", () => {
      addToCart(item);
      renderCartIndicator();
      renderCart(currentCartItems); //Here
      addToCartButton.textContent = "Added to cart";
      addToCartButton.style.backgroundColor = "lightgray";
      addToCartButton.style.color = "black";
    });

    const dealOfferSticker = document.createElement("div");

    if (item.onOffer) {
      dealOfferSticker.classList.add("deal-offer-badge");
      dealOfferSticker.textContent = "Sale!";
      price.textContent = `Price: $${item.price * 0.75}, Was: $${item.price}`;
    }

    const isInCart = currentCartItems.some(
      (cartItem) => cartItem.id === item.id
    );
    if (isInCart) {
      addToCartButton.textContent = "Added to cart";
      addToCartButton.style.backgroundColor = "lightgray";
      addToCartButton.style.color = "black";
    }

    //appending
    itemGridContainer.append(itemContainer);
    itemContainer.append(itemImageContainer, ItemDescriptionContainer);

    itemImageContainer.append(itemImage);

    ItemDescriptionContainer.append(
      brand,
      model,
      price,
      addToCartButton,
      dealOfferSticker
    );
  });
}

//container for filtered items to use on sort function, replaced in filterItems function
let lastFilteredItems = [...items];

//filter items
const filterItems = (event) => {
  let filteredItems = [...items];

  const sortType = event.target.dataset.sort;
  filterButtons.forEach((button) =>
    button.classList.remove("filter-button--active")
  );

  if (event.target.dataset.sort === "all") {
    event.target.classList.add("filter-button");
    sortButtons.forEach((button) =>
      button.classList.remove("sort-button--active")
    );
  } else {
    event.target.classList.add("filter-button--active");
    sortButtons.forEach((button) =>
      button.classList.remove("sort-button--active")
    );
  }

  if (sortType === "cameras") {
    filteredItems = filteredItems.filter((items) => items.type === "camera");
  } else if (sortType === "lenses") {
    filteredItems = filteredItems.filter((items) => items.type === "lens");
  } else if (sortType === "peripherals") {
    filteredItems = filteredItems.filter(
      (items) => items.type === "peripheral"
    );
  } else if (sortType === "canon") {
    filteredItems = filteredItems.filter((items) => items.brand === "Canon");
  } else if (sortType === "nikon") {
    filteredItems = filteredItems.filter((items) => items.brand === "Nikon");
  } else if (sortType === "panasonic") {
    filteredItems = filteredItems.filter(
      (items) => items.brand === "Panasonic"
    );
  } else if (sortType === "all") {
    filteredItems = [...items];
  }
  renderItems(filteredItems);

  lastFilteredItems = filteredItems;
};

//Event listener for filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => filterItems(e));
});

//Sort function based on applied filters
const sortItems = (event) => {
  let sortedItems = [...lastFilteredItems];

  const sortType = event.target.dataset.sort;

  sortButtons.forEach((button) =>
    button.classList.remove("sort-button--active")
  );

  if (event.target.dataset.sort === "all") {
    event.target.classList.add("sort-button");
    filterButtons.forEach((button) =>
      button.classList.remove("filter-button--active")
    );
  } else {
    event.target.classList.add("sort-button--active");
  }

  if (sortType === "price-high") {
    sortedItems = sortedItems.sort((a, b) => b.price - a.price);
  } else if (sortType === "price-low") {
    sortedItems = sortedItems.sort((a, b) => a.price - b.price);
  } else if (sortType === "deal-offer") {
    sortedItems = sortedItems.filter((items) => items.onOffer);
  } else if (sortType === "all") {
    sortedItems = [...items];
  }
  renderItems(sortedItems);
};

//Event listener for sort buttons

sortButtons.forEach((button) => {
  button.addEventListener("click", (e) => sortItems(e));
});

//CART
//declaring variables
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

//function to render cart items
const renderCart = (items) => {
  cartContentContainer.innerHTML = "";
  items.forEach((item) => {
    //creating
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("content-item-container");

    const itemImageContainer = document.createElement("div");
    itemImageContainer.classList.add("content-item__image-container");

    const itemDescriptionContainer = document.createElement("div");
    itemDescriptionContainer.classList.add(
      "content-item__description-container"
    );
    const itemImage = document.createElement("img");
    itemImage.src = item.imageUrl;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = `${item.modelName}, $${item.price}`;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("content-item__delete");
    deleteButton.textContent = "Remove";

    if (item.onOffer) {
      itemDescription.textContent = `${item.modelName}, $${item.price * 0.75}`;
    }

    //appending
    cartContentContainer.append(itemContainer);
    itemContainer.append(
      itemImageContainer,
      itemDescriptionContainer,
      deleteButton
    );

    itemImageContainer.append(itemImage);
    itemDescriptionContainer.append(itemDescription);

    deleteButton.addEventListener("click", () => removeCartItem(item.id));
  });
  renderCartTotal(items);

  if (cartItems.length >= 1) {
    cartEmpty.style.display = "none";
    renderCartIndicator();
  }
};

//function to render the cart at checkout
const renderCheckout = (items) => {
  checkoutCartContainer.innerHTML = "";

  const itemsContainer = document.createElement("div");
  itemsContainer.classList.add("checkout-cart__items-container");

  const reviewMessage = document.createElement("div");
  reviewMessage.textContent = "Please review your cart";

  const checkoutTotal = document.createElement("div");
  checkoutTotal.classList.add("checkout__total");
  checkoutTotal.textContent = "Total:";

  checkoutCartContainer.append(reviewMessage, checkoutTotal);

  items.forEach((item) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("content-item-container");

    const itemImageContainer = document.createElement("div");
    itemImageContainer.classList.add("content-item__image-container");

    const itemImage = document.createElement("img");
    itemImage.src = item.imageUrl;

    const itemDescriptionContainer = document.createElement("div");
    itemDescriptionContainer.classList.add(
      "content-item__description-container"
    );

    const itemDescription = document.createElement("p");
    itemDescription.textContent = `${item.modelName}, $${item.price}`;

    if (item.onOffer) {
      itemDescription.textContent = `${item.modelName}, $${item.price * 0.75}`;
    }

    // Appending
    itemImageContainer.appendChild(itemImage);
    itemDescriptionContainer.appendChild(itemDescription);
    itemContainer.append(itemImageContainer, itemDescriptionContainer);
    itemsContainer.appendChild(itemContainer);
  });

  checkoutCartContainer.appendChild(itemsContainer);
  const currentCartItems = JSON.parse(localStorage.getItem("cartItems"));
  renderCheckoutTotal(currentCartItems);
};

//function to add item to cart on add to cart button click
const addToCart = (item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  if (!existingItem) {
    cartItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCartTotal(cartItems);
  }
};

//function to update cart after each modification so that it renders
const updateCart = (itemsArray) => {
  localStorage.setItem("cartItems", JSON.stringify(itemsArray));
  renderCartIndicator();
};

//Rendering cart on cart icon click
cartIcon.addEventListener("click", () => {
  cartContainer.classList.toggle("cart-container--active");
  if (cartContainer.classList.contains("cart-container--active")) {
    const currentCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    renderCart(currentCartItems);
  }
});

const removeCartItem = (id) => {
  const updatedItems = cartItems.filter((item) => item.id !== id);
  cartItems.length = 0;
  cartItems.push(...updatedItems);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  const itemButton = document.querySelector(
    `.add-to-cart-button[data-id="${id}"]`
  );
  if (itemButton) {
    itemButton.textContent = "Add to Cart";
    itemButton.style.backgroundColor = "";
    itemButton.style.color = "";
  }
  renderCart(updatedItems);
  renderCartIndicator();
  renderCartTotal(updatedItems);
  renderCheckout(updatedItems);
  renderCheckoutTotal(updatedItems);
};

//Event listener to clear cart button
clearCartButton.addEventListener("click", () => {
  const confirmClearCart = window.confirm(
    "Are you sure you want to clear the cart? This action cannot be undone."
  );

  if (confirmClearCart) {
    cartItems.length = 0;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    renderCart(cartItems);
    renderCartIndicator();
    renderItems(items);
    sortButtons.forEach((button) =>
      button.classList.remove("sort-button--active")
    );
    filterButtons.forEach((button) =>
      button.classList.remove("filter-button--active")
    );
  }
});

function renderCartIndicator() {
  const cartedItems = JSON.parse(localStorage.getItem("cartItems"));

  if (cartedItems) {
    if (cartedItems.length >= 1) {
      cartIndicator.style.display = "block";
      cartIndicator.textContent = cartedItems.length;
    } else if (cartedItems.length === 0) {
      cartIndicator.style.display = "none";
      cartEmpty.style.display = "block";
    }
  }
}

function calculateCartTotal(items) {
  return items.reduce((total, item) => {
    const itemPrice = item.onOffer ? item.price * 0.75 : item.price;
    return total + itemPrice;
  }, 0);
}

const renderCartTotal = (items) => {
  const total = calculateCartTotal(items);

  cartTotal.textContent = `Total: $${total}`;
};

function renderCheckoutTotal(items) {
  const total = calculateCartTotal(items);
  const totalElement = document.querySelector(".checkout__total");

  if (totalElement) {
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
  }
}
// renderCartIndicator();
