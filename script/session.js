export function checkSession () {
  let pathname = window.location.pathname
  if (!window.sessionStorage.getItem('userId')) {
    if (pathname.includes('/index.html') || pathname.includes('/register.html')) {

    } else {
      window.location.replace('./index.html')
    }
  } else if (pathname.includes('/index.html') || pathname.includes('/register.html')) {
    window.location.replace('./chat.html')
  }
}

export function logout () {
  window.sessionStorage.removeItem('userId')
  window.sessionStorage.removeItem('credentials')
  window.sessionStorage.removeItem('chatContextId')
  window.sessionStorage.removeItem('chatUpdates')
  window.sessionStorage.removeItem('chatContextName')
  window.sessionStorage.removeItem('userStatuses')
  checkSession()
}

export function storeCredentials (userId, username, password) {
  window.sessionStorage.setItem('userId', userId)
  window.sessionStorage.setItem('credentials', btoa(`${username}:${password}`))
}

export function setChatContext (chatId, chatName) {
  window.sessionStorage.setItem('chatContextId', chatId)
  window.sessionStorage.setItem('chatContextName', chatName)
}

export function setUserStatuses (userStatuses) {
  window.sessionStorage.setItem('userStatuses', userStatuses)
}

export function setChatsUpdates (chatUpdates) {
  window.sessionStorage.setItem('chatUpdates', chatUpdates)
}