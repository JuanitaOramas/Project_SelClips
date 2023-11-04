import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Menu.css';
import logo from "../logoSelfClips.png";

function VerticalMenu() {
  return (
    <div className="page-container">
      <Navbar className="sidebar" bg="body-tertiary">
        <img src={logo} alt="Logo" className="logo" />
        <Nav className="flex-column">
          <Link to="/" className="text-dark">Home</Link>
          <Link to="/login" className="text-dark">Login</Link>
          <Link to="/account" className="text-dark">Account</Link>
          <Link to="/threads" className="text-dark">Thread</Link>
        </Nav>
      </Navbar>
      <div className="content-container">
        <div className="content">
          {/* Your main content goes here */}
        </div>
      </div>
    </div>
  );
}

export default VerticalMenu;
