import React from "react";

import FormInfo from "../../Shared/Contact/FormInfo";

import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <div className="container contact">
      <h3>
        Pide una <span>Cita</span>
      </h3>
      <FormInfo />
    </div>
  );
};

export default ContactForm;
