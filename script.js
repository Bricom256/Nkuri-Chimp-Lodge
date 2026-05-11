// MOBILE MENU
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && !nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('active');
    }
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
}

// document.addEventListener('DOMContentLoaded', function () {
//   var menuToggle = document.querySelector('.menu-toggle');
//   var nav = document.querySelector('.nav');
//   if (menuToggle && nav) {
//     menuToggle.addEventListener('click', function () {
//       nav.classList.toggle('active');
//     });
//   }
// });

// HERO SLIDER
const slides = document.querySelectorAll('.slide');
let current = 0;

function nextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(nextSlide, 5000);

// SCROLL REVEAL
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100 && !el.classList.contains('active')) {
      setTimeout(() => {
        el.classList.add('active');
      }, 300);
    }
  });
}

window.addEventListener('scroll', () => {
  revealOnScroll();
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }
});
revealOnScroll();

// CONTACT FORM
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
  });
}

// FOOTER YEAR
const footerYear = document.getElementById('footer-year');
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}