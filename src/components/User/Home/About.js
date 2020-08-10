import React from "react";
import { Jumbotron } from "react-bootstrap";

import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h3>
          Acerca de <span>Mi</span>
        </h3>
      </div>

      <Jumbotron className="about-content">
        <div className="container">
          <div className="about-content__img mb-3">{""}</div>
          <div className="about-content__description">
            <p>
              Como nutrióloga, me apasiona el poder cambiar y/o mejorar el
              estilo de vida de mis pacientes para que puedan sentirse más
              felices y llenos de vida. La nutrición es muy importante en cada
              etapa de nuestra vida, desde que estamos en el vientre materno
              hasta que envejecemos.​
              <br />
              <br />
              Es por eso que he decidido crear esta página, para poder lograr mi
              objetivo, que es el poder mejorar y/o controlar su estado
              nutricional mediante planes de alimentación personalizados y
              asesoramiento profesional. Por favor, ponte en contacto para
              conocer los servicios nutricionales, planes disponibles, paquetes
              y más servicios que tengo para ti.
              <br />
              <br />
              ¡Te ayudaré a lograr tus objetivos!
              <br />
              <br />
              L.N: Karla A. Lara Baltazar
            </p>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default About;
