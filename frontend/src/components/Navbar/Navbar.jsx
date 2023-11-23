import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.scss';

const DatamlNavbar = () => {
  const [expanded, setExpanded] = useState(false); // Start with the navigation closed
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        // Click occurred outside the navigation menu, so close it
        setExpanded(false);
      }
    }

    // Add the event listener when the component mounts
    document.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Navbar sticky="top" expand="lg" bg="dark" variant="dark" expanded={expanded} ref={navRef}>
        <Container>
          <Navbar.Brand href="#image">Data ML Project</Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setExpanded(!expanded)}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar">
            <Nav className="me-auto">
              <HashLink to="/#image" className="nav-link">Home</HashLink>
              <HashLink to="/#services" className="nav-link">Services</HashLink>
              <Link to="/views/directorship" className="nav-link">
                Directorship
              </Link>
              <HashLink to="/#projects" offset={-160} className="nav-link">Products</HashLink>
              <HashLink to="/#aboutus" className="nav-link">About Us</HashLink>
              <HashLink to="/#contactus" className="nav-link">Contact Us</HashLink>
              <a
                href='https://dataml.auth.us-east-1.amazoncognito.com/login?client_id=2bcudra8uccse9hh1dceu5hci8&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fdataml.io%2F'
                className="nav-link login-button"
              >
                Login
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default DatamlNavbar;
