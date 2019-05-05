import { doRequest } from './fetchWrapper'
import { defaultUrl } from './endpoints'

export function getAllUsersList () {
  return doRequest('GET', 'users')
}

export function registerNewUser (username, password) {
  return doRequest('POST', 'users', { username, password })
}

export function updateUserProfile (name, password = undefined) {
  return doRequest('PUT', `users/${window.sessionStorage.userId}`, { name, password })
}

export function loginExistingUser (userName, pass) {
  return window.fetch(`${defaultUrl}/me`, {
    headers: {
      Authorization: `Basic ${window.btoa(`${userName}:${pass}`)}`
    }
  }).then(res => {
    return res.json()
  })
}

export function getLoggedInUserInfo () {
  return doRequest('GET', 'me')
}
