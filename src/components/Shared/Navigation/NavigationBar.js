import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import logo from "../../../assets/img/logo.jpeg";
import "./NavigationBar.scss";

const NavigationBar = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ selected: "" });
  let path = props.location.pathname;

  useEffect(() => {
    initialConfig();
  });

  useEffect(() => {
    if (selectedOption.selected !== "") {
      document.getElementById(selectedOption.selected).classList.add("active");
    }
  }, [selectedOption]);

  const initialConfig = () => {
    if (path === "/") {
      document.getElementById("home").classList.add("active");
    } else {
      document.getElementById(path.split("/")[1]).classList.add("active");
      return path.split("/")[1];
    }
  };

  const activePathHandler = (event) => {
    const activeValue = event.target.id;
    setIsExpanded(false);
    document.querySelector("#home").classList.remove("active");
    document.querySelector("#prices").classList.remove("active");
    document.querySelector("#blog").classList.remove("active");
    document.querySelector("#contact").classList.remove("active");
    setSelectedOption({ selected: activeValue });
  };

  return (
    <Navbar
      expand="md"
      onToggle={() => setIsExpanded(!isExpanded)}
      expanded={isExpanded}
      bg="color"
    >
      <Navbar.Brand href="/" className="w-75">
        <img alt="Logotipo" src={logo} className="img-fluid w-75" />
      </Navbar.Brand>
      <Navbar.Toggle children={<span className="material-icons">menu</span>} />
      <Navbar.Collapse className="d-md-flex justify-content-end">
        <Nav>
          <h3 className="w-100 d-lg-none d-xl-none d-md-none">
            Menú de Opciones
          </h3>
          <Link
            className="w-100"
            id="home"
            to="/"
            onClick={(event) => activePathHandler(event)}
          >
            Inicio
          </Link>
          <Link
            className="w-100"
            id="prices"
            to="/prices"
            onClick={(event) => activePathHandler(event)}
          >
            Paquetes
          </Link>
          <Link
            className="w-100"
            id="blog"
            to="/blog"
            onClick={(event) => activePathHandler(event)}
          >
            Blog
          </Link>
          <Link
            className="w-100"
            id="contact"
            to="/contact"
            onClick={(event) => activePathHandler(event)}
          >
            Contacto
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(NavigationBar);
