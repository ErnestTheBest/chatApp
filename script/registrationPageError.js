let errorMessage = document.getElementById('error-message');
let errorMessageText = document.querySelector('.error-message p');
let signInButton = document.getElementById('sign-in');
let passwordOne = document.getElementById('password');
let passwordTwo = document.getElementById('confirm-password');
let inputs = Array.from(document.querySelectorAll('form input'));

signInButton.addEventListener('click', register);

document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        register();
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

function passwordDoNotMatch() {
    errorMessageText.textContent = 'Passwords do not match';
    errorMessage.style.background = 'linear-gradient(#f95062, #df251b)';
    passwordOne.classList.add('error');
    passwordTwo.classList.add('error');
}

function validateFieldsNotEmpty() {
    let areValid = inputs.every(e => e.value);
    areValid ? valid() : notValid();
    errorMessage.style.display = 'block';
    return areValid;
}

function arePasswordsEqual() {
    return passwordOne.value === passwordTwo.value;
}

function register() {
    if (validateFieldsNotEmpty()) {
        arePasswordsEqual() ? valid() : passwordDoNotMatch();
    }
}