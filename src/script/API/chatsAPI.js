import { chatsUrl } from './endpoints'

export function getChatsUpdate () {
  return window.fetch(chatsUrl, {
    headers: {
      Authorization: `Basic ${window.sessionStorage.credentials}`
    }
  }).then(res => {
    return res.json()
  })
}
