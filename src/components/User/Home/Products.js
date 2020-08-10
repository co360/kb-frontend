import React from "react";

import ProductCard from "../../../components/User/Home/ProductCard";

import body from "../../../assets/img/healthy-body.jpg";
import lose from "../../../assets/img/healthy-lose.jpg";
import pregnant from "../../../assets/img/healthy-pregnant.jpg";
import mind from "../../../assets/img/healthy-mind.jpg";

import "./Products.scss";

const Products = () => {
  return (
    <div className="home-cards d-none d-lg-flex d-xl-flex d-md-flex">
      <ProductCard
        title={
          <p>
            <span>Pérdida y Ganancia</span> de peso
          </p>
        }
        keyCard="card-1"
        backImg={body}
      />
      <ProductCard
        title={
          <p>
            Nutrición <span>Deportiva</span>
          </p>
        }
        keyCard="card-2"
        backImg={lose}
      />
      <ProductCard
        title={
          <p>
            Nutrición y <span>Embarazo</span>
          </p>
        }
        keyCard="card-3"
        backImg={pregnant}
      />
      <ProductCard
        title={
          <p>
            Nutrición <span>Clínica</span>
          </p>
        }
        keyCard="card-4"
        backImg={mind}
      />
    </div>
  );
};

export default Products;
