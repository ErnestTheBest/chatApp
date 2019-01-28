checkSession();

let passwordOne = document.getElementById('password');
let passwordTwo = document.getElementById('confirm-password');
let displayName = document.getElementById('display-name');

document.getElementById('cancel').addEventListener('click', function (event) {
    event.preventDefault()
    window.location.replace('./chat.html');
});

document.addEventListener('submit', function (event) {
    event.preventDefault();
    updateProfile();
});

function valid() {
    createAndDisplayPopup('Good boy', '#82df1b');
    passwordOne.classList.remove('error');
    passwordTwo.classList.remove('error');
}

function notValid() {
    createAndDisplayPopup('Passwords do not match', 'linear-gradient(#f95062, #df251b)')
    passwordOne.classList.add('error');
    passwordTwo.classList.add('error');
}

function checkPasswordsChanged() {
    // If password field is no empty
    // And if passwords are equal
    if (passwordOne.value && arePasswordsEqual()) {
        valid();
        return true;
    } else {
        notValid();
        return false;
    }
}

function arePasswordsEqual() {
    return passwordOne.value === passwordTwo.value;
}

function fetchAccountUpdate() {
    console.log('Account update is not implemented yet. Soon...')
}

function updateProfile() {
    //1. Check if password fields are not empty and are equal.
    if (checkPasswordsChanged()) {
        //2. If 1 is true, then send data to server.
        fetchAccountUpdate();
    }
}
