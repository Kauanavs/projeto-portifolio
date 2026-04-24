// ANIMAÇÕES AO SCROLL
const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, {
  threshold: 0.1
});

elements.forEach(el => observer.observe(el));


// HEADER SCROLL
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header--scrolled");
  } else {
    header.classList.remove("header--scrolled");
  }
});


// MENU MOBILE
const toggle = document.getElementById("navToggle");
const menu = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("is-open");
  menu.classList.toggle("is-open");
});