import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

import { API } from "../Api";

export function StockCard(props) {
  const [cookies] = useCookies(["token"]);
  const [profile, setProfile] = useState({});
  const [stockQuote, setStockQuote] = useState({});

  const deleteStock = (stock_id) => {
    API.deleteUserStock(cookies.token, stock_id);
    props.stockDelete(stock_id);
  };

  useEffect(() => {
    API.fetchCompanyProfile(cookies.token, props.stock.stock_symbol).then(
      (resp) => setProfile(resp)
    );
    API.fetchStockQuote(cookies.token, props.stock.stock_symbol).then((resp) =>
      setStockQuote(resp)
    );
  }, []);

  return (
    <div className="accordion-item mb-2 border">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${props.stock.stock_symbol}`}
          aria-expanded="true"
          aria-controls={`collapse${props.stock.stock_symbol}`}
        >
          <img
            src={profile.logo}
            alt="twbs"
            width="32"
            height="32"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between mx-2">
            <div>
              <h6 className="mb-0">{props.stock.stock_symbol}</h6>
              <p className="mb-0 opacity-75">{profile.name}</p>
            </div>
          </div>
        </button>
      </h2>
      <div
        id={`collapse${props.stock.stock_symbol}`}
        className="accordion-collapse mb-2 mt-2 collapse bg-light"
        aria-labelledby={`heading${props.stock.stock_symbol}`}
        data-bs-parent="#accordionExample"
      >
        <div className="row">
          <div className="col">
            <small>Country: {profile.country}</small>
            <br />
            <small>Exchange: {profile.exchange}</small>
            <br />
            <small>IPO: {profile.ipo}</small>
            <br />
          </div>
          <div className="col">
            <small>Current Price: {stockQuote.current_price}</small>
            <br />
            <small>Percentage Change: {stockQuote.percent_change}</small>
            <br />
            <small>Opening Price: {stockQuote.opening_price}</small>
            <br />
            <small>
              Previous Closing Price: {stockQuote.previous_closing_price}
            </small>
            <br />
          </div>
          <div className="col text-end">
            <button
              type="button"
              className="btn btn-sm btn-outline-danger mt-2"
              onClick={() => deleteStock(props.stock.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
