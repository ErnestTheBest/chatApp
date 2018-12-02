let errorMessage = document.getElementById('error-message');
let errorMessageText = document.querySelector('.error-message p');
let signInButton = document.getElementById('sign-in');
let inputs = Array.from(document.querySelectorAll('form input'));

signInButton.addEventListener('click', validateFieldsNotEmpty);

document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        validateFieldsNotEmpty();
    }
});

function valid() {
    errorMessageText.textContent = 'Good boy';
    errorMessage.style.background = '#82df1b';
    inputs.forEach(e => e.classList.remove('error'));
}

function notValid() {
    errorMessageText.textContent = 'Mandatory values must be entered';
    errorMessage.style.background = 'linear-gradient(#f95062, #df251b)';
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
    errorMessage.style.display = 'block';
}