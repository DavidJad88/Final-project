const items = [
  // Canon Cameras
  {
    type: "camera",
    brand: "Canon",
    modelName: "EOS R5",
    onOffer: false,
    price: 3899,
    imageUrl: "../assets/images/item-pictures/EOS R5.jpg",
  },
  {
    type: "camera",
    brand: "Canon",
    modelName: "EOS R6",
    onOffer: false,
    price: 2499,
    imageUrl: "../assets/images/item-pictures/EOS R6.jpg",
  },
  {
    type: "camera",
    brand: "Canon",
    modelName: "EOS 5D Mark IV",
    onOffer: false,
    price: 2799,
    imageUrl: "../assets/images/item-pictures/EOS 5D Mark IV.webp",
  },
  {
    type: "camera",
    brand: "Canon",
    modelName: "EOS 90D",
    onOffer: false,
    price: 1199,
    imageUrl: "../assets/images/item-pictures/EOS 90D.jpg",
  },
  //   {
  //     type: "camera",
  //     brand: "Canon",
  //     modelName: "EOS M50 Mark II",
  //     onOffer: false,
  //     price: 699,
  //     imageUrl: "../assets/images/item-pictures/",
  //   },
  {
    type: "camera",
    brand: "Canon",
    modelName: "EOS Rebel T7",
    onOffer: true,
    price: 449,
    imageUrl: "../assets/images/item-pictures/EOS Rebel T7.jpg",
  },
  {
    type: "camera",
    brand: "Canon",
    modelName: "EOS R3",
    onOffer: false,
    price: 5999,
    imageUrl: "../assets/images/item-pictures/EOS R3.jpg",
  },
  {
    type: "camera",
    brand: "Canon",
    modelName: "EOS 1DX Mark III",
    onOffer: false,
    price: 6499,
    imageUrl: "../assets/images/item-pictures/EOS 1DX Mark III.webp",
  },
  //   {
  //     type: "camera",
  //     brand: "Canon",
  //     modelName: "EOS RP",
  //     onOffer: true,
  //     price: 999,
  //     imageUrl: "../assets/images/item-pictures/",
  //   },
  {
    type: "camera",
    brand: "Canon",
    modelName: "EOS R8",
    onOffer: false,
    price: 1599,
    imageUrl: "../assets/images/item-pictures/EOS R8.jpg",
  },

  // Nikon Cameras
  {
    type: "camera",
    brand: "Nikon",
    modelName: "Z9",
    onOffer: true,
    price: 5499,
    imageUrl: "../assets/images/item-pictures/Z9.jpg",
  },
  {
    type: "camera",
    brand: "Nikon",
    modelName: "Z7 II",
    onOffer: false,
    price: 2999,
    imageUrl: "../assets/images/item-pictures/Z7 II.webp",
  },
  {
    type: "camera",
    brand: "Nikon",
    modelName: "Z6 II",
    onOffer: true,
    price: 1999,
    imageUrl: "../assets/images/item-pictures/Z6 II.webp",
  },
  {
    type: "camera",
    brand: "Nikon",
    modelName: "Z50",
    onOffer: false,
    price: 859,
    imageUrl: "../assets/images/item-pictures/Z50.jpg",
  },
  {
    type: "camera",
    brand: "Nikon",
    modelName: "Z30",
    onOffer: true,
    price: 709,
    imageUrl: "../assets/images/item-pictures/Z30.jpg",
  },
  {
    type: "camera",
    brand: "Nikon",
    modelName: "D850",
    onOffer: false,
    price: 2996,
    imageUrl: "../assets/images/item-pictures/D850.webp",
  },
  {
    type: "camera",
    brand: "Nikon",
    modelName: "D780",
    onOffer: true,
    price: 2299,
    imageUrl: "../assets/images/item-pictures/D780.webp",
  },
  {
    type: "camera",
    brand: "Nikon",
    modelName: "D3500",
    onOffer: false,
    price: 449,
    imageUrl: "../assets/images/item-pictures/d3500.webp",
  },
  {
    type: "camera",
    brand: "Nikon",
    modelName: "D6",
    onOffer: true,
    price: 6499,
    imageUrl: "../assets/images/item-pictures/D6.webp",
  },
  {
    type: "camera",
    brand: "Nikon",
    modelName: "Zfc",
    onOffer: false,
    price: 959,
    imageUrl: "../assets/images/item-pictures/Zfc.jpg",
  },

  // Panasonic Cameras
  {
    type: "camera",
    brand: "Panasonic",
    modelName: "Lumix S5",
    onOffer: true,
    price: 1999,
    imageUrl: "../assets/images/item-pictures/Lumix S5.webp",
  },
  {
    type: "camera",
    brand: "Panasonic",
    modelName: "Lumix GH6",
    onOffer: false,
    price: 2199,
    imageUrl: "../assets/images/item-pictures/Lumix GH6.jpg",
  },
  //   {
  //     type: "camera",
  //     brand: "Panasonic",
  //     modelName: "Lumix G100",
  //     onOffer: true,
  //     price: 749,
  //     imageUrl: "../assets/images/item-pictures/",
  //   },
  {
    type: "camera",
    brand: "Panasonic",
    modelName: "Lumix G85",
    onOffer: false,
    price: 899,
    imageUrl: "../assets/images/item-pictures/Lumix G85.jpg",
  },
  //   {
  //     type: "camera",
  //     brand: "Panasonic",
  //     modelName: "Lumix GX9",
  //     onOffer: true,
  //     price: 999,
  //     imageUrl: "../assets/images/item-pictures/",
  //   },
  {
    type: "camera",
    brand: "Panasonic",
    modelName: "Lumix FZ1000 II",
    onOffer: false,
    price: 899,
    imageUrl: "../assets/images/item-pictures/Lumix FZ1000 II.jpg",
  },
  // {
  //     type: "camera",
  //     brand: "Panasonic",
  //     modelName: "Lumix ZS200",
  //     onOffer: true,
  //     price: 699,
  //     imageUrl: "../assets/images/item-pictures/",
  //   },
  {
    type: "camera",
    brand: "Panasonic",
    modelName: "Lumix G7",
    onOffer: false,
    price: 799,
    imageUrl: "../assets/images/item-pictures/Lumix G7.jpg",
  },
  //   {
  //     type: "camera",
  //     brand: "Panasonic",
  //     modelName: "Lumix S1H",
  //     onOffer: false,
  //     price: 3999,
  //     imageUrl: "../assets/images/item-pictures/",
  //   },
  {
    type: "camera",
    brand: "Panasonic",
    modelName: "Lumix S1",
    onOffer: false,
    price: 2499,
    imageUrl: "../assets/images/item-pictures/Lumix S1.jpg",
  },

  // Canon Lenses
  {
    type: "lens",
    brand: "Canon",
    modelName: "EF 50mm f/1.8 STM",
    onOffer: true,
    price: 125,

    imageUrl: "../assets/images/item-pictures/EF 50mm 1.8 STM.jpg",
  },
  {
    type: "lens",
    brand: "Canon",
    modelName: "EF 70-200mm f/2.8L IS III USM",
    onOffer: false,
    price: 2099,
    imageUrl: "../assets/images/item-pictures/EF 70-200mm f2.8L IS III USM.jpg",
  },
  {
    type: "lens",
    brand: "Canon",
    modelName: "RF 24-70mm f/2.8L IS USM",
    onOffer: true,
    price: 2299,
    imageUrl: "../assets/images/item-pictures/RF 24-70mm f2.8L IS USM.jpg",
  },
  {
    type: "lens",
    brand: "Canon",
    modelName: "EF 16-35mm f/4L IS USM",
    onOffer: false,
    price: 1099,
    imageUrl: "../assets/images/item-pictures/EF 16-35mm f4L IS USM.webp",
  },
  {
    type: "lens",
    brand: "Canon",
    modelName: "EF 85mm f/1.8 USM",
    onOffer: false,
    price: 419,
    imageUrl: "../assets/images/item-pictures/./EF 85mm f1.8 USM.jpg",
  },
  //   {
  //     type: "lens",
  //     brand: "Canon",
  //     modelName: "RF 15-35mm f/2.8L IS USM",
  //     onOffer: false,
  //     price: 2299,
  //     imageUrl: "../assets/images/item-pictures/",
  //   },
  //   {
  //     type: "lens",
  //     brand: "Canon",
  //     modelName: "EF-S 24mm f/2.8 STM",
  //     onOffer: true,
  //     price: 149,
  //     imageUrl: "../assets/images/item-pictures/",
  //   },
  {
    type: "lens",
    brand: "Canon",
    modelName: "RF 50mm f/1.2L USM",
    onOffer: false,
    price: 2299,
    imageUrl: "../assets/images/item-pictures/RF 50mm f1.2L USM.webp",
  },
  {
    type: "lens",
    brand: "Canon",
    modelName: "RF 85mm f/2 Macro IS STM",
    onOffer: false,
    price: 799,
    imageUrl: "../assets/images/item-pictures/RF 85mm f2 Macro IS STM.webp",
  },
  {
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
    type: "lens",
    brand: "Nikon",
    modelName: "AF-S DX NIKKOR 35mm f/1.8G",
    onOffer: true,
    price: 199,

    imageUrl: "../assets/images/item-pictures/AF-S DX NIKKOR 35mm ;1.8G.jpg",
  },
  {
    type: "lens",
    brand: "Nikon",
    modelName: "AF-S NIKKOR 50mm f/1.8G",
    onOffer: false,
    price: 216,
    imageUrl: "../assets/images/item-pictures/AF-S NIKKOR 50mm f1.8G.webp",
  },
  {
    type: "lens",
    brand: "Nikon",
    modelName: "Z 24-70mm f/4 S",
    onOffer: true,
    price: 996,
    imageUrl: "../assets/images/item-pictures/Z 24-70mm f4 S.jpg",
  },
  {
    type: "lens",
    brand: "Nikon",
    modelName: "AF-P DX NIKKOR 10-20mm f/4.5-5.6G VR",
    onOffer: false,
    price: 306,
    imageUrl:
      "../assets/images/item-pictures/AF-P DX NIKKOR 10-20mm f4.5-5.6G VR.jpg",
  },
  {
    type: "lens",
    brand: "Nikon",
    modelName: "Z 14-30mm f/4 S",
    onOffer: false,
    price: 1296,
    imageUrl: "../assets/images/item-pictures/Z 14-30mm f4 S.jpg",
  },
  {
    type: "lens",
    brand: "Nikon",
    modelName: "Z 85mm f/1.8 S",
    onOffer: false,
    price: 796,
    imageUrl: "../assets/images/item-pictures/Z 85mm f1.8 S.jpg",
  },
  {
    type: "lens",
    brand: "Nikon",
    modelName: "AF-S DX Micro-NIKKOR 40mm f/2.8G",
    onOffer: true,
    price: 276,
    imageUrl:
      "../assets/images/item-pictures/AF-S DX Micro-NIKKOR 40mm f2.8G.jpg",
  },
  {
    type: "lens",
    brand: "Nikon",
    modelName: "Z 70-200mm f/2.8 VR S",
    onOffer: false,
    price: 2596,
    imageUrl: "../assets/images/item-pictures/Z 70-200mm f2.8 VR S.jpg",
  },
  {
    type: "lens",
    brand: "Nikon",
    modelName: "AF-S NIKKOR 24-70mm f/2.8E ED VR",
    onOffer: false,
    price: 2396,
    imageUrl:
      "../assets/images/item-pictures/AF-S NIKKOR 24-70mm f2.8E ED VR.jpg",
  },
  {
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
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix S PRO 50mm f/1.4",
    onOffer: false,
    price: 2299,
    imageUrl: "../assets/images/item-pictures/Lumix S PRO 50mm f1.4.jpg",
  },
  {
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix G Vario 12-35mm f/2.8 II ASPH",
    onOffer: false,
    price: 899.9,
    imageUrl:
      "../assets/images/item-pictures/Lumix G Vario 12-35mm f2.8 II ASPH.jpg",
  },
  {
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix S 20-60mm f/3.5-5.6",
    onOffer: true,
    price: 599.9,
    imageUrl: "../assets/images/item-pictures/Lumix S 20-60mm f3.5-5.6.jpg",
  },
  {
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix G 42.5mm f/1.7 ASPH",
    onOffer: false,
    price: 347.9,
    imageUrl: "../assets/images/item-pictures/Lumix G 42.5mm f1.7 ASPH.jpg",
  },
  {
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix G Macro 30mm f/2.8 ASPH",
    onOffer: false,
    price: 399.9,
    imageUrl: "../assets/images/item-pictures/Lumix G Macro 30mm f2.8 ASPH.jpg",
  },
  {
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix G Vario 14-140mm f/3.5-5.6 ASPH",
    onOffer: false,
    price: 797.9,
    imageUrl:
      "../assets/images/item-pictures/Lumix G Vario 14-140mm f3.5-5.6 ASPH.jpg",
  },
  {
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix S 24-105mm f/4 Macro OIS",
    onOffer: true,
    price: 1299,
    imageUrl:
      "../assets/images/item-pictures/Lumix S 24-105mm f4 Macro OIS.jpg",
  },
  {
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix S PRO 70-200mm f/4 OIS",
    onOffer: false,
    price: 1699,
    imageUrl: "../assets/images/item-pictures/Lumix S PRO 70-200mm f4 OIS.jpg",
  },
  {
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix S PRO 16-35mm f/4",
    onOffer: true,
    price: 1499,
    imageUrl: "../assets/images/item-pictures/Lumix S PRO 16-35mm f4.jpg",
  },
  {
    type: "lens",
    brand: "Panasonic",
    modelName: "Lumix G 25mm f/1.7 ASPH",
    onOffer: false,
    price: 247.99,
    imageUrl: "../assets/images/item-pictures/Lumix G 25mm f1.7 ASPH.jpg",
  },

  //   // Camera Peripherals
  {
    type: "peripheral",
    brand: "SanDisk",
    modelName: "Extreme Pro 128GB SD Card",
    onOffer: false,
    price: 49.99,
    imageUrl: "../assets/images/item-pictures/Extreme Pro 128GB SD Card.jpg",
  },
  {
    type: "peripheral",
    brand: "Manfrotto",
    modelName: "Compact Action Tripod",
    onOffer: false,
    price: 69.99,
    imageUrl: "../assets/images/item-pictures/Compact Action Tripod.jpg",
  },
  {
    type: "peripheral",
    brand: "Godox",
    modelName: "TT600 Flash",
    onOffer: true,
    price: 65.99,
    imageUrl: "../assets/images/item-pictures/TT600 Flash.jpg",
  },
  {
    type: "peripheral",
    brand: "Peak Design",
    modelName: "Slide Camera Strap",
    onOffer: false,
    price: 69.95,
    imageUrl: "../assets/images/item-pictures/Slide Camera Strap.jpg",
  },
  {
    type: "peripheral",
    brand: "Rode",
    modelName: "VideoMic Pro+",
    onOffer: true,
    price: 299.9,
    imageUrl: "../assets/images/item-pictures/VideoMic Pro+.jpg",
  },
  {
    type: "peripheral",
    brand: "Lowepro",
    modelName: "ProTactic BP 450 AW II Backpack",
    onOffer: false,
    price: 249.9,
    imageUrl:
      "../assets/images/item-pictures/ProTactic BP 450 AW II Backpack.jpg",
  },
  {
    type: "peripheral",
    brand: "DJI",
    modelName: "Ronin-SC Gimbal",
    onOffer: false,
    price: 439.9,
    imageUrl: "../assets/images/item-pictures/Ronin-SC Gimbal.jpg",
  },
  {
    type: "peripheral",
    brand: "Neewer",
    modelName: "LED Ring Light Kit",
    onOffer: false,
    price: 119.9,
    imageUrl: "../assets/images/item-pictures/LED Ring Light Kit.jpg",
  },
  {
    type: "peripheral",
    brand: "Tiffen",
    modelName: "Variable ND Filter",
    onOffer: true,
    price: 129.9,
    imageUrl: "../assets/images/item-pictures/Variable ND Filter.webp",
  },
  {
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

// calling items grid

const itemGridContainer = document.querySelector(".items__grid-container");

const sortButtons = document.querySelectorAll(".sort-button");
const filterButtons = document.querySelectorAll(".filter-button");

//calling add to cart button and modal for cart
const cartIcon = document.querySelector(".navbar__cart");
const cartContainer = document.querySelector(".cart-container");
const cartContentContainer = document.querySelector(".cart__content-container");
// const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

// toggle active navbar link

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => link.classList.remove("navbar__link--active"));
    e.currentTarget.classList.add("navbar__link--active");
    console.log(e.currentTarget.classList);
  });
});

