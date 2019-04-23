import { defaultUrl} from './endpoints'

export function sendMessage (messageText) {
  return window.fetch(`${defaultUrl}/users/${window.sessionStorage.userId}/contacts/${window.sessionStorage.chatContextId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${window.sessionStorage.credentials}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({message: messageText})
  }).then(res => {
    return res.json()
  })
}

export function getMessages () {
  return window.fetch(`${defaultUrl}/users/${window.sessionStorage.userId}/contacts/${window.sessionStorage.chatContextId}/messages`, {
    headers: {
      Authorization: `Basic ${window.sessionStorage.credentials}`
    }
  }).then(res => {
    return res.json()
  })
}
