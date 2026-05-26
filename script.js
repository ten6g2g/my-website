// =============================================
//   G2G PRODUCTIONS — script.js
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // === HAMBURGER MENU (Mobile) ===
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      nav.classList.toggle('open');
    });

    // Close menu when a nav link is clicked
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
      });
    });
  }

  // === SCROLL REVEAL ANIMATIONS ===
  const revealElements = document.querySelectorAll(
    '.service-card, .price-box, .services-preview h2, .pricing-preview h2'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger each card slightly
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => observer.observe(el));

  // === NAVBAR SHADOW ON SCROLL ===
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.boxShadow = '0 4px 30px rgba(245, 197, 24, 0.08)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

});