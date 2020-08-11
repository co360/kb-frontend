import React from "react";

import TitleRow from "./TitleRow";
import InfoRow from "./InfoRow";
import ButtonRow from "./ButtonRow";

import "./ProductTable.scss";

const ProductTable = () => {
  return (
    <table className="product-table">
      <thead>
        <TitleRow />
      </thead>
      <tbody>
        <InfoRow
          description="Precios"
          descriptionAlt="Aplicables únicamente a consultas individuales"
          val1="$250.0"
          val2="$300.0"
          val3="$400.0"
        />
        <InfoRow
          description="Precios de Promoción"
          descriptionAlt="Aplicables únicamente al número de consultas indicadas"
          val1="$400.0 x 2"
          val2="$1000.0 x 4"
          val3="$1200.0 x 4"
        />
        <InfoRow
          description="Historia clínica"
          descriptionAlt=""
          val1="SÍ"
          val2="SÍ"
          val3="SÍ"
        />
        <InfoRow
          description="Menú personalizado"
          descriptionAlt=""
          val1="SÍ"
          val2="SÍ"
          val3="SÍ"
        />
        <InfoRow
          description="Lista de intercambio de alimentos"
          descriptionAlt=""
          val1="SÍ"
          val2="SÍ"
          val3="SÍ"
        />
        <InfoRow
          description="Lista de super"
          descriptionAlt=""
          val1="SÍ"
          val2="SÍ"
          val3="SÍ"
        />
        <InfoRow
          description="Asesoría online"
          descriptionAlt=""
          val1="SÍ"
          val2="SÍ"
          val3="SÍ"
        />
        <InfoRow
          description="Mediciones"
          descriptionAlt="% grasa, kg musculo, % agua, densidad osea, grasa viceral, IMC, cintura, cadera, abdomen, talla y peso"
          val1="NO"
          val2="SÍ"
          val3="SÍ"
        />
        <InfoRow
          description="Planeador fitness"
          descriptionAlt=""
          val1="NO"
          val2="SÍ"
          val3="SÍ"
        />
        <InfoRow
          description="Asesoría por WhatsApp"
          descriptionAlt=""
          val1="NO"
          val2="SÍ"
          val3="SÍ"
        />
        <InfoRow
          description="17 mediciones avaladas por ISAK"
          descriptionAlt=""
          val1="NO"
          val2="NO"
          val3="SÍ"
        />
        <InfoRow
          description="Diagnóstico y somatocarta"
          descriptionAlt=""
          val1="NO"
          val2="NO"
          val3="SÍ"
        />
        <ButtonRow />
      </tbody>
    </table>
  );
};

export default ProductTable;
