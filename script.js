// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
  const expanded = nav.style.display === 'flex';
  nav.style.display = expanded ? '' : 'flex';
  nav.style.flexDirection = 'column';
});

// Modal logic
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const yearSpan = document.getElementById('year');

openModalBtn.addEventListener('click', () => {
  modal.setAttribute('aria-hidden', 'false');
});

closeModalBtn.addEventListener('click', () => {
  modal.setAttribute('aria-hidden', 'true');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.setAttribute('aria-hidden', 'true');
});

// footer year
yearSpan.textContent = new Date().getFullYear();

// Simple email submit (demo)
document.getElementById('submitEmail').addEventListener('click', () => {
  const email = document.getElementById('emailInput').value.trim();
  if (!email) { alert('Please enter an email'); return; }
  alert('Thanks! (demo) — ' + email);
  modal.setAttribute('aria-hidden', 'true');
});
