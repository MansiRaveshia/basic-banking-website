
import React, { Component } from 'react'; 
import { Navbar, Nav } from 'react-bootstrap';
import {HashLink as Link} from 'react-router-hash-link';


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
          <Link to='/#footersect' className="nav-link" href="#aboutus">Address</Link>
        </li>
        <li className="nav-item">
        <Link to='/#footersect' className="nav-link" href="#bmid">Contact</Link>
        </li> 
    </Nav>
</Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Bar
