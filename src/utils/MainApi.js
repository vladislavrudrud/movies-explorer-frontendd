class MainApi {
  _token = null;

  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._checkToken();
  }

  async _response(response) {
    if (response.ok) {
      return response.json();
    }

    try {
      const result = await response.json();
      throw new Error(
        `Произошла ошибка: ${response.status} ${result?.message}`
      );
    } catch (error) {
      throw error;
    }
  }

  async _request(url, options) {
    const response = await fetch(url, options);
    return this._response(response);
  }

  async _checkToken() {
    const token = localStorage.getItem("token");
    if (token) {
      this._token = token;
      try {
        await this._request(`${this._baseUrl}/users/me`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${this._token}`,
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.error("Ошибка проверки токена:", error);
        this.removeToken();
      }
    }
  }

  async register(body) {
    const result = await this._request(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    this._token = result.token;
    localStorage.setItem("token", result.token);
    return result;
  }

  async login(body) {
    const result = await this._request(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: body.email,
        password: body.password,
      }),
    });
    this._token = result.token;
    localStorage.setItem("token", result.token);
    return result;
  }

  async checkToken() {
    if (!this._token) {
      throw new Error("Токен не задан");
    }
    return await this._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this._token}`,
        "Content-Type": "application/json",
      },
    });
  }

  async getProfile() {
    return await this._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this._token}`,
        "Content-Type": "application/json",
      },
    });
  }

  async getInitialCards() {
    return await this._request(`${this._baseUrl}/movies/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this._token}`,
        "Content-Type": "application/json",
      },
    });
  }

  async addCard(data) {
    return await this._request(`${this._baseUrl}/movies/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this._token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: "https://api.nomoreparties.co" + data.image.url,
        trailerLink: data.trailerLink,
        thumbnail:
          "https://api.nomoreparties.co" + data.image.formats.thumbnail.url,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    });
  }

  async deleteCard(id) {
    return await this._request(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${this._token}`,
        "Content-Type": "application/json",
      },
    });
  }

  async setProfile(data) {
    return await this._request(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${this._token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    });
  }

  removeToken() {
    this._token = null;
    localStorage.removeItem("token");
  }
}

export const mainApi = new MainApi({
  baseUrl: "https://api.kolos.nomoredomainswork.ru",
  headers: {
    "Content-Type": "application/json",
  },
});
