import React from "react";
import { Link } from "react-router-dom";

import "../styles/home.css";

export function Nav() {
  return (
    <nav
      class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark "
      aria-label="Main navigation"
    >
      <div class="container-fluid">
        <Link className="navbar-brand" to="/home">
          Favorite Stock Watcher
        </Link>

        <div class="navbar" id="navbarsExampleDefault">
          <div class="dropdown text-end">
            <a
              href="#"
              class="d-block link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></a>
          </div>
        </div>
      </div>
    </nav>
  );
}
