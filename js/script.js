// Array of product data
const products = [
  {
    imgSrc: "https://i.ibb.co/Nsn88qm/img1.jpg",
    altText: "Camera 3pixels resolution",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, labore quaerat magni ad dolores libero culpa ipsa fugit voluptates ipsam!",
    price: "$350",
    thumbnails: [
      "https://i.ibb.co/Nsn88qm/img1.jpg",
      "https://porto-demo1.myshopify.com/cdn/shop/products/PortoExtendedCamera1_150x150_crop_center.jpg?v=1597400542",
      "https://porto-demo1.myshopify.com/cdn/shop/products/PortoExtendedCamera2_150x150_crop_center.jpg?v=1597400542"
    ]
  },
  {
    imgSrc: "https://i.ibb.co/68H9LJb/img2.jpg",
    altText: "Product 2",
    description: "Another product description goes here.",
    price: "$245",
    thumbnails: [
      "https://i.ibb.co/68H9LJb/img2.jpg",
      "https://porto-demo1.myshopify.com/cdn/shop/products/PortoExtendedCamera2_150x150_crop_center.jpg?v=1597400542"
    ]
  },
  {
    imgSrc: "https://i.ibb.co/xD92MfK/img3.jpg",
    altText: "Product 3",
    description: "This is the third product description.",
    price: "$195",
    thumbnails: [
      "https://i.ibb.co/xD92MfK/img3.jpg"
    ]
  }
];

// Reference to the container
const productContainer = document.createElement('div');
productContainer.className = 'product';

// Dynamically create product elements
products.forEach((product, index) => {
  const productList = document.createElement('div');
  productList.className = 'product__list';

  const productImg = document.createElement('img');
  productImg.className = 'product__img';
  productImg.src = product.imgSrc;
  productImg.alt = product.altText;

  const viewBtn = document.createElement('span');
  viewBtn.className = 'product__viewBtn';
  viewBtn.textContent = 'Quick View';

  productList.appendChild(productImg);
  productList.appendChild(viewBtn);
  productContainer.appendChild(productList);

  // Add event listener for the Quick View button
  viewBtn.addEventListener('click', () => {
    openModal(product, index);
  });
});

// Append the productContainer to the main container in the HTML
document.getElementById('productContainer').appendChild(productContainer);

// Function to open the modal and populate it with the product details
function openModal(product, index) {
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal__content');
  const modalImg = modalContent.querySelector('.image-holder img');
  const title = modalContent.querySelector('.detail__title');
  const description = modalContent.querySelector('.detail__description');
  const price = modalContent.querySelector('.detail__price');
  const thumbnailsWrapper = modalContent.querySelector('.photo-gallery__wrapper');

  // Update modal content
  modalImg.src = product.imgSrc;
  title.textContent = product.altText;
  description.textContent = product.description;
  price.textContent = product.price;

  // Clear existing thumbnails
  thumbnailsWrapper.innerHTML = '';

  // Populate thumbnails
  product.thumbnails.forEach(thumbnail => {
    const thumbnailDiv = document.createElement('div');
    thumbnailDiv.className = 'image-thumbnail';
    const thumbnailImg = document.createElement('img');
    thumbnailImg.src = thumbnail;
    thumbnailImg.alt = product.altText;
    thumbnailImg.addEventListener('click', () => changeImage(thumbnailImg));
    thumbnailDiv.appendChild(thumbnailImg);
    thumbnailsWrapper.appendChild(thumbnailDiv);
  });

  // Show the modal
  modal.classList.add('modal--bg');
  modalContent.classList.add('modal__content--show');
}

// Close modal on close button click
document.querySelector('.modal__close').addEventListener('click', () => {
  document.querySelector('.modal').classList.remove('modal--bg');
  document.querySelector('.modal__content').classList.remove('modal__content--show');
});

// Function to change the main image in the modal
function changeImage(imgElement) {
  const modalImg = document.querySelector('.image-holder img');
  modalImg.src = imgElement.src.replace(/150x150/g, '800x800'); // Replace thumbnail size with full size
  document.querySelector('.image-thumbnail img.active')?.classList.remove('active');
  imgElement.classList.add('active');
}

// Function to increase the quantity
  function increaseQuantity() {
    var qtyInput = document.getElementById('qty');
    var qty = parseInt(qtyInput.value);
    if (!isNaN(qty)) {
      qtyInput.value = qty + 1;
    }
  }

  // Function to decrease the quantity
  function decreaseQuantity() {
    var qtyInput = document.getElementById('qty');
    var qty = parseInt(qtyInput.value);
    if (!isNaN(qty) && qty > 1) {
      qtyInput.value = qty - 1;
    }
  }
