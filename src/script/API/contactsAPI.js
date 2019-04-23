import { defaultUrl } from './endpoints'

export function getContactsList () {
  return window.fetch(`${defaultUrl}/users/${window.sessionStorage.userId}/contacts`, {
    headers: {
      Authorization: `Basic ${window.sessionStorage.credentials}`
    }
  }).then(res => {
    return res.json()
  })
}

export function addContact (contactId) {
  return window.fetch(`${defaultUrl}/users/${window.sessionStorage.userId}/contacts`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${window.sessionStorage.credentials}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'id': parseInt(contactId) })
  })
}

export function removeContact (contactId) {
  return window.fetch(`${defaultUrl}/users/${window.sessionStorage.userId}/contacts` + '/' + contactId, {
    method: 'DELETE',
    headers: {
      Authorization: `Basic ${window.sessionStorage.credentials}`
    }
  })
}
