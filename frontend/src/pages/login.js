import React from "react";
import { Link } from "react-router-dom";

import "../styles/login.css";

export function Login() {
  document.title = "FSW | Login";

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="card text-dark bg-light shadow p-3 mb-3 rounded">
          <div className="text-center">
            <main class="form-signin w-100 m-auto">
              <form>
                <h1 class="h3 mb-3 fw-normal">Sign In</h1>

                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">
                  Sign in
                </button>
                <p class="mt-5 mb-3 text-muted">
                  Don't have an account? Register <Link to="/signup">here</Link>
                  .
                </p>
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
