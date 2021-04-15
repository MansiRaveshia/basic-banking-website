
import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


function Bar() {
    return (
        <div>
<Navbar bg="light" expand="lg">
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <li className="nav-item active">
          <a className="nav-link" href="#">Home </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#aboutus">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#bmid">Contact</a>
        </li> 
    </Nav>
</Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Bar
