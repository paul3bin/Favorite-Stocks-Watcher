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

  useEffect(() => {
    API.fetchUserDetails(cookies.token).then((resp) => setUserName(resp.name));
  }, [cookies.token]);

  return (
    <Wrapper username={userName}>
      <main class="container">
        <UserStocks />

        <SuggestedStocks />
      </main>
    </Wrapper>
  );
}
