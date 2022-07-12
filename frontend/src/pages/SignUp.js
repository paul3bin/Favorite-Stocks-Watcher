import React from "react";

import { Link } from "react-router-dom";

import "../styles/signup.css";

export function SignUp() {
  document.title = "FSW | Sign-Up";
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="card text-dark bg-white shadow rounded text-center signup-container">
          <main className="form-signin w-100 m-auto">
            <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Name"
                required={true}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <label for="floatingInput">Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required={true}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <label for="floatingInput">Email</label>
            </div>

            <div class="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword1"
                placeholder="Password"
                required={true}
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <label for="floatingPassword1">Password</label>
            </div>

            <div class="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword2"
                placeholder="Password"
                required={true}
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <label for="floatingPassword2">Re-enter Password</label>
            </div>

            <button
              className="w-100 btn btn-lg btn-primary"
              type="submit"
              // onClick={loginEvent}
            >
              Register
            </button>

            <p className="mt-5 mb-3 text-muted">
              Already have an account? Login <Link to="/login">here</Link>.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
}
