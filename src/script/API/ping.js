import { defaultUrl } from './endpoints'

export function ping () {
  return window.fetch(`${defaultUrl}/ping`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${window.sessionStorage.credentials}`
    }
  })
}
