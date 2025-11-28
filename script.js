document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const navUl = document.querySelector('nav ul');

  burgerMenu.addEventListener('click', function() {
    burgerMenu.classList.toggle('active');
    navUl.classList.toggle('active');
  });
});
