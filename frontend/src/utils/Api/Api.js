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
        return fetch(this._url + "/api/tracker/", {
            method: "GET",
            headers: this._headers
        }).then((res) => this._checkResponse(res))
    }

    getInitialRecommendations() {
        return fetch(this._url + "/tracker/recommendations", {
            method: "GET",
            headers: this._headers
        }).then((res) => this._checkResponse(res))
    }
}

export const api = new Api({
    url: "http://localhost:3000",
    headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "content-type": "application/json"
    }
})
