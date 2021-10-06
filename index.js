const button = document.querySelector(".test");
const contactForm = document.querySelector(".contactForm")
const contactForm2 = document.querySelector(".contactForm2")



if(contactForm.style.display = "block") {
    button.onclick =  function() {
             contactForm.style.display = "none";
        
            contactForm2.style.display = "block";
    }
}
else {
    button.onclick =  function() {
        contactForm.style.display = "block";
   
       contactForm2.style.display = "none";
}
}




// Si contactForm est en block le mettre en none et contactForm2 en block
//Sinon le mettre en block et contactForm2 en none
// repeter ces condition a l'infini
const menuBurger = document.querySelector('.hamburger');
const menuMobile = document.querySelector('.menu-mobile');

menuBurger.addEventListener('click', function() { 
    menuBurger.classList.toggle('is-active');
    menuMobile.classList.toggle('is-active');
});
