import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" style={{marginBottom:"40px"}}>
      <Navbar.Brand href="#home">MERN APP</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <NavLink
            to="/"
            activeClassName="active-link"
            className="app-link"
          >
            Home
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
