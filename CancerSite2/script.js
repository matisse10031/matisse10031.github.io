document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
const overlayMenu = document.getElementById('overlayMenu');
let menuOpen = false;

const openMenu = () => {
  overlayMenu.classList.add('open');
  hamburger.classList.add('open'); // ✅ ajoute la classe pour l’animation
  menuOpen = true;
};
const closeMenu = () => {
  overlayMenu.classList.remove('open');
  hamburger.classList.remove('open'); // ✅ retire la classe
  menuOpen = false;
};

hamburger.addEventListener('click', () => {
  menuOpen ? closeMenu() : openMenu();
});

  // Accordéon : un seul aspect ouvert à la fois
  document.querySelectorAll('.main-menu > li').forEach(li => {
    const toggle = li.querySelector('.menu-toggle');

    toggle.addEventListener('click', () => {
      // Ferme tous les autres
      document.querySelectorAll('.main-menu > li').forEach(otherLi => {
        if (otherLi !== li) {
          otherLi.classList.remove('expanded');
          otherLi.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle celui cliqué
      const expanded = li.classList.toggle('expanded');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.sidebar a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (!target) return;

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
});
