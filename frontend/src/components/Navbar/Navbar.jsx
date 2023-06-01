import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Login from './Login/Login';

const DatamlNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Data ML Project</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#projects">Products</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#directorship">Directorship</Nav.Link>
            <Nav.Link href="#contactus">Contact Us</Nav.Link>
            <Nav.Link href="#Login" style={{backgroundColor: "white", color: "black", borderRadius: "16px", marginLeft: "10px"}}>Log In</Nav.Link>
            <Nav.Link href="#signup" style={{backgroundColor: "white", color: "black", borderRadius: "16px", gap: "6px", marginLeft: "10px"}}>Sign Up</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default DatamlNavbar;