import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Menu.css';
import logo from "../logoSelfClips.png";

function VerticalMenu() {
  return (

      <Navbar className="sidebar" bg="body-tertiary">
        <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
        <Nav  className="flex-column">
          <Link to="/" className="text-dark d-flex align-items-center">
            <i style={{ color: 'rgb(56,74,88) ' }} className="bi bi-house-fill"></i> &nbsp;Home
          </Link>
          <Link to="/login" className="text-dark align-items-center">
           <i style={{ color: 'rgb(56,74,88) ' }} class="bi bi-door-open-fill"></i>&nbsp;Login
          </Link>
          <Link to="/account" className="text-dark align-items-center">
          <i style={{ color: 'rgb(56,74,88) ' }} class="bi bi-person-fill"></i>Profile
          </Link>
          <Link to="/threads" className="text-dark align-items-center">
          <i style={{ color: 'rgb(56,74,88)' }} class="bi bi-chat-square-heart-fill"></i>Forum
          </Link>
        </Nav>
      </Navbar>

  );
}

export default VerticalMenu;
