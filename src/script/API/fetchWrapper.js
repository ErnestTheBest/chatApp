import { defaultUrl } from './endpoints'

export function doRequest (method, path, body = undefined, authorization = true) {
  console.log(`DoRequest. ${method} , ${path}`)
  return window.fetch(`${defaultUrl + '/' + path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization ? `Basic ${window.sessionStorage.credentials}` : undefined
    },
    body: body ? JSON.stringify(body) : undefined
  }).then(res => {
    if (res.status !== 204) return res.json()
  })
}
