const menuBurger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');

menuBurger.addEventListener('click', function() { 
    menuBurger.classList.toggle('is-active');
    menuMobile.classList.toggle('is-active');
});

const message =
  "Envoyé votre message est, l'équipe au plus vite répondra !";

document.getElementById("contactForm");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});