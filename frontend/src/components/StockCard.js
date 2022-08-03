import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import { API } from "../Api";

export function StockCard(props) {
  const [cookies] = useCookies(["token"]);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    API.fetchCompanyProfile(cookies.token, props.stock.stock_symbol).then(
      (resp) => setProfile(resp)
    );
  });

  return (
    <div className="container">
      <a
        href="#"
        className="list-group-item list-group-item-action d-flex gap-3 py-3"
        aria-current="true"
        data-bs-toggle="collapse"
        data-bs-target={`#${props.stock.stock_symbol}`}
        aria-expanded="false"
        aria-controls={`${props.stock.stock_symbol}`}
      >
        <img
          src={profile.logo}
          alt="twbs"
          width="32"
          height="32"
          className="rounded-circle flex-shrink-0"
        />
        <div className="d-flex gap-2 w-100 justify-content-between">
          <div>
            <h6 className="mb-0">{props.stock.stock_symbol}</h6>
            <p className="mb-0 opacity-75">{profile.name}</p>
          </div>
          <small className="opacity-50 text-nowrap">
            Added on:{" "}
            {props.stock.added_on.slice(0, 10).split("-").reverse().join("/")}
          </small>
          <div>
            <a href="#">Delete</a>
          </div>
        </div>
      </a>
      <div className="collapse" id={`${props.stock.stock_symbol}`}>
        <div className="card card-body w-100 mt-1">
          <small>Country: {profile.country}</small>
          <br />
          <small>Exchange: {profile.exchange}</small>
          <br />
          <small>IPO: {profile.ipo}</small>
          <br />
          <small>Website: {profile.weburl}</small>
          <br />
        </div>
      </div>
    </div>
  );
}
