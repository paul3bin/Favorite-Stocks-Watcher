import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import "../styles/home.css";

export function Nav(props) {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const isAuthenticated = cookies.token;

  const navigate = useNavigate();

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
                href="#"
                onClick={() => {
                  removeCookie(["token"]);
                  navigate("/login");
                }}
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ) : (
    <div></div>
  );
}
