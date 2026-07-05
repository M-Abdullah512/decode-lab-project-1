// ==========================================================================
// DecodeLabs — Project 1: Responsive Frontend Interface
// Basic state management & interactivity (vanilla JS, no frameworks)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const primaryNav = document.getElementById('primaryNav');

  function closeNav() {
    primaryNav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close nav when a link is clicked (mobile)
  primaryNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close nav with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  /* ---------- Back-to-top button ---------- */
  const backToTop = document.getElementById('backToTop');

  function toggleBackToTop() {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }

  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- CTA form (basic state + validation) ---------- */
  const ctaForm = document.getElementById('ctaForm');
  const formMessage = document.getElementById('formMessage');
  const emailInput = document.getElementById('email');

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  ctaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = emailInput.value.trim();

    if (!isValidEmail(value)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.color = '#e8a0a0';
      emailInput.focus();
      return;
    }

    formMessage.textContent = `Thanks! We'll notify ${value} about new updates.`;
    formMessage.style.color = 'var(--color-blue)';
    ctaForm.reset();
  });

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

});
