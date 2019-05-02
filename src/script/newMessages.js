import { getChatsUpdate } from './API/chatsAPI'
import { markNewMessages, addListContact } from './contacts'
import { getAllUsersList } from './API/usersAPI'

let latestMessageUpdate = {}

// Store initial state if messages on startup
getChatsUpdate().then(result => {
  return result.data.filter(e => e.created_at !== null)
    .forEach(element => {
      latestMessageUpdate[element.user_id] = +new Date(element.created_at)
    })
})

// 1. Fetch all messages object
// 2. Filter out users that didn't message me
// 3. Figure out if contact is on my contact list

export function checkNewMessages () {
  // Get all user ids that are in my contacts list. Timestamp is redundant. Just wanned to practice with objects
  let contactIds = {}
  document.querySelectorAll('.contacts-list li').forEach(
    function (element) {
      contactIds[element.getAttribute('data-id')] = Date.now()
    })

  getChatsUpdate().then(({ data }) => {
    let result = {}

    // Filter all contacts that messaged us
    data.filter(e => e.created_at !== null)
      .forEach(element => {
        result[+element.user_id] = +new Date(element.created_at)
      })

    let newMessages = []
    let newUsers = []

    Object.entries(result).forEach(e => {
      // Filter every message
      let [userId, createdAt] = e

      // If contacts is all new or writen to use a new message and is not on contacts list
      if (!latestMessageUpdate.hasOwnProperty(userId) ||
        (latestMessageUpdate[`${userId}`] < createdAt && !contactIds.hasOwnProperty(userId))) {
        newMessages.push(parseInt(userId))
        newUsers.push(parseInt(userId))
      } else if (latestMessageUpdate[`${userId}`] < createdAt) {
        newMessages.push(parseInt(userId))
      }
    })

    if (newUsers.length) {
      getAllUsersList().then(({ data }) => {
        data.forEach(e => {
          if (newUsers.includes(e.id)) {
            addListContact(e.id, e.username, e.name)
          }
        })

        markNewMessages(newMessages)
      })
    } else {
      markNewMessages(newMessages)
    }
    latestMessageUpdate = result
  })
}
