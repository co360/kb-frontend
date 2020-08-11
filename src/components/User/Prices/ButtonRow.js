import React from "react";

import "./ButtonRow.scss";

const InfoRow = () => {
  return (
    <tr className="table-buttons">
      <td className="description"></td>
      <td className="val">
        <span className="btn">Solicitar</span>
      </td>
      <td className="val">
        <span className="btn">Solicitar</span>
      </td>
      <td className="val">
        <span className="btn">Solicitar</span>
      </td>
    </tr>
  );
};

export default InfoRow;
