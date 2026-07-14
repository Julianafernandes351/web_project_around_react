
class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  async getInitialCards() {
    const response = await fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    });

    return response.json();
  }
  async getUserInfo() {
    const response = await fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    });

    return response.json();
  }

  // Método para adicionar um novo cartão (POST)
addCard({name, link}) {
  return fetch(`${this._baseUrl}/cards`, {
    method: 'POST',
    headers: this._headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
  .then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`Erro ao adicionar cartão: ${res.status}`);
  });
}

deleteCard(cardId) {
  return fetch(`${this._baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: this._headers
  })
  .then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`Erro ao excluir cartão: ${res.status}`);
  });
}

// Método para adicionar curtida (PUT)
likeCard(cardId) {
  return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
    method: 'PUT',
    headers: this._headers
  })
  .then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`Erro ao curtir: ${res.status}`);
  });
}

// Método para remover curtida (DELETE)
dislikeCard(cardId) {
  return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
    method: 'DELETE',
    headers: this._headers
  })
  .then(res => {
    if (res.ok) return res.json();
    return Promise.reject(`Erro ao descurtir: ${res.status}`);
  });
}
  setUserAvatar({avatar}) {
  return fetch(`https://around-api.pt-br.tripleten-services.com/v1/users/me/avatar`, {
    method: "PATCH",
    headers: this._headers,
    body: JSON.stringify({
      avatar: avatar
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Erro: ${res.status}`);
  });
}
changeLikeCardStatus(cardID, like) {
    
    return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
      method: like ? 'PUT' : 'DELETE',
      headers: this._headers,
    }).then(this._handleServerResponse);
  }

  _handleServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }
  setUserInfo({name, about}) {
  return fetch(`${this._baseUrl}/users/me`, {
    method: "PATCH",
    headers: this._headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Erro: ${res.status}`);
  });
}
}

const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
   method: "PATCH",
  headers: {
    authorization: "b1d0d695-90dd-48d6-9537-b67eec2fba9e",
    "Content-Type": "application/json"
  },

});




export default api;
