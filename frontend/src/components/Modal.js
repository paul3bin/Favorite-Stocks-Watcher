import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { API } from "../Api";

export function ModalCard(props) {
  const [stockTicker, setStockTicker] = useState("");
  const [company, setCompany] = useState(null);

  const [cookies] = useCookies(["token"]);

  const addTicker = () => {
    API.addUserStock(cookies.token, {
      stock_symbol: stockTicker,
      company_name: company,
    })
      .then((resp) => props.invokeStockAddedAction(resp))
      .catch((error) => console.log(error));

    if (stockTicker !== "" || company !== "") {
      setStockTicker("");
      setCompany(null);
    }
  };

  const cancelAddingTicker = () => {
    if (stockTicker !== "" || company !== "") {
      setStockTicker("");
      setCompany(null);
    }
  };

  return (
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Modal title
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={cancelAddingTicker}
            ></button>
          </div>
          <div class="modal-body">
            <form>
              {/* Stock ticker input */}
              <div class="mb-3">
                <label for="stock-ticker-name" class="col-form-label">
                  Stock Ticker:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="stock-ticker-name"
                  required={true}
                  value={stockTicker}
                  onChange={(e) => setStockTicker(e.target.value.toUpperCase())}
                />
              </div>
              {/* Company name input */}
              <div class="mb-3">
                <label for="message-text" class="col-form-label">
                  Company Name (optional):
                </label>
                <textarea
                  class="form-control"
                  id="message-text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                ></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={cancelAddingTicker}
            >
              Close
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={addTicker}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
