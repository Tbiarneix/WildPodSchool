// JS HAMBURGER //

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

// LIGHTSABER SOUND //

const menuNav = document.querySelectorAll('nav li');
var audiosaber = document.querySelector("#lightsaber");
for (let i=0; i<menuNav.length; i++) {
    menuNav[i].addEventListener('mouseover', function() {
        audiosaber.play();
    })
}

