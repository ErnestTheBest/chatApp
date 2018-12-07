let errorMessage = document.getElementById('error-message');
let errorMessageText = document.querySelector('.error-message p');
let signInButton = document.getElementById('sign-in');
let inputs = Array.from(document.querySelectorAll('form input'));

document.addEventListener('submit', function (event) {
    event.preventDefault();
    validateFieldsNotEmpty();
});


function valid() {
    createAndDisplayPopup('Good boy', '#82df1b');
    inputs.forEach(e => e.classList.remove('error'));
}

function notValid() {
    createAndDisplayPopup('Mandatory values must be entered', 'linear-gradient(#f95062, #df251b)');
    inputs.forEach(e => {
        if (!e.value) {
            e.classList.add('error');
        } else {
            e.classList.remove('error');
        }
    });
}

function validateFieldsNotEmpty() {
    inputs.every(e => e.value) ? valid() : notValid();
}

function createAndDisplayPopup(text, background) {
    let element;

    if (document.querySelector('.error-message')) {
        element = document.querySelector('.error-message');
    } else {
        element = document.createElement('div');
        document.body.appendChild(element);
        element.addEventListener('click', function (event) {
            document.body.removeChild(document.querySelector('.error-message'));
        });
    }

    element.textContent = text;
    element.style.background = background;
    element.classList.add('error-message');

}