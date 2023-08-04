import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login/Login';
import { Link } from 'react-router-dom';
import Contact from './ContactUs/Contact';


const DatamlNavbar = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Data ML Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* sandwich toggle for when screen resolution is equivalent to mobile devices */}
          <Navbar.Collapse id="basic-navbar"> {/* collapsed navbar */}
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#projects">Products</Nav.Link>
              <Nav.Link href="#aboutus">About Us</Nav.Link>
              <Nav.Link as={Link} to="#" onClick={handleContactClick}>ContactUs</Nav.Link>
              <Nav.Link ><Login /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showContactForm && <Contact onClose={handleCloseContactForm} />}

    </>
  );
}

export default DatamlNavbar;
