import { getUserStatus } from './userStatus'
import { enableInputsAndButton, disableInputsAndButton } from './utils'
import {runMessageUpdateService} from './updatesService'

document.querySelector('.message-window input').addEventListener('keypress', function (event) {
  if (event.charCode === 13) {
    sendTextMessage()
  }
})

document.querySelector('.message-window .message-button').addEventListener('click', function (event) {
  event.preventDefault()
  sendTextMessage()
})

export function toggleMessageInput () {
  let messageWindow = document.querySelector('.message-window')

  if (!sessionStorage.chatContextId) {
    messageWindow.classList.add('hidden')
  } else {
    messageWindow.classList.remove('hidden')

    getUserStatus(sessionStorage.chatContextId) === 'offline' ? disableInputsAndButton(messageWindow) : enableInputsAndButton(messageWindow)
  }
}

function sendTextMessage () {
  let messageWindowInput = document.querySelector('.message-window input')
  if (messageWindowInput.value) {
    sendMessage(messageWindowInput.value).then(
      printChatMessages)
    messageWindowInput.value = ''
    runMessageUpdateService()
  }
}
