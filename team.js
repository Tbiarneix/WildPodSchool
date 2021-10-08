const modalButton = document.querySelectorAll('.open-modal');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('#close-modal');

const modalSelection = function () {
    for (let i = 0; i < modalButton.length; i++) {
        modalButton[i].addEventListener("click", function () {
            modal.style.display = "block";
        })
    }
}

modalSelection();
closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
})


// const prevArrow = document.querySelector('#prev-arrow');
// const nextArrow = document.querySelector('#next-arrow');
// const cardsNav = document.getElementsByClassName('carousel-item');
// let selectedId = 3;


// prevArrow.addEventListener("click", function () {
//     selectedId -= 1;
//     prevArrow.setAttribute("href", `#formator${selectedId}`);
// })

// nextArrow.addEventListener("click", function () {
//     selectedId += 1;
//     nextArrow.setAttribute("href", `#formator${selectedId}`);
// })


