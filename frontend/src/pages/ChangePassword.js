import React, { useState } from "react";

import { toast, ToastContainer } from "react-toastify";

import { API } from "../Api";
import { Wrapper } from "../components/Wrapper";

import "react-toastify/dist/ReactToastify.css";
import "../styles/signup.css";

export function ChangePassword() {
  document.title = "FSW | Sign-Up";

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordReEntered, setNewPasswordReEntered] = useState("");

  const isSamePassword = () => {
    return newPassword === newPasswordReEntered;
  };

  return (
    <Wrapper>
      <div className="container">
        <ToastContainer />
        <div className="row justify-content-md-center">
          <div className="card text-dark bg-white shadow rounded text-center signup-container">
            <main className="form-signin w-100 m-auto">
              <h1 className="h3 mb-3 fw-normal">Change Password</h1>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Name"
                  required={true}
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                <label for="floatingInput">Name</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword1"
                  placeholder="Password"
                  required={true}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
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
                  value={newPasswordReEntered}
                  onChange={(e) => setNewPasswordReEntered(e.target.value)}
                />
                <label for="floatingPassword2">Re-enter Password</label>
              </div>

              <button
                className="w-100 btn btn-lg btn-primary"
                type="submit"
                // onClick={registerEvent}
              >
                Register
              </button>
            </main>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
