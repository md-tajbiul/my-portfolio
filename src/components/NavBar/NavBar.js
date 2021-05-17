import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className="container">
  <Navbar.Brand href="/" className="navText">Tajbiul</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    
    </Nav>
    <Nav>
      <Nav.Link href="#about" className="navText">About</Nav.Link>
      <Nav.Link href="#portfolio" className="navText">Portfolio</Nav.Link>
      <Nav.Link href="#blog" className="navText">Blog</Nav.Link>
      <Nav.Link href="#contact" className="navText">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
    </Navbar>
    </div>
  );
};

export default NavBar;
