import { doRequest } from './fetchWrapper'

export function getContactsList () {
  return doRequest('GET', `users/${window.sessionStorage.userId}/contacts`)
}

export function addContact (contactId) {
  return doRequest('POST', `users/${window.sessionStorage.userId}/contacts`, { id: parseInt(contactId) })
}

export function removeContact (contactId) {
  return doRequest('DELETE', `users/${window.sessionStorage.userId}/contacts/${contactId}`)
}
