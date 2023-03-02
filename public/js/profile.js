const { doc } = require("prettier");

const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#project-desc').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

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