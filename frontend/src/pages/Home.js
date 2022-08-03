import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import { API } from "../Api";
import { Wrapper } from "../components/Wrapper";
import { SuggestedStocks } from "../components/SuggestedStocks";
import { UserStocks } from "../components/UserStocks";

export function HomePage() {
  document.title = "FSW | Home";

  const [cookies] = useCookies(["token"]);
  const [userName, setUserName] = useState("");
  const [userStocks, setUserStocks] = useState([]);

  useEffect(() => {
    API.fetchUserDetails(cookies.token).then((resp) => setUserName(resp.name));
    API.fetchUserStocks(cookies.token).then((resp) => setUserStocks(resp));
  }, [cookies.token]);

  return (
    <Wrapper username={userName}>
      <main class="container">
        <UserStocks user_stocks={userStocks} />

        <SuggestedStocks />
      </main>
    </Wrapper>
  );
}
