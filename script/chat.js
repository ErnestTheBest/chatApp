import { checkSession, logout } from './session'
import { defineContactList } from './contacts'
import { setChatContextNameAndStatus } from './chatContext'
import { clearChatMessages, printChatMessages } from './chatMessages'
import { toggleMessageInput } from './chatMessageInput'
import { runUserStatusUpdateService, runNewMessagesUpdateService, launchMessageUpdateService, runUserStatusService, pingPong } from './updatesService'

checkSession()

document.querySelector('.menu-button').addEventListener('click', function () {
  document.querySelector('.menu-button').classList.toggle('toggle')
  document.querySelector('.container').classList.toggle('menu-open')
})

document.getElementById('logout').addEventListener('click', logout)

function initChat () {
  runUserStatusService()
  defineContactList()

  setChatContextNameAndStatus()
  clearChatMessages()
  toggleMessageInput()
  pingPong()
  // Since userstatuses is not in sessionstorage yet, this needs delay. I know it's hardcoded and bad. Sorry.
  setTimeout(runUserStatusUpdateService, 3000)
  setTimeout(runNewMessagesUpdateService, 3000)

  if (window.sessionStorage.chatContextId) {
    printChatMessages()
    launchMessageUpdateService()
  }
}

// TODO: Add try catch?
initChat()
