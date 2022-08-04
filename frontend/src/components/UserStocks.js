import React from "react";

import { StockCard } from "./StockCard";

export function UserStocks(props) {
  const stocks =
    props.user_stocks &&
    props.user_stocks.map((stock, i) => {
      return <StockCard stock={stock} />;
    });

  return (
    <div className="mt-5 mb-3 p-3 bg-body rounded shadow">
      <h6 className="border-bottom pb-2 mb-0">Your Stocks</h6>
      <div className="list-group w-auto rounded">{stocks}</div>
    </div>
  );
}
