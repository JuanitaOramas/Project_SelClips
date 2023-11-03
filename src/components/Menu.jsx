import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function VerticalMenu() {
  return (
    <Navbar bg="body-tertiary" >
      {/* <a className="navbar-brand text-dark " href="#">Navbar</a> */}
      {/* <Navbar.Toggle aria-controls="navbarNav" className="text-dark"/>
      <Navbar.Collapse  id="navbarNav"> */}
      <Nav className="flex-column">
        <Link to="/" active className="text-dark">Home</Link>
        <Link to="/" className="text-dark">Features</Link>
        <Link to="/" className="text-dark">Pricing</Link>
        <Link to="/threads" className="text-dark">Thread</Link>

      </Nav>
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
}

export default VerticalMenu;
