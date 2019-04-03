import { defaultUrl } from './endpoints'

export function getAllUsersList () {
  return window.fetch(`${defaultUrl}/users`, {
    headers: {
      Authorization: `Basic ${window.sessionStorage.credentials}`
    }
  }).then(res => {
    return res.json()
  })
}

export function registerNewUser (userName, pass) {
  return window.fetch(`${defaultUrl}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username: userName, password: pass})
  }).then(res => {
    return res.json()
  })
}

export function updateUserProfile (name, password = undefined) {
  return window.fetch(`${defaultUrl}/users/${window.sessionStorage.userId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Basic ${window.sessionStorage.credentials}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, password})
  }).then(res => {
    return res.ok
  })
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
  return window.fetch(`${defaultUrl}/me`, {
    headers: {
      Authorization: `Basic ${window.sessionStorage.credentials}`
    }
  }).then(res => {
    console.log(res)
    return res.json()
  })
}
