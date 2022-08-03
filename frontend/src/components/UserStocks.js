import React from "react";

import { StockCard } from "./StockCard";

export function UserStocks(props) {
  const stocks =
    props.user_stocks &&
    props.user_stocks.map((stock, i) => {
      return <StockCard stock={stock} />;
    });

  return <div className="mt-5 mb-3 list-group w-auto">{stocks}</div>;
}
