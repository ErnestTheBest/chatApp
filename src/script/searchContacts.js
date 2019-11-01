import { getAllUsersList } from './API/usersAPI'
import { getContactsList } from './API/contactsAPI'
import { createContactList, clearContactList } from './contacts'

export function initContactsSearch () {
  document.querySelector('.search-button').addEventListener('click', function (event) {
    event.preventDefault()
    findContacts()
  })

  document.querySelector('.search-input input').addEventListener('keyup', function (event) {
    event.preventDefault()
    findContacts()
  })
}

function findContacts () {
  const inputValue = document.querySelector('.search-input input').value
  if (inputValue) {
    getAllUsersList().then(res => {
      console.log(res)
      const contactsArray = []
      for (const contact of res.data) {
        if (contact.username.includes(inputValue)) {
          contactsArray.push(contact)
        } else if (contact.name && contact.name.includes(inputValue)) {
          contactsArray.push(contact)
        }
      }
      contactsArray.length ? createContactList(contactsArray) : clearContactList()
    })
  } else {
    getContactsList().then(res => {
      console.log(res)
      createContactList(res.data, true)
    })
  }
}
