document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  function setActiveLink(targetLink) {
    navLinks.forEach(link => link.classList.toggle('active', link === targetLink));
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      setActiveLink(link);
      if (navMenu && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
      }
    });

    const linkUrl = new URL(link.href, window.location.origin);
    if (linkUrl.pathname === window.location.pathname) {
      setActiveLink(link);
    }
  });

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      menuToggle.classList.toggle('open');
    });
  }
});

