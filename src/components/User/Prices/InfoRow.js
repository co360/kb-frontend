import React from "react";

import "./InfoRow.scss";

const InfoRow = (props) => {
  return (
    <tr className="info">
      <td className="description">
        {props.description}
        <div>{props.descriptionAlt}</div>
      </td>
      <td
        className="val"
        style={
          props.val1 === "NO"
            ? { backgroundColor: `#fff` }
            : { backgroundColor: `#e0f98f` }
        }
      >
        {props.val1}
      </td>
      <td
        className="val"
        style={
          props.val2 === "NO"
            ? { backgroundColor: `#fff` }
            : { backgroundColor: `#e0f98f` }
        }
      >
        {props.val2}
      </td>
      <td
        className="val"
        style={
          props.val3 === "NO"
            ? { backgroundColor: `#fff` }
            : { backgroundColor: `#e0f98f` }
        }
      >
        {props.val3}
      </td>
    </tr>
  );
};

export default InfoRow;
