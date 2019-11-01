import { getUserStatus } from './userStatus'
import { updateSpanStatus } from './utils'
import { getMessages } from './API/messagesAPI'

const contentWindow = document.querySelector('.content-window')

function createMessageElement (message) {
  const chatMessage = document.createElement('div')
  const isMyMessage = message.sender_id === parseInt(window.sessionStorage.userId)
  const userStatus = isMyMessage ? 'online' : getUserStatus(message.sender_id)
  const messageDate = new Date(message.created_at)
  // {message: "Ho are you", sender_id: 2, recipient_id: 4, created_at: "2019-02-06T19:24:23.372Z"}
  isMyMessage ? chatMessage.classList.add('outgoing') : chatMessage.classList.add('incoming')

  // Message info
  const messageInfo = document.createElement('div')
  messageInfo.classList.add('message-info')

  const span = document.createElement('span')
  isMyMessage ? span.textContent = 'You, ' : span.textContent = window.sessionStorage.chatContextName + ', '
  span.classList.add('status', `status-${userStatus}`)

  const time = document.createElement('time')
  time.dateTime = message.created_at
  time.textContent = formatTime(messageDate)

  messageInfo.appendChild(span)
  messageInfo.appendChild(time)

  // Message
  const userMessage = document.createElement('div')
  userMessage.classList.add('message')
  userMessage.textContent = message.message

  // Combine all together
  chatMessage.appendChild(messageInfo)
  chatMessage.appendChild(userMessage)

  return chatMessage
}

export function printChatMessages () {
  clearChatMessages()

  getMessages().then(res => {
    if (res.data.length) {
      for (let index = res.data.length - 1; index >= 0; index--) {
        contentWindow.appendChild(createMessageElement(res.data[index]))
      }

      contentWindow.scrollTop = contentWindow.scrollHeight
    }
  })
}

export function clearChatMessages () {
  while (contentWindow.firstChild) {
    contentWindow.removeChild(contentWindow.firstChild)
  }
}

function formatTime (date) {
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  if (hours < 10) hours = `0${hours}`
  if (minutes < 10) minutes = `0${minutes}`
  if (seconds < 10) seconds = `0${seconds}`

  return `${hours}:${minutes}:${seconds}`
}

export function updateMessagesListStatuses () {
  const incomingMessages = contentWindow.querySelectorAll('.incoming span')
  if (incomingMessages.length) {
    incomingMessages.forEach(e => {
      updateSpanStatus(e, window.sessionStorage.chatContextId)
    })
  }
}
