import {updateSpanStatus} from './utils'

export function setChatContextNameAndStatus () {
  let chatContextName = document.querySelector('.context-window span')
  // 1. Check sessionstorage for chat context id
  // 2. If there is one, open chat etc.
  // 3. If undefined then set text to Welcome to chatApp! and display logo.

  if (sessionStorage.chatContextId) {
    chatContextName.textContent = sessionStorage.chatContextName
    updateChatContextStatus()
  } else {
    chatContextName.textContent = 'Welcome to chatApp!'
    chatContextName.className = ''
  }
}

export function updateChatContextStatus () {
  let chatContextName = document.querySelector('.context-window span')
  if (sessionStorage.chatContextId) updateSpanStatus(chatContextName, sessionStorage.chatContextId)
}