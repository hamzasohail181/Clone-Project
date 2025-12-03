// Dynamic Products
const products = [
  { id: 1, name: 'Wireless Headphones', price: 59.99, img: 'images/prod1.jpg' },
  { id: 2, name: 'Smartwatch', price: 129.99, img: 'images/prod2.jpg' },
  { id: 3, name: 'Gaming Mouse', price: 39.99, img: 'images/prod3.jpg' },
  { id: 4, name: 'Mechanical Keyboard', price: 89.99, img: 'images/prod4.jpg' },
  { id: 5, name: 'Drone', price: 199.99, img: 'images/prod5.jpg' },
  { id: 6, name: 'Camera', price: 499.99, img: 'images/prod6.jpg' },
];

const productsContainer = document.getElementById('products');
const cartCount = document.getElementById('cartCount');
const cartItemsList = document.getElementById('cartItems');
const cartTotalEl = document.getElementById('cartTotal');

let cart = [];

// Render Products
products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price.toFixed(2)}</p>
    <button class="btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productsContainer.appendChild(card);
});

// Add to Cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  cartCount.textContent = cart.length;
  renderCart();
}

// Render Cart Modal
function renderCart() {
  cartItemsList.innerHTML = '';
  let total = 0;
  cart.forEach((item, idx) => {
    total += item.price;
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
  });
  cartTotalEl.textContent = `Total: $${total.toFixed(2)}`;
}

// Modal
const cartModal = document.getElementById('cartModal');
const cartBtn = document.getElementById('cartBtn');
const closeCart = document.getElementById('closeCart');

cartBtn.addEventListener('click', () => cartModal.setAttribute('aria-hidden', 'false'));
closeCart.addEventListener('click', () => cartModal.setAttribute('aria-hidden', 'true'));
cartModal.addEventListener('click', e => { if (e.target === cartModal) cartModal.setAttribute('aria-hidden', 'true'); });

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => nav.classList.toggle('nav--active'));

// Footer Year
document.getElementById('year').textContent = new Date().getFullYear();
