import { updateSpanStatus } from './utils'

export function setChatContextNameAndStatus () {
  const chatContextName = document.querySelector('.context-window span')
  // 1. Check sessionstorage for chat context id
  // 2. If there is one, open chat etc.
  // 3. If undefined then set text to Welcome to chatApp! and display logo.

  if (window.sessionStorage.chatContextId) {
    chatContextName.textContent = window.sessionStorage.chatContextName
    updateChatContextStatus()
  } else {
    chatContextName.textContent = 'Welcome to chatApp!'
    chatContextName.className = ''
  }
}

export function updateChatContextStatus () {
  const chatContextName = document.querySelector('.context-window span')
  if (window.sessionStorage.chatContextId) updateSpanStatus(chatContextName, window.sessionStorage.chatContextId)
}
