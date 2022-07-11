import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";

import { API } from "../Api";

import "react-toastify/dist/ReactToastify.css";

import "../styles/login.css";

export function Login() {
  document.title = "FSW | Login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const loginEvent = () => {
    if (email.length === 0) {
      toast.error("Email is required!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
    } else {
      API.loginUser({ email: email, password: password }).then((resp) =>
        setCookie("token", resp.token)
      );
    }
  };

  useEffect(() => {
    if (cookies["token"] === "undefined") {
      toast.error("Wrong email or password.", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored",
      });
      removeCookie(["token"]);
      setEmail("");
      setPassword("");
    } else {
      if (cookies["token"]) navigate("/home");
    }
  }, [cookies]);

  return (
    <div className="container">
      <ToastContainer />
      <div className="row justify-content-md-center">
        <div className="card text-dark bg-light shadow p-3 mb-3 rounded">
          <div className="text-center">
            <main className="form-signin w-100 m-auto">
              <h1 className="h3 mb-3 fw-normal">Sign In</h1>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="floatingInput">Email address</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  required={true}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label for="floatingPassword">Password</label>
              </div>

              <button
                className="w-100 btn btn-lg btn-primary"
                type="submit"
                onClick={loginEvent}
              >
                Sign in
              </button>
              <p className="mt-5 mb-3 text-muted">
                Don't have an account? Register <Link to="/signup">here</Link>.
              </p>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
