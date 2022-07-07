import React from "react";

const Wrapper = (props) => {
  return (
    <div className="d-flex h-100 text-center text-white bg-dark bg-gradient">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        {/* <Nav /> */}
        {props.children}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Wrapper;
