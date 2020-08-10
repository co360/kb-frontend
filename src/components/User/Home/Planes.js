import React from "react";

import Plan from "./Plan";

import computerImg from "../../../assets/img/computer.png";
import homeImg from "../../../assets/img/home.png";
import sportImg from "../../../assets/img/sport.png";

import "./Planes.scss";

const Planes = () => {
  return (
    <div className="products">
      <h3>
        Obtén tu plan 100% <span>Personalizado</span>
      </h3>
      <blockquote className="quote">
        Cuida de tu cuerpo y el resto se volverá automáticamente más fuerte.
        <div>-Chuang Tzu</div>
      </blockquote>
      <div className="products-detail">
        <Plan title="Consulta Online" backColor="#FFC1B0" backImg={computerImg}>
          <ul>
            <li>Historia clínica</li>
            <li>Menú personalizado</li>
            <li>Lista de intercambio de alimentos</li>
            <li>Lista de super (marcas sugeridas) </li>
            <li>Asesoria online</li>
          </ul>
        </Plan>
        <Plan title="Consulta Presencial" backColor="#E2FFB0" backImg={homeImg}>
          <ul>
            <li>Historia clínica</li>
            <li>
              Mediciones (% grasa, % musculo, % agua, densidad osea, grasa
              visceral, IMC, cintura, cadera, abdomen, talla y peso)
            </li>
            <li>Menu personalizado</li>
            <li>Lista de intercambio de alimentos</li>
            <li>Lista de super (marcas sugeridas) </li>
            <li>Planeador Fitness</li>
            <li>Asesoria por WhatsApp</li>
          </ul>
        </Plan>
        <Plan
          title="Consulta Nutricional Deportiva"
          backColor="#FFB0E5"
          backImg={sportImg}
        >
          <ul>
            <li>Historia clínica</li>
            <li>17 mediciones avaladas por la certificación ISAK</li>
            <li>Plan de alimentación personalizado</li>
            <li>Lista de intercambio de alimentos</li>
            <li>Lista de super (marcas sugeridas) </li>
            <li>Planeador Fitness</li>
            <li>Asesoria por WhatsApp</li>
          </ul>
        </Plan>
      </div>
    </div>
  );
};

export default Planes;
