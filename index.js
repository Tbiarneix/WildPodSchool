const contactFormFrench = document.querySelector(".formu-french");
const contactFormStarWars = document.querySelector(".formu-star-wars");
const contactFormClingon = document.querySelector(".formu-clingon");


const clingon = document.querySelector(".clingon")
const starWars = document.querySelector(".starwars")
const french = document.querySelector(".french")

const labelFrench = document.querySelector(".label-french")
const labelStarWars = document.querySelector(".label-star-wars")
const labelClingon = document.querySelector(".label-clingon")



clingon.addEventListener("click", function () {
    contactFormFrench.style.display = "none";
    contactFormStarWars.style.display = "none";
    contactFormClingon.style.display = "block";

    labelFrench.style.display = "none";
    labelStarWars.style.display = "none";
    labelClingon.style.display = "block";
})


starWars.addEventListener("click", function () {
    contactFormFrench.style.display = "none";
    contactFormClingon.style.display = "none";
    contactFormStarWars.style.display = "block";

    labelFrench.style.display = "none";
    labelClingon.style.display = "none";
    labelStarWars.style.display = "block";
})

french.addEventListener("click", function () {
    contactFormStarWars.style.display = "none";
    contactFormClingon.style.display = "none";
    contactFormFrench.style.display = "block";

    labelStarWars.style.display = "none";
    labelClingon.style.display = "none";
    labelFrench.style.display = "block";
})

// JS HAMBURGER //

const menuBurger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');

menuBurger.addEventListener('click', function () {
    menuBurger.classList.toggle('is-active');
    menuMobile.classList.toggle('is-active');
});
