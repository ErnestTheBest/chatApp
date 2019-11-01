import { setChatContext } from './session'
import { setChatContextNameAndStatus } from './chatContext'
import { toggleMessageInput } from './chatMessageInput'
import { printChatMessages } from './chatMessages'
import { launchMessageUpdateService } from './updatesService'
import { getUserStatus } from './userStatus'
import { addContact, removeContact, getContactsList } from './API/contactsAPI'
import { getAllUsersList } from './API/usersAPI'
import { updateSpanStatus } from './utils'

const contactsList = document.querySelector('.contacts-list')

export function addListContact (contactId, username, name = undefined, isFavorite = false) {
  if (parseInt(window.sessionStorage.userId) === contactId) return

  const element = document.createElement('li')
  const span = document.createElement('span')

  span.classList.add('status', `status-${getUserStatus(contactId)}`)

  name ? span.textContent = name : span.textContent = username
  const favorite = document.createElement('i')
  favorite.classList.add('material-icons', 'w3-large')
  if (isFavorite) {
    favorite.title = 'Remove favorite'
    favorite.textContent = 'person_add_disabled'
    favorite.addEventListener('click', function () {
      removeContact(favorite.parentNode.getAttribute('data-id'))
      setTimeout(defineContactList, 500)
    })
  } else {
    favorite.title = 'Add favorite'
    favorite.textContent = 'person_add'
    favorite.addEventListener('click', function () {
      addContact(favorite.parentNode.getAttribute('data-id'))
      setTimeout(defineContactList, 500)
    })
  }

  element.setAttribute('data-id', contactId)
  element.appendChild(span)
  element.appendChild(favorite)

  element.addEventListener('click', setActiveContact)

  contactsList.appendChild(element)
}

export function createContactList (contactsArray, areFavorite = false) {
  clearContactList()
  const promise = new Promise(function (resolve, reject) {
    for (const contact of contactsArray) {
      addListContact(contact.id, contact.username, contact.name, areFavorite)
    }
    resolve()
  })

  return promise
}

export function clearContactList () {
  // Rad that it's faster than innerHTML
  while (contactsList.firstChild) {
    contactsList.removeChild(contactsList.firstChild)
  }
}

function setActiveContact (elem) {
  // 1. Is there active contact
  // 2. Find out if active chat == chat that is beine selected
  // 3. true - do nothing. false - toggle .active-contact on both list items

  // I feel ashamed for this if()
  if (elem.target.nodeName !== 'I') {
    if (elem.target.nodeName === 'SPAN') {
      elem = elem.target.parentNode
    } else {
      elem = elem.target
    }
  } else return

  // 1
  const exists = contactsList.querySelector('.active-contact')

  if (exists) {
    // 2
    if (elem === exists) {
      return
    } else {
      // 3
      elem.classList.toggle(('active-contact'))
      exists.classList.toggle(('active-contact'))
    }
  } else {
    elem.classList.toggle(('active-contact'))
  }

  setChatContext(elem.getAttribute('data-id'), elem.querySelector('span').innerText)
  setChatContextNameAndStatus()
  toggleMessageInput()
  printChatMessages()
  removeNewMessageMarker(elem)

  launchMessageUpdateService()

  // Close mobile menu
  document.querySelector('.menu-button').classList.remove('toggle')
  document.querySelector('.container').classList.remove('menu-open')

  // Clear input and redefine contacts list
  document.querySelector('.search-input input').value = ''
  // how to handle promises?
  defineContactList()
}

export function defineContactList () {
  getContactsList().then(res => {
    if (!res.data.length) {
      return getAllUsersList().then(res => { return createContactList(res.data) })
    } else { return createContactList(res.data, true) }
  }).then(() => {
    if (window.sessionStorage.chatContextId) {
      // TODO: This will be bugged if last open chat was with someone not in contact list
      const elem = document.querySelector(`[data-id="${window.sessionStorage.chatContextId}"]`)
      console.log(elem)
      elem.classList.add('active-contact')
    }
  })
}

export function updateContactsListStatuses () {
  contactsList.querySelectorAll('li').forEach(e => {
    updateSpanStatus(e.querySelector('span'), e.getAttribute('data-id'))
  })
}

export function markNewMessages (userIdsArr) {
  for (const newMessageUserId of userIdsArr) {
    // <span class="new-message"></span>
    const elem = document.querySelector(`[data-id="${newMessageUserId}"]`)
    const marker = elem.querySelector('.new-message')
    if (!elem.classList.contains('active-contact') && !marker) {
      const spa = document.createElement('span')
      spa.className = 'new-message'
      elem.querySelector('span').appendChild(spa)
    }
  }
}

function removeNewMessageMarker (el) {
  const marker = el.querySelector('.new-message')
  if (marker) marker.remove()
}
