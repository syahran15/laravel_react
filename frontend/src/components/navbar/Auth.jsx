import { Nav, Navbar, Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../layouts/Dashboard";
import Home from "../../layouts/Home";

function Auth() {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ padding: "20px" }}
      >
        <Container fluid>
          <Navbar.Brand href="">Coding Test</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default Auth;
