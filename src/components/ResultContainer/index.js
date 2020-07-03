import React from "react";
import "./style.css";

function ResultContainer(props) {
  return (
    <div
      className={`container${props.fluid ? "-fluid" : ""} ResultContainer`}
      {...props}
    />
  );
}

export default ResultContainer;
