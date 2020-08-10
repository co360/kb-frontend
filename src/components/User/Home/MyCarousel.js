import React from "react";
import { Carousel } from "react-bootstrap";
import "./MyCarousel.scss";

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="bg-dark">
          <div className="d-flex justify-content-center item-key-1">{""}</div>
        </div>
        <Carousel.Caption>
          <h3>Pérdida y ganancia de peso</h3>
          <p>Mejores deciciones</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="bg-dark">
          <div className="d-flex justify-content-center item-key-2">{""}</div>
        </div>
        <Carousel.Caption>
          <h3>Nutrición deportiva</h3>
          <p>Tú, pero más sano</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="bg-dark">
          <div className="d-flex justify-content-center item-key-3">{""}</div>
        </div>
        <Carousel.Caption>
          <h3>Nutrición y embarazo</h3>
          <p>La orientación que necesitas</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="bg-dark">
          <div className="d-flex justify-content-center item-key-4">{""}</div>
        </div>
        <Carousel.Caption>
          <h3>Nutrición clínica</h3>
          <p>
            Diabetes Mellitus, colesterol y trigliceridos elevados, VIH, Hiper e
            hipotiroidismo y más
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
