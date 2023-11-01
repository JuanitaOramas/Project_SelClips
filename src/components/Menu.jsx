import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function VerticalMenu() {
  return (
    <Navbar bg="body-tertiary" >
      {/* <a className="navbar-brand text-dark " href="#">Navbar</a> */}
      {/* <Navbar.Toggle aria-controls="navbarNav" className="text-dark"/>
      <Navbar.Collapse  id="navbarNav"> */}
      <Nav className="flex-column">
        <Nav.Link href="#" active className="text-dark">Home</Nav.Link>
        <Nav.Link href="#" className="text-dark">Features</Nav.Link>
        <Nav.Link href="#" className="text-dark">Pricing</Nav.Link>

      </Nav>
      {/* </Navbar.Collapse> */}
    </Navbar>
  );
}

export default VerticalMenu;
