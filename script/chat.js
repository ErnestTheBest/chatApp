let menuButton = document.querySelector('.menu-button');
let container = document.querySelector('.container');

menuButton.addEventListener('click', function() {
    menuButton.classList.toggle('toggle');
    container.classList.toggle('menu-open');
})