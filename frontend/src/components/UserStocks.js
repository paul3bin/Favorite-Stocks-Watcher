import React from "react";

import { StockCard } from "./StockCard";
import { ModalCard } from "./Modal";

export function UserStocks(props) {
  const deleteStock = (stock_id) => {
    props.deleteStock(stock_id);
  };

  const stocks =
    props.user_stocks &&
    props.user_stocks.map((stock, i) => {
      return <StockCard stock={stock} stockDelete={deleteStock} />;
    });

  const invokeAddAction = (new_stock) => {
    props.addedStock(new_stock);
  };

  return (
    <div className="mt-5 mb-3 p-3 bg-body rounded shadow">
      <div className="container border-bottom pb-2 mb-1">
        <div className="row">
          <div className="col">
            <h1 className="h6">Your Stocks</h1>
          </div>
          <div className="col text-end">
            {/* Button trigger modal  */}
            <button
              type="button"
              class="btn btn-outline-success btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Add stock ticker
            </button>
          </div>
        </div>
      </div>
      <ModalCard invokeStockAddedAction={invokeAddAction} />
      <div className="list-group w-auto rounded">{stocks}</div>
    </div>
  );
}
