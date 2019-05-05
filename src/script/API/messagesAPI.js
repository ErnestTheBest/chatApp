import { doRequest } from './fetchWrapper'

export function sendMessage (message) {
  return doRequest('POST', `users/${window.sessionStorage.userId}/contacts/${window.sessionStorage.chatContextId}/messages`, { message })
}

export function getMessages () {
  return doRequest('GET', `users/${window.sessionStorage.userId}/contacts/${window.sessionStorage.chatContextId}/messages`)
}
