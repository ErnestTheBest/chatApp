let loginField = document.getElementById('username');
let passwordField = document.getElementById('password');
let errorMessage = document.getElementById('error-message');
let signInButton = document.getElementById('sign-in');

signInButton.addEventListener('click', validate);

document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        validate();
    }
});

function validate() {
    let login = loginField.value;
    let password = passwordField.value;

    if (!login || !password) {
        if (!login) {
            loginField.classList.add('error');
        }
        if (!password) {
            passwordField.classList.add('error');
        }
    } else {
        document.querySelector('.error-message p').textContent = 'Good boy';
        errorMessage.style.background = '#82df1b';
    }

    errorMessage.style.display = 'block';
}