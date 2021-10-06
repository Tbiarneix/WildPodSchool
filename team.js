const modalButton = document.querySelector('#open-modal')
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('#close-modal');

modalButton.addEventListener("click", function() {
    modal.style.display = "block";
})

closeModalButton.addEventListener("click", function() {
    modal.style.display = "none";
})
