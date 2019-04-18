import { checkSession, storeCredentials } from './session'
import { enableInputsAndButton, disableInputsAndButton } from './utils'
import { registerNewUser } from './API/usersAPI'
import { createAndDisplayPopup } from './createPPopup'

checkSession()

document.addEventListener('submit', function (event) {
  event.preventDefault()
  validateAndRegister(
    Array.from(document.querySelectorAll('form input')),
    document.getElementById('username'),
    document.getElementById('password'),
    document.getElementById('confirm-password')
  )
})

function valid (inputs) {
  createAndDisplayPopup('Good boy', '#82df1b')
  inputs.forEach(e => e.classList.remove('error'))
}

function highlightEmptyFields (inputs) {
  createAndDisplayPopup('Mandatory values must be entered', 'linear-gradient(#f95062, #df251b)')
  inputs.forEach(e => {
    if (!e.value) {
      e.classList.add('error')
    } else {
      e.classList.remove('error')
    }
  })
}

function passwordDoNotMatch (passwordOne, passwordTwo) {
  createAndDisplayPopup('Passwords do not match', 'linear-gradient(#f95062, #df251b)')
  passwordOne.classList.add('error')
  passwordTwo.classList.add('error')
}

function validateFieldsNotEmpty (inputs) {
  return inputs.every(e => e.value)
}

function arePasswordsEqual (passwordOne, passwordTwo) {
  return passwordOne.value === passwordTwo.value
}

function validateAndRegister (inputs, username, passwordOne, passwordTwo) {
  if (validateFieldsNotEmpty(inputs)) {
    if (arePasswordsEqual(passwordOne, passwordTwo)) {
      valid(inputs)

      disableInputsAndButton(document.querySelector('form'))
      registerNewUser(username.value, passwordOne.value).then(res => {
        if (res.errors) {
          createAndDisplayPopup(res.errors[0].title.replace('data.', ''), 'linear-gradient(#f95062, #df251b)')
          enableInputsAndButton(document.querySelector('form'))
        } else {
          storeCredentials(res.data.id, username.value, passwordOne.value)
          checkSession()
        }
      })
    } else {
      passwordDoNotMatch(passwordOne, passwordTwo)
    }
  } else {
    highlightEmptyFields()
  }
}