//render items in store window
document.addEventListener("DOMContentLoaded", () => renderItems(items));

function renderItems(itemsArray) {
  itemGridContainer.textContent = "";
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

    const dealOfferSticker = document.createElement("div");

    if (item.onOffer) {
      dealOfferSticker.classList.add("deal-offer-badge");
      dealOfferSticker.textContent = "Sale!";
      price.textContent = `Price: $${item.price * 0.75}, Was: $${item.price}`;
    }

    //appending
    itemImageContainer.append(itemImage);
    ItemDescriptionContainer.append(
      brand,
      model,
      price,
      addToCartButton,
      dealOfferSticker
    );
    itemContainer.append(itemImageContainer, ItemDescriptionContainer);

    itemGridContainer.append(itemContainer);
  });
}

const filterItems = (event) => {
  let filteredItems = [...items];

  const sortType = event.target.dataset.sort;

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
};

filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => filterItems(e));
});

const sortItems = (event) => {
  let sortedItems = [...items];

  const sortType = event.target.dataset.sort;

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

sortButtons.forEach((button) => {
  button.addEventListener("click", (e) => sortItems(e));
});

//CART

// let cartedItems = [];

// function renderCart(cartArray) {
//   cartContentContainer.textContent = "";
//   cartArray.forEach((cartItem) => {
//     const itemContainer = document.createElement("div");
//     itemContainer.classList.add("item-container");

//     const itemImageContainer = document.createElement("div");
//     itemImageContainer.classList.add("item__image-container");

//     const itemImage = document.createElement("img");
//     itemImage.src = cartItem.imageUrl;

//     const ItemDescriptionContainer = document.createElement("div");
//     ItemDescriptionContainer.classList.add("item__description-container");

//     const brand = document.createElement("p");
//     brand.textContent = `Brand: ${cartItem.brand}`;

//     const model = document.createElement("p");
//     model.textContent = `Model: ${cartItem.modelName}`;

//     const price = document.createElement("p");
//     price.textContent = `Price: $${cartItem.price}`;

//     const removeButton = document.createElement("button");
//     removeButton.classList.add("remove-from-cart-button");
//     removeButton.textContent = "Remove From Cart";

//     const dealOfferSticker = document.createElement("div");

//     if (cartItem.onOffer) {
//       dealOfferSticker.classList.add("deal-offer-badge");
//       dealOfferSticker.textContent = "Sale!";
//       price.textContent = `Price: $${cartItem.price * 0.75}, Was: $${
//         cartItem.price
//       }`;
//     }

//     //appending
//     itemImageContainer.append(itemImage);
//     ItemDescriptionContainer.append(
//       brand,
//       model,
//       price,
//       removeButton,
//       dealOfferSticker
//     );

//     itemContainer.append(itemImageContainer, ItemDescriptionContainer);

//     cartContentContainer.append(itemContainer);

//   });
// }

// //pushing selection to cartedItems

// addToCartButtons.addEventListener("click", (e) =>{
//   addToCartButtons.forEach((button) =>{
//     button.closest("itemcontainer")
//   })
// })

//displaying cart

cartIcon.addEventListener("click", () => {
  cartContainer.classList.toggle("cart-container--active");
  renderCart(cartedItems);
});
