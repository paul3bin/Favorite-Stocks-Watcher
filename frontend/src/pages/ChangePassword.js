import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { API } from "../Api";
import { Wrapper } from "../components/Wrapper";

import "react-toastify/dist/ReactToastify.css";
import "../styles/signup.css";

export function ChangePassword() {
  document.title = "FSW | Sign-Up";

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordReEntered, setNewPasswordReEntered] = useState("");

  const navigate = useNavigate();

  const [cookies] = useCookies(["token"]);

  const isSamePassword = () => {
    return newPassword === newPasswordReEntered;
  };

  const changePasswordAction = () => {
    if (oldPassword.length !== 0) {
      if (newPassword.length !== 0 || newPasswordReEntered.length !== 0) {
        if (isSamePassword()) {
          API.changeUserPassword(
            {
              old_password: oldPassword,
              new_password: newPassword,
            },
            cookies["token"]
          ).then((resp) =>
            resp.message === "Incorrect old password"
              ? toast.error(
                  "Incorrect old password",
                  {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                  },
                  [
                    setOldPassword(""),
                    setNewPassword(""),
                    setNewPasswordReEntered(""),
                  ]
                )
              : toast.success(
                  "Password updated successfully!",
                  {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "dark",
                  },
                  [
                    setOldPassword(""),
                    setNewPassword(""),
                    setNewPasswordReEntered(""),
                    navigate("/home"),
                  ]
                )
          );
        } else {
          toast.error("Passwords do not match!", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark",
          });
        }
      } else {
        toast.error("Password cannot be empty!", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "dark",
        });
      }
    } else {
      toast.error("Enter your old password!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
      });
    }
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
                <label for="floatingInput">Old-Password</label>
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
                onClick={changePasswordAction}
              >
                Submit
              </button>
            </main>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
