import { defaultUrl } from './endpoints'

export function getChatsUpdate () {
  return window.fetch(`${defaultUrl}/users/${window.sessionStorage.userId}/chats`, {
    headers: {
      Authorization: `Basic ${window.sessionStorage.credentials}`
    }
  }).then(res => {
    return res.json()
  })
}
