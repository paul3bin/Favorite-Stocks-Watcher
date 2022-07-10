export class API {
  static loginUser(body) {
    return fetch("http://localhost:8000/api/user/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }
}
