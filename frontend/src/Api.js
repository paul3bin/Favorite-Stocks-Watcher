const host = process.env.REACT_APP_BACKEND_HOST;

export class API {
  static async loginUser(body) {
    return await fetch(`http://localhost:8000/api/user/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static async registerUser(body) {
    return await fetch(`http://localhost:8000/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static async changeUserPassword(body, token) {
    return await fetch(`http://localhost:8000/api/user/change-password`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static async fetchUserDetails(token) {
    return await fetch(`http://localhost:8000/api/user/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((resp) => resp.json());
  }

  static async fetchCompanyProfile(token, stock_symbol) {
    return await fetch(
      `http://localhost:8000/api/stock/company-profile/${stock_symbol}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    ).then((resp) => resp.json());
  }

  static async fetchStockQuote(token, stock_symbol) {
    return await fetch(
      `http://localhost:8000/api/stock/quote/${stock_symbol}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      }
    ).then((resp) => resp.json());
  }

  static async fetchUserStocks(token) {
    return await fetch(`http://localhost:8000/api/stock`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((resp) => resp.json());
  }

  static async deleteUserStock(token, id) {
    return await fetch(`http://localhost:8000/api/stock/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((resp) => resp.json());
  }

  static async addUserStock(token, body) {
    return await fetch(`http://localhost:8000/api/stock`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }
}
