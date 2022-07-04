import React from "react";
import { Link } from "react-router-dom";

export function PageNotFound() {
  document.title = "FSW | Page Not Found";

  return (
    <div className="d-flex h-100 text-center text-white bg-dark bg-gradient">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main className="px-3">
          <h1>404 | Page not found!</h1>
          <p className="lead">Login to continue.</p>
          <p class="lead">
            <Link
              to="/login"
              class="btn btn-lg btn-secondary fw-bold border-white bg-white"
            >
              Login
            </Link>
          </p>
        </main>
      </div>
    </div>
  );
}
