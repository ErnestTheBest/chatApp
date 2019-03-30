import {checkSession} from './session'
import {runUserStatusService} from './updatesService'

checkSession()

let menuButton = document.querySelector('.menu-button')

menuButton.addEventListener('click', function () {
  menuButton.classList.toggle('toggle')
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

  if (sessionStorage.chatContextId) {
    printChatMessages()
    launchMessageUpdateService()
  }
}

// TODO: Add try catch?
initChat()