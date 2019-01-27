let inputs = Array.from(document.querySelectorAll('form input'));
let username = document.getElementById('username');
let password = document.getElementById('password');
let rez;

document.getElementsByTagName('form')[0].addEventListener('submit', function (event) {
    event.preventDefault();
    validateAndLogin();
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

function validateAndLogin() {
    inputs.every(e => e.value) ? valid() : notValid();
    loginExistingUser(username.value, password.value).then(res => {
        if (res.code === 401) {
            createAndDisplayPopup(res.message, 'linear-gradient(#f95062, #df251b)');
        }
        rez = res;
    });
}