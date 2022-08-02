import React from "react";
import { Link } from "react-router-dom";

import { useCookies } from "react-cookie";

export function PageNotFound() {
  document.title = "FSW | Page Not Found";

  const [cookies] = useCookies(["token"]);
  const isAuthenticated = cookies.token;

  return (
    <div className="d-flex h-100 text-center text-dark bg-white">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main className="px-3">
          <h1>404 | Page not found!</h1>
          {isAuthenticated ? (
            <div>
              <p className="lead">Go back home</p>
              <p class="lead">
                <Link
                  to="/home"
                  class="btn btn-lg btn-secondary fw-bold border-white bg-dark"
                >
                  Home
                </Link>
              </p>
            </div>
          ) : (
            <div>
              <p className="lead">Login to continue.</p>
              <p class="lead">
                <Link
                  to="/login"
                  class="btn btn-lg btn-secondary fw-bold border-white bg-dark"
                >
                  Login
                </Link>
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
