import React from "react";

import ProductTable from "../../../components/User/Prices/ProductTable";

import "./Prices.scss";

const About = () => {
  return (
    <div className="prices container">
      <h3>
        Compara y selecciona un <span>Paquete</span>
      </h3>
      <ProductTable />
    </div>
  );
};

export default About;
