import React, { useState } from "react";

import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../styles/signup.css";

export function SignUp() {
  document.title = "FSW | Sign-Up";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordReEnter, setPasswordReEnter] = useState("");

  const isSamePassword = () => {
    return password === passwordReEnter;
  };

  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const registerEvent = () => {
    if (name.length !== 0) {
      if (email.match(validEmailRegex)) {
        if (password.length !== 0) {
          if (password.length >= 8) {
            if (passwordReEnter.length !== 0) {
              if (isSamePassword) {
                toast.success("User registered! Login to continue.", {
                  position: toast.POSITION_TOP_RIGHT,
                  theme: "dark",
                });
              } else {
                toast.error("Passwords do not match!", {
                  position: toast.POSITION_TOP_RIGHT,
                  theme: "dark",
                });
              }
            } else {
              toast.error("Re-Enter password!", {
                position: toast.POSITION_TOP_RIGHT,
                theme: "dark",
              });
            }
          } else {
            toast.error("Password should be atleast 8 characters!", {
              position: toast.POSITION_TOP_RIGHT,
              theme: "dark",
            });
          }
        } else {
          toast.error("Password cannot be empty", {
            position: toast.POSITION_TOP_RIGHT,
            theme: "dark",
          });
        }
      } else {
        toast.error("Enter valid email!", {
          position: toast.POSITION_TOP_RIGHT,
          theme: "dark",
        });
      }
    } else {
      toast.error("Name field cannot be empty!", {
        position: toast.POSITION_TOP_RIGHT,
        theme: "dark",
      });
    }
  };

  return (
    <div className="container">
      <ToastContainer />
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={passwordReEnter}
                onChange={(e) => setPasswordReEnter(e.target.value)}
              />
              <label for="floatingPassword2">Re-enter Password</label>
            </div>

            <button
              className="w-100 btn btn-lg btn-primary"
              type="submit"
              onClick={registerEvent}
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
