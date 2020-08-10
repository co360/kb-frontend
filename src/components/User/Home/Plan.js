import React from "react";

import "./Plan.scss";

const Plan = (props) => {
  return (
    <div className="plan" style={{ backgroundColor: props.backColor }}>
      <h4>{props.title}</h4>
      {props.children}
      <span className="material-icons push-pin">push_pin</span>
      <span
        className="productImg"
        style={{ backgroundImage: `url("${props.backImg}")` }}
      >
        {""}
      </span>
    </div>
  );
};

export default Plan;
