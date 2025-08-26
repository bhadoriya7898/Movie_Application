import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";

function Navbarcom() {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand className="fw-bold text-info">MYFLIX</Navbar.Brand>

        {/* Center Search */}
        <Form className="d-flex mx-auto w-50">
          <FormControl
            type="search"
            placeholder="Search for a movie, tv show, person..."
            className="me-2 rounded-pill px-3"
          />
          <Button variant="outline-light" className="rounded-pill">
            <i className="bi bi-search"></i>
          </Button>
        </Form>

        {/* Right side links */}
        <Nav>
          <Nav.Link className="text-white">+</Nav.Link>
          <Nav.Link className="text-white">EN</Nav.Link>
          <Nav.Link className="text-white">Login</Nav.Link>
          <Nav.Link className="text-white">Join TMDB</Nav.Link>
          <Nav.Link className="text-white">
            <i className="bi bi-search"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navbarcom;
