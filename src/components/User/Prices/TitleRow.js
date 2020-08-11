import React from "react";

import "./TitleRow.scss";

const TitleRow = () => {
  return (
    <tr className="titles">
      <th className="description">Compara nuestros paquetes</th>
      <th className="val">Consulta Online</th>
      <th className="val">Consulta Presencial</th>
      <th className="val">Consulta Nutricional Deportiva</th>
    </tr>
  );
};

export default TitleRow;
