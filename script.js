// Hamburger menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  const expanded = nav.style.display === 'flex';
  nav.style.display = expanded ? '' : 'flex';
});

// Modal
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

openModalBtn.addEventListener('click', () => modal.setAttribute('aria-hidden', 'false'));
closeModalBtn.addEventListener('click', () => modal.setAttribute('aria-hidden', 'true'));
modal.addEventListener('click', e => { if (e.target === modal) modal.setAttribute('aria-hidden', 'true'); });

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Email submit demo
document.getElementById('submitEmail').addEventListener('click', () => {
  const email = document.getElementById('emailInput').value.trim();
  if (!email) return alert('Please enter an email');
  alert(`Thanks! (demo) — ${email}`);
  modal.setAttribute('aria-hidden', 'true');
});
