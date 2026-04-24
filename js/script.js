/* ============================================================
   PORTFÓLIO — KAUAN LUCAS
   JavaScript organizado:
   1. Animações ao scroll (IntersectionObserver)
   2. Skill bars animadas
   3. Header scroll
   4. Menu mobile
   5. Back to top
   6. Ano automático no footer
   7. Formulário → WhatsApp
============================================================ */

// ── 1. ANIMAÇÕES AO SCROLL ────────────────────────────────────
const fadeEls = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.style.getPropertyValue('--delay') || '0s';
      entry.target.style.transitionDelay = delay;
      entry.target.classList.add('is-visible');
      scrollObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => scrollObserver.observe(el));


// ── 2. SKILL BARS ANIMADAS ────────────────────────────────────
const skillBars = document.querySelectorAll('.skill-bar');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-animated');
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillBars.forEach(bar => skillObserver.observe(bar));


// ── 3. HEADER SCROLL ─────────────────────────────────────────
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('header--scrolled', window.scrollY > 50);
  backToTopBtn.classList.toggle('is-visible', window.scrollY > 400);
});


// ── 4. MENU MOBILE ───────────────────────────────────────────
const toggle = document.getElementById('navToggle');
const menu   = document.getElementById('navMenu');

toggle.addEventListener('click', () => {
  const isOpen = toggle.classList.toggle('is-open');
  menu.classList.toggle('is-open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
});

// Fecha menu ao clicar em link
menu.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('is-open');
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});


// ── 5. BACK TO TOP ───────────────────────────────────────────
const backToTopBtn = document.getElementById('backToTop');

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ── 6. ANO AUTOMÁTICO ────────────────────────────────────────
const yearEl = document.getElementById('currentYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();



// ── 8. ACTIVE NAV LINK AO SCROLL ────────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__link');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const active = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(sec => navObserver.observe(sec));