import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Login from './Login/Login';

const DatamlNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Data ML Project</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/projects">Products DP</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            <Nav.Link as={Link} to="/directorship">Directorship</Nav.Link>
            <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
            <Nav.Link ><Login /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default DatamlNavbar;
