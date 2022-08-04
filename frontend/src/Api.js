export class API {
  static async loginUser(body) {
    return await fetch("/user/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static async registerUser(body) {
    return await fetch("/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static async changeUserPassword(body, token) {
    return await fetch("/user/change-password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static async fetchUserDetails(token) {
    return await fetch("/user/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((resp) => resp.json());
  }

  static async fetchCompanyProfile(token, stock_symbol) {
    return await fetch(`stock/company-profile/${stock_symbol}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((resp) => resp.json());
  }

  static async fetchStockQuote(token, stock_symbol) {
    return await fetch(`stock/quote/${stock_symbol}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((resp) => resp.json());
  }

  static async fetchUserStocks(token) {
    return await fetch("stock/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((resp) => resp.json());
  }

  static async deleteUserStock(token, id) {
    return await fetch(`stock/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
    }).then((resp) => resp.json());
  }
}
