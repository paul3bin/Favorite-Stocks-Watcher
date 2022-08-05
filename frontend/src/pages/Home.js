import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { toast, ToastContainer } from "react-toastify";

import { API } from "../Api";
import { Wrapper } from "../components/Wrapper";
import { SuggestedStocks } from "../components/SuggestedStocks";
import { UserStocks } from "../components/UserStocks";

import "react-toastify/dist/ReactToastify.css";

export function HomePage() {
  document.title = "FSW | Home";

  const [cookies] = useCookies(["token"]);
  const [userName, setUserName] = useState("");
  const [userStocks, setUserStocks] = useState([]);

  const deleteStockAction = (stock_id) => {
    const user_stock_list = userStocks.filter((n) => n.id !== stock_id);
    setUserStocks(user_stock_list);
  };

  const stockAddedAction = (new_stock) => {
    setUserStocks([...userStocks, new_stock]);
    toast.success("Stock ticker added!", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
    });
  };

  useEffect(() => {
    API.fetchUserDetails(cookies.token).then((resp) => setUserName(resp.name));
    API.fetchUserStocks(cookies.token).then((resp) => setUserStocks(resp));
  }, [cookies.token]);

  return (
    <Wrapper username={userName}>
      <main class="container">
        <ToastContainer />
        <UserStocks
          user_stocks={userStocks}
          deleteStock={deleteStockAction}
          addedStock={stockAddedAction}
        />

        <SuggestedStocks />
      </main>
    </Wrapper>
  );
}
