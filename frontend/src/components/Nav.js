import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

import "../styles/home.css";

export function Nav(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const isAuthenticated = cookies.token;

  return isAuthenticated ? (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark "
      aria-label="Main navigation"
    >
      <div className="container-fluid">
        <Link className="navbar-brand ms-2" to="/home">
          Favorite Stock Watcher
        </Link>

        <div className="dropstart text-end me-3">
          <a
            href="#"
            className="d-block link-light text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {props.username}
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li>
              <a className="dropdown-item" href="/change-password">
                Change Password
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item"
                href="/login"
                onClick={() => removeCookie(["token"])}
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ) : (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center justify-content-md-between border-bottom">
        <Link
          to="/"
          className="row align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <span className="fs-4">FSW</span>
        </Link>

        <div className="col-md-3 text-end">
          <Link
            type="button"
            className="btn btn-outline-primary me-2"
            to="/login"
          >
            Login
          </Link>
          <Link type="button" className="btn btn-primary" to="/signup">
            Sign-up
          </Link>
        </div>
      </header>
    </div>
  );
}
