import React from "react";

import { Wrapper } from "../components/Wrapper";

export function Landing() {
  document.title = "FSW | Welcome";

  return (
    <Wrapper>
      <div className="container">
        <h1>Landing page</h1>
      </div>
    </Wrapper>
  );
}
