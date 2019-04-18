import { checkSession, storeCredentials } from './session'
import { createAndDisplayPopup } from './createPPopup'
import { enableInputsAndButton, disableInputsAndButton } from './utils'
import { loginExistingUser } from './API/usersAPI'

checkSession()

document.getElementsByTagName('form')[0].addEventListener('submit', function (event) {
  event.preventDefault()
  validateAndLogin(Array.from(document.querySelectorAll('form input')))
})

function valid (inputs) {
  createAndDisplayPopup('Good boy', '#82df1b')
  inputs.forEach(e => e.classList.remove('error'))
}

function notValid (inputs) {
  createAndDisplayPopup('Mandatory values must be entered', 'linear-gradient(#f95062, #df251b)')
  inputs.forEach(e => {
    if (!e.value) {
      e.classList.add('error')
    } else {
      e.classList.remove('error')
    }
  })
}

function validateAndLogin (inputs) {
  const username = document.getElementById('username')
  const password = document.getElementById('password')

  inputs.every(e => e.value) ? valid(inputs) : notValid(inputs)

  disableInputsAndButton(document.querySelector('form'))
  loginExistingUser(username.value, password.value).then(res => {
    if (res.errors) {
      createAndDisplayPopup(res.errors[0].title.replace('data.', ''), 'linear-gradient(#f95062, #df251b)')
      enableInputsAndButton(document.querySelector('form'))
    } else {
      storeCredentials(res.data.id, username.value, password.value)
      checkSession()
    }
  })
}
