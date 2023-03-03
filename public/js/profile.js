document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);


function addToCart() {
  const productName = document.querySelector('.card-title').textContent.trim();
  const productImg = document.querySelector('.card-img-top').getAttribute('src').trim();
  const productDesc = document.querySelector('.card-text').textContent.trim();
  const productPrice = document.querySelector('.card-price').textContent.trim();


  const product = {
    name: productName,
    img: productImg,
    description: productDesc,
    price: productPrice,
  };

  const cart = [];

  function addProductToCart(product) {
    cart.push(product);
    console.log(cart);
  }

  const addToCartBtn = document.querySelector('.btn-primary-add-to-cart');
  addToCartBtn.addEventListener('click', function() {
    event.preventDefault();
    addProductToCart(product);
  });

  return product;

}

addToCart();