import { pingUrl } from './endpoints'

export function ping () {
  return window.fetch(pingUrl, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${window.sessionStorage.credentials}`
    }
  })
}
