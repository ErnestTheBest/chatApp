import { defaultUrl } from './endpoints'

export class FetchWrapper {
  #applicationUrl = defaultUrl;

  get(path, authorization = true) {
    return window.fetch(`${this.#applicationUrl + path}`, {
      headers: {
        Authorization: authorization ? `Basic ${window.sessionStorage.credentials}` : undefined
      }
    }).then(res => {
      return res.json()
    })
  }

  post(path, requestBody) {

  }

  put(path, requestBody) {

  }
}