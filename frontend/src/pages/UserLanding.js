import React from "react";
import { Link } from "react-router-dom";

import "../styles/landing.css";

export function Landing() {
  document.title = "FSW | Welcome";

  return (
    <div className="container landing-container">
      <div className="d-flex h-100 text-center text-dark bg-white">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <main className="px-3">
            <h1 className="h2">Favorite Stock Watcher</h1>
            <div>
              <p className="lead">Login to continue.</p>
              <p class="lead">
                <Link
                  to="/login"
                  class="btn btn-lg btn-secondary border-white bg-dark shadow"
                >
                  Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
