import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { API } from "../Api";
import { Wrapper } from "../components/Wrapper";

export function HomePage() {
  document.title = "FSW | Home";

  const [cookies] = useCookies(["token"]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    API.fetchUserDetails(cookies.token).then((resp) => setUserName(resp.name));
  }, []);

  return (
    <Wrapper username={userName}>
      <main class="container">
        <div class="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm"></div>

        <div class="my-3 p-3 bg-body rounded shadow-sm">
          <h6 class="border-bottom pb-2 mb-0">
            Your Stocks
            <div class="btn-toolbar justify-content-end">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                New Note
              </button>
            </div>
          </h6>
          <div class="d-flex text-muted pt-3">
            <svg
              class="bd-placeholder-img flex-shrink-0 me-2 rounded"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 32x32"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#007bff" />
              <text x="50%" y="50%" fill="#007bff" dy=".3em">
                32x32
              </text>
            </svg>

            <p class="pb-3 mb-0 small lh-sm border-bottom">
              <strong class="d-block text-gray-dark">@username</strong>
              Some representative placeholder content, with some information
              about this user. Imagine this being some sort of status update,
              perhaps?
            </p>
          </div>
          <div class="d-flex text-muted pt-3">
            <svg
              class="bd-placeholder-img flex-shrink-0 me-2 rounded"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 32x32"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#e83e8c" />
              <text x="50%" y="50%" fill="#e83e8c" dy=".3em">
                32x32
              </text>
            </svg>

            <p class="pb-3 mb-0 small lh-sm border-bottom">
              <strong class="d-block text-gray-dark">@username</strong>
              Some more representative placeholder content, related to this
              other user. Another status update, perhaps.
            </p>
          </div>
          <div class="d-flex text-muted pt-3">
            <svg
              class="bd-placeholder-img flex-shrink-0 me-2 rounded"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 32x32"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#6f42c1" />
              <text x="50%" y="50%" fill="#6f42c1" dy=".3em">
                32x32
              </text>
            </svg>

            <p class="pb-3 mb-0 small lh-sm border-bottom">
              <strong class="d-block text-gray-dark">@username</strong>
              This user also gets some representative placeholder content. Maybe
              they did something interesting, and you really want to highlight
              this in the recent updates.
            </p>
          </div>
          <small class="d-block text-end mt-3">
            <a href="#">All updates</a>
          </small>
        </div>

        <div class="my-3 p-3 bg-body rounded shadow-sm">
          <h6 class="border-bottom pb-2 mb-0">Suggested stocks</h6>
          <div class="d-flex text-muted pt-3">
            <svg
              class="bd-placeholder-img flex-shrink-0 me-2 rounded"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 32x32"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#007bff" />
              <text x="50%" y="50%" fill="#007bff" dy=".3em">
                32x32
              </text>
            </svg>

            <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div class="d-flex justify-content-between">
                <strong class="text-gray-dark">Full Name</strong>
                <a href="#">Follow</a>
              </div>
              <span class="d-block">@username</span>
            </div>
          </div>
          <div class="d-flex text-muted pt-3">
            <svg
              class="bd-placeholder-img flex-shrink-0 me-2 rounded"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 32x32"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#007bff" />
              <text x="50%" y="50%" fill="#007bff" dy=".3em">
                32x32
              </text>
            </svg>

            <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div class="d-flex justify-content-between">
                <strong class="text-gray-dark">Full Name</strong>
                <a href="#">Follow</a>
              </div>
              <span class="d-block">@username</span>
            </div>
          </div>
          <div class="d-flex text-muted pt-3">
            <svg
              class="bd-placeholder-img flex-shrink-0 me-2 rounded"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: 32x32"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#007bff" />
              <text x="50%" y="50%" fill="#007bff" dy=".3em">
                32x32
              </text>
            </svg>

            <div class="pb-3 mb-0 small lh-sm border-bottom w-100">
              <div class="d-flex justify-content-between">
                <strong class="text-gray-dark">Full Name</strong>
                <a href="#">Follow</a>
              </div>
              <span class="d-block">@username</span>
            </div>
          </div>
          <small class="d-block text-end mt-3">
            <a href="#">All suggestions</a>
          </small>
        </div>
      </main>
    </Wrapper>
  );
}
