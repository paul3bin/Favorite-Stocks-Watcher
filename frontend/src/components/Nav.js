import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

import "../styles/home.css";

export function Nav() {
  const [cookie] = useCookies(["token"]);
  const isAuthenticated = cookie["token"];

  return isAuthenticated ? (
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
  ) : (
    <div class="container">
      <header class="d-flex flex-wrap justify-content-center justify-content-md-between border-bottom">
        <Link
          to="/"
          className="row align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <span class="fs-4">FSW</span>
        </Link>

        <div class="col-md-3 text-end">
          <Link type="button" class="btn btn-outline-primary me-2" to="/login">
            Login
          </Link>
          <Link type="button" class="btn btn-primary" to="/signup">
            Sign-up
          </Link>
        </div>
      </header>
    </div>
  );
}
