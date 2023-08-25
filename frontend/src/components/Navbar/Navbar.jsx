import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login/Login';

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
              <Nav.Link href="#projects">Products</Nav.Link>
              <Nav.Link href="#aboutus">About Us</Nav.Link>
              <Nav.Link href="#contactus">Contact Us</Nav.Link>
              <Nav.Link ><Login /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default DatamlNavbar;
