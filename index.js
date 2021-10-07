

// JS HAMBURGER //

const menuBurger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');

 menuBurger.addEventListener('click', function() { 
 menuBurger.classList.toggle('is-active');
 menuMobile.classList.toggle('is-active');
 });



const menuNav = document.querySelectorAll('nav li');
var audiosaber = document.querySelector("#lightsaber");
for (let i=0; i<menuNav.length; i++) {
    menuNav[i].addEventListener('mouseover', function() {
        audiosaber.play();
    })
}

