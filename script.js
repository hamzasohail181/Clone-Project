// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => nav.classList.toggle('nav--active'));

// Modal
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
openModalBtn.addEventListener('click', () => modal.setAttribute('aria-hidden','false'));
closeModalBtn.addEventListener('click', () => modal.setAttribute('aria-hidden','true'));
modal.addEventListener('click', e => { if(e.target === modal) modal.setAttribute('aria-hidden','true'); });

// Modal Email Demo
document.getElementById('submitEmail').addEventListener('click', () => {
  const email = document.getElementById('emailInput').value.trim();
  if(!email) return alert('Please enter an email');
  alert(`Thanks! (demo) — ${email}`);
  modal.setAttribute('aria-hidden','true');
});

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Footer Year
document.getElementById('year').textContent = new Date().getFullYear();
