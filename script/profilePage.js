checkSession();

let userLogin = document.getElementById('userLogin');
let passwordOne = document.getElementById('password');
let passwordTwo = document.getElementById('confirm-password');
let displayName = document.getElementById('display-name');

populateForm();

document.getElementById('cancel').addEventListener('click', function (event) {
    event.preventDefault()
    redirectCoChat();
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

    // Password updates is currently unsupoorted by backend
    /*
    if (passwordOne.value === passwordTwo.value) {
        valid();
        return true;
    } else {
        notValid();
        return false;
    } */
    return true;
}

function fetchAccountUpdate() {
    console.log('Account update is not implemented yet. Soon...')
}

function updateProfile() {
    //1. Check if password fields are not empty and are equal.
    if (checkPasswordsChanged()) {
        //2. If 1 is true, then send data to server.

        disableInputsAndButton(document.querySelector('form'));
        updateUserProfile(displayName.value).then(res => {
            createAndDisplayPopup('Display name changed', '#82df1b');
            setTimeout(redirectCoChat, 1500);
        });
        enableInputsAndButton(document.querySelector('form'));
    }
}

function populateForm() {
    getLoggedInUserInfo().then(({data}) => {
        console.log(data);
        userLogin.textContent = data.username;
        if (data.name) displayName.value = data.name;
    })
}

function redirectCoChat() {
    window.location.replace('./chat.html');
}