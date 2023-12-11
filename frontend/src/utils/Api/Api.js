class Api {
  constructor({ url, headers }) {
    this._url = url
    this._headers = headers
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getInitialTracker() {
    // return fetch("http://127.0.0.1:8000/api/tracker/", {
    return fetch("https://tracker.ddnsking.com/api/tracker", {
      method: "GET",
      headers: { "content-type": "application/json" },
    }).then((res) => this._checkResponse(res))
  }
}


export const api = new Api({
  // url: "http://127.0.0.1:8000",
  headers: {
    "content-type": "application/json"
  }
})
