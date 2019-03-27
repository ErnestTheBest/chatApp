import { checkSession } from './session'
import { createAndDisplayPopup } from './createPPopup'
import { enableInputsAndButton, disableInputsAndButton } from './utils'
import { getLoggedInUserInfo, updateUserProfile } from './API/usersAPI'

checkSession()

populateForm(document.getElementById('userLogin'), document.getElementById('display-name'))

document.getElementById('cancel').addEventListener('click', function (event) {
  event.preventDefault()
  redirectCoChat()
})

document.addEventListener('submit', function (event) {
  event.preventDefault()
  updateProfile()
})

function valid (passwordOne, passwordTwo) {
  createAndDisplayPopup('Good boy', '#82df1b')
  passwordOne.classList.remove('error')
  passwordTwo.classList.remove('error')
}

function notValid (passwordOne, passwordTwo) {
  createAndDisplayPopup('Passwords do not match', 'linear-gradient(#f95062, #df251b)')
  passwordOne.classList.add('error')
  passwordTwo.classList.add('error')
}

function checkPasswordsChanged () {
  // If password field is no empty
  // And if passwords are equal
  // let passwordOne = document.getElementById('password')
  // let passwordTwo = document.getElementById('confirm-password')
  //
  // Password updates is currently unsupported by backend
  //
  // if (passwordOne.value === passwordTwo.value) {
  //     valid(passwordOne, passwordTwo);
  //     return true;
  // } else {
  //     notValid(passwordOne, passwordTwo);
  //     return false;
  // }
  return true
}

function fetchAccountUpdate () {
  console.log('Account update is not implemented yet. Soon...')
}

function updateProfile () {
  //1. Check if password fields are not empty and are equal.
  if (checkPasswordsChanged()) {
    //2. If 1 is true, then send data to server.

    disableInputsAndButton(document.querySelector('form'))
    updateUserProfile(document.getElementById('display-name').value).then(() => {
      createAndDisplayPopup('Display name changed', '#82df1b')
      setTimeout(redirectCoChat, 1500)
    })
    enableInputsAndButton(document.querySelector('form'))
  }
}

function populateForm (userLogin, displayName) {
  getLoggedInUserInfo().then(({data}) => {
    console.log(data)
    userLogin.textContent = data.username
    if (data.name) displayName.value = data.name
  })
}

function redirectCoChat () {
  window.location.replace('./chat.html')
}