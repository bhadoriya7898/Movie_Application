import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";

function Navbarcom() {
  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className="px-3"
      style={{
        background: "linear-gradient(90deg, rgba(0,198,255,0.9), rgba(0,114,255,0.9))",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.2)"
      }}
    >
      <Container fluid className="d-flex justify-content-between align-items-center">

        {/* Brand Logo */}
        <Navbar.Brand 
          className="fw-bold fs-3" 
          style={{
            background: "linear-gradient(90deg, #fff, #00c6ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          MYFLIX
        </Navbar.Brand>

        {/* Search Bar */}
        <div className="flex-grow-1 d-flex justify-content-center">
          <Form className="d-flex w-50 position-relative">
            <FormControl
              type="search"
              placeholder="Search for a movie, tv show, person..."
              className="rounded-pill px-4 transition"
              style={{
                transition: "all 0.3s ease",
                border: "1px solid rgba(255,255,255,0.3)",
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "white"
              }}
              onFocus={(e) => e.target.style.width = "100%"}
              onBlur={(e) => e.target.style.width = "50%"}
            />
            <Button 
              variant="light" 
              className="rounded-pill ms-2 px-3"
              style={{ transition: "0.3s", backgroundColor: "white", color: "#0072ff", fontWeight: "bold" }}
            >
              <i className="bi bi-search"></i>
            </Button>
          </Form>
        </div>

        {/* Right Side Links */}
        <Nav className="d-flex align-items-center gap-3 fs-6">
          <Nav.Link className="text-white hover-effect">+</Nav.Link>
          <Nav.Link className="text-white hover-effect">EN</Nav.Link>
          <Nav.Link className="text-white hover-effect">Login</Nav.Link>
          <Nav.Link className="text-white hover-effect">Join MYFLIX</Nav.Link>
          <Nav.Link className="text-white hover-effect fs-5">
            <i className="bi bi-search"></i>
          </Nav.Link>
        </Nav>
      </Container>

      {/* Extra CSS */}
      <style>{`
        .hover-effect {
          position: relative;
          transition: color 0.3s ease;
        }
        .hover-effect:hover {
          color: #fff !important;
          text-shadow: 0 0 10px #00c6ff;
        }
        .transition:focus {
          outline: none !important;
          box-shadow: 0 0 10px rgba(255,255,255,0.6);
        }
      `}</style>
    </Navbar>
  );
}

export default Navbarcom;
