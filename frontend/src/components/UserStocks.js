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
  );
}
