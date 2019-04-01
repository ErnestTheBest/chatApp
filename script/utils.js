import { getUserStatus } from './userStatus'

export function updateSpanStatus (elem, userId) {
  elem.className = 'status'
  elem.classList.add(`status-${getUserStatus(userId)}`)
}

export function enableInputsAndButton (parentElement) {
  let inputs = parentElement.querySelectorAll('input')
  let buttons = parentElement.querySelectorAll('button')

  inputs.forEach(inp => inp.removeAttribute('disabled'))
  buttons.forEach(btn => btn.removeAttribute('disabled'))
}

export function disableInputsAndButton (parentElement) {
  let inputs = parentElement.querySelectorAll('input')
  let buttons = parentElement.querySelectorAll('button')

  inputs.forEach(function (elem) {
    elem.disabled = true
  })
  buttons.forEach(function (elem) {
    elem.disabled = true
  })
}
