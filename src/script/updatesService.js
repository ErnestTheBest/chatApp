import { getMessages } from './API/messagesAPI'
import { ping } from './API/ping'
import { printChatMessages, updateMessagesListStatuses } from './chatMessages'
import { checkNewMessages } from './newMessages'
import { getAllUsersList } from './API/usersAPI'
import { mapUserStatuses } from './userStatus'
import { setUserStatuses } from './session'
import { updateContactsListStatuses } from './contacts'
import { updateChatContextStatus } from './chatContext'

let runningServices = {
  'pingPongService': false,
  'userStatusService': false,
  'userStatusUpdateService': false,
  'messagesUpdateService': false,
  'newMessagesUpdateService': false
}
let messageServicePolled = false

export function pingPong () {
  if (!runningServices.pingPongService) runningServices.pingPongService = true
  return ping().then(() => {
    setTimeout(pingPong, 10000)
  })
}

export function launchMessageUpdateService () {
  if (messageServicePolled) {
    return
  }

  messageServicePolled = true
  runMessageUpdateService()
}

export function runMessageUpdateService () {
  if (!runningServices.messagesUpdateService) runningServices.messagesUpdateService = true
  return getMessages().then(res => {
    try {
      if (res.data.length) {
        let lastMessageTime = document.querySelector('.content-window').lastChild.querySelector('time').dateTime
        if (res.data[0].created_at !== lastMessageTime) printChatMessages()
      }
    } catch (error) {
      console.log('Something went wrong in messageUpdateService')
    }

    setTimeout(runMessageUpdateService, 3000)
  })
}

export function runUserStatusService () {
  if (!runningServices.userStatusService) runningServices.userStatusService = true
  return getAllUsersList().then(res => {
    setUserStatuses(JSON.stringify(mapUserStatuses(res.data)))
    setTimeout(runUserStatusService, 10000)
  })
}

export function runUserStatusUpdateService () {
  if (!runningServices.userStatusUpdateService) runningServices.userStatusUpdateService = true
  updateContactsListStatuses()
  updateChatContextStatus()
  updateMessagesListStatuses()
  setTimeout(runUserStatusUpdateService, 10000)
}

export function runNewMessagesUpdateService () {
  if (!runningServices.newMessagesUpdateService) runningServices.newMessagesUpdateService = true
  checkNewMessages()
  setTimeout(runNewMessagesUpdateService, 3000)
}
