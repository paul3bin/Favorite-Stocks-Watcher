import React from "react";
import { Nav } from "./Nav";

import "../styles/home.css";

export function Wrapper(props) {
  return (
    <div className="container p-3">
      <Nav />
      {props.children}
      {/* <Footer /> */}
    </div>
  );
}
