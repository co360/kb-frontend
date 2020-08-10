import React from "react";
import { Form, Button } from "react-bootstrap";

import "./FormInfo.scss";

const FormInfo = () => {
  return (
    <Form className="contact-form">
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Introduzca su nombre</Form.Label>
        <Form.Control placeholder="Nombre Completo" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Dirección de correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default FormInfo;
