let errorMessage = document.getElementById('error-message');
let errorMessageText = document.querySelector('.error-message p');
let signInButton = document.getElementById('sign-in');
let passwordOne = document.getElementById('password');
let passwordTwo = document.getElementById('confirm-password');
let inputs = Array.from(document.querySelectorAll('form input'));

document.addEventListener('submit', function (event) {
    event.preventDefault();
    register();
});

function valid() {
    createAndDisplayPopup('Good boy', '#82df1b');
    inputs.forEach(e => e.classList.remove('error'));
}

function notValid() {
    createAndDisplayPopup('Mandatory values must be entered', 'linear-gradient(#f95062, #df251b)')
    inputs.forEach(e => {
        if (!e.value) {
            e.classList.add('error');
        } else {
            e.classList.remove('error');
        }
    });
}

function passwordDoNotMatch() {
    createAndDisplayPopup('Passwords do not match', 'linear-gradient(#f95062, #df251b)');
    passwordOne.classList.add('error');
    passwordTwo.classList.add('error');
}

function validateFieldsNotEmpty() {
    let areValid = inputs.every(e => e.value);
    areValid ? valid() : notValid();
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
