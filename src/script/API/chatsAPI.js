import { doRequest } from './fetchWrapper'

export function getChatsUpdate () {
  return doRequest('GET', `users/${window.sessionStorage.userId}/chats`)
}
