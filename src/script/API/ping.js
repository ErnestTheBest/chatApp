import { doRequest } from './fetchWrapper'

export function ping () {
  return doRequest('POST', 'ping')
}
