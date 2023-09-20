import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbar.scss'

const DatamlNavbar = () => {
  return (
    <>
      <Navbar sticky="top" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#image">Data ML Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* sandwich toggle for when screen resolution is equivalent to mobile devices */}
          <Navbar.Collapse id="basic-navbar"> {/* collapsed navbar */}
            <Nav className="me-auto">
              <Nav.Link href="#image">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Link to="/views/directorship" className="nav-link">
            Directorship
          </Link>
              <Nav.Link href="#projects">Products</Nav.Link>
              <Nav.Link href="#aboutus">About Us</Nav.Link>
              <Nav.Link href="#contactus">Contact Us</Nav.Link>
              <a href='https://dataml.auth.us-east-1.amazoncognito.com/login?client_id=2bcudra8uccse9hh1dceu5hci8&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fdataml.io%2F' 
              className="nav-link login-button">Login</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default DatamlNavbar;
