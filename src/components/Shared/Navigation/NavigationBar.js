import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import logo from "../../../assets/img/logo.png";
import "./NavigationBar.scss";

const NavigationBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      onToggle={() => setIsExpanded(!isExpanded)}
      expanded={isExpanded}
    >
      <Navbar.Brand href="/">
        <div>
          <img alt="Logotipo" src={logo} width="30" height="30" />{" "}
          <span>Balance Nutricion KB</span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Link to="/" onClick={() => setIsExpanded(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsExpanded(false)}>
            About
          </Link>
          <Link to="/blog" onClick={() => setIsExpanded(false)}>
            Blog
          </Link>
          <Link to="/contact" onClick={() => setIsExpanded(false)}>
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
