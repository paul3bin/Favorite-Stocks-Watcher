import React, { useState, useEffect } from "react";

import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import { API } from "../Api";
import { Wrapper } from "../components/Wrapper";

import "../styles/login.css";
import "react-toastify/dist/ReactToastify.css";

export function Login() {
  document.title = "FSW | Login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const loginEvent = () => {
    if (email.length !== 0 && email.match(validEmailRegex)) {
      if (password.length !== 0) {
        API.loginUser({ email: email, password: password }).then((resp) =>
          setCookie("token", resp.token)
        );
      } else {
        toast.error("Password cannot be empty!", {
          position: toast.POSITION.BOTTOM_CENTER,
          theme: "dark",
        });
      }
    } else {
      toast.error("Enter valid email!", {
        position: toast.POSITION.BOTTOM_CENTER,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    if (cookies["token"] === "undefined") {
      toast.error("Wrong email or password.", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
      });
      removeCookie(["token"]);
    } else {
      if (cookies["token"]) navigate("/home");
    }
  }, [cookies, navigate, removeCookie]);

  return (
    <Wrapper>
      <div className="container">
        <ToastContainer />
        <div className="row justify-content-md-center">
          <div className="card text-dark shadow p-3 mb-3 rounded login-container text-center bg-light bg-gradient">
            <main className="form-signin w-100 m-auto">
              <h1 className="h3 mb-2 fw-normal"> Favorite Stock Watcher</h1>
              <h1 className="h5 mb-3 fw-normal">Log In</h1>

              <div className="form-floating mb-3 shadow">
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="floatingInput">Email</label>
              </div>

              <div class="form-floating mb-3 shadow">
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
                className="w-100 btn btn-lg btn-primary shadow"
                type="submit"
                onClick={loginEvent}
              >
                Login
              </button>
              <p className="mt-4 mb-3 text-muted">
                Don't have an account? Register <Link to="/signup">here</Link>.
              </p>
            </main>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
