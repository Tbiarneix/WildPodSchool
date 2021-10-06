const menuBurger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');

menuBurger.addEventListener('click', function() { 
    menuBurger.classList.toggle('is-active');
    menuMobile.classList.toggle('is-active');
});