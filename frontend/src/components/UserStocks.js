import React from "react";
import { useCookies } from "react-cookie";

export function UserStocks() {
  return (
    <div className="container">
      <div class="mt-5 mb-3 list-group w-auto">
        <a
          href="#"
          class="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <img
            src="https://github.com/twbs.png"
            alt="twbs"
            width="32"
            height="32"
            class="rounded-circle flex-shrink-0"
          />
          <div class="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 class="mb-0">List group item heading</h6>
              <p class="mb-0 opacity-75">
                Some placeholder content in a paragraph.
              </p>
            </div>
            <small class="opacity-50 text-nowrap">now</small>
          </div>
        </a>
        <div class="collapse" id="collapseExample">
          <div class="card card-body w-100 mt-1">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </div>
    </div>

    // <div className="mt-5 mb-3 p-3 bg-body rounded shadow-sm">
    //   <h6 className="border-bottom pb-2 mb-0">
    //     Your Stocks
    //     <div className="btn-toolbar justify-content-end">
    //       <button
    //         type="button"
    //         className="btn btn-sm btn-outline-secondary"
    //         data-bs-toggle="modal"
    //         data-bs-target="#staticBackdrop"
    //       >
    //         Add Stock
    //       </button>
    //     </div>
    //   </h6>
    //   <div className="d-flex text-muted pt-3">
    //     <svg
    //       className="bd-placeholder-img flex-shrink-0 me-2 rounded"
    //       width="32"
    //       height="32"
    //       xmlns="http://www.w3.org/2000/svg"
    //       role="img"
    //       aria-label="Placeholder: 32x32"
    //       preserveAspectRatio="xMidYMid slice"
    //       focusable="false"
    //     >
    //       <title>Placeholder</title>
    //       <rect width="100%" height="100%" fill="#007bff" />
    //       <text x="50%" y="50%" fill="#007bff" dy=".3em">
    //         32x32
    //       </text>
    //     </svg>

    //     <p className="pb-3 mb-0 small lh-sm border-bottom">
    //       <strong className="d-block text-gray-dark">@username</strong>
    //       Some representative placeholder content, with some information about
    //       this user. Imagine this being some sort of status update, perhaps?
    //     </p>
    //   </div>
    //   <div className="d-flex text-muted pt-3">
    //     <svg
    //       className="bd-placeholder-img flex-shrink-0 me-2 rounded"
    //       width="32"
    //       height="32"
    //       xmlns="http://www.w3.org/2000/svg"
    //       role="img"
    //       aria-label="Placeholder: 32x32"
    //       preserveAspectRatio="xMidYMid slice"
    //       focusable="false"
    //     >
    //       <title>Placeholder</title>
    //       <rect width="100%" height="100%" fill="#e83e8c" />
    //       <text x="50%" y="50%" fill="#e83e8c" dy=".3em">
    //         32x32
    //       </text>
    //     </svg>

    //     <p className="pb-3 mb-0 small lh-sm border-bottom">
    //       <strong className="d-block text-gray-dark">@username</strong>
    //       Some more representative placeholder content, related to this other
    //       user. Another status update, perhaps.
    //     </p>
    //   </div>
    //   <div className="d-flex text-muted pt-3">
    //     <svg
    //       className="bd-placeholder-img flex-shrink-0 me-2 rounded"
    //       width="32"
    //       height="32"
    //       xmlns="http://www.w3.org/2000/svg"
    //       role="img"
    //       aria-label="Placeholder: 32x32"
    //       preserveAspectRatio="xMidYMid slice"
    //       focusable="false"
    //     >
    //       <title>Placeholder</title>
    //       <rect width="100%" height="100%" fill="#6f42c1" />
    //       <text x="50%" y="50%" fill="#6f42c1" dy=".3em">
    //         32x32
    //       </text>
    //     </svg>

    //     <p className="pb-3 mb-0 small lh-sm border-bottom">
    //       <strong className="d-block text-gray-dark">@username</strong>
    //       This user also gets some representative placeholder content. Maybe
    //       they did something interesting, and you really want to highlight this
    //       in the recent updates.
    //     </p>
    //   </div>
    //   <small className="d-block text-end mt-3">
    //     <a href="#">All updates</a>
    //   </small>
    // </div>
  );
}
