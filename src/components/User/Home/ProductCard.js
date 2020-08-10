import React from "react";
import { Card } from "react-bootstrap";

import "./ProductCard.scss";

const ProductCard = (props) => {
  return (
    <Card
      className={`home-cards__card mt-3`}
      style={{ backgroundImage: `url("${props.backImg}")` }}
    >
      <div className="bg-color">{""}</div>
      {props.title}
    </Card>
  );
};

export default ProductCard;
