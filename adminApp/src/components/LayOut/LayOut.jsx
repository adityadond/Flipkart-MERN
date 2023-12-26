import React from "react";
import Header from "../Header/Header";

function LayOut(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default LayOut;
