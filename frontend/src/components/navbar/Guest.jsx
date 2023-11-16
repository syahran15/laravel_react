import { Nav, Navbar, Container, Button, Form } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import Home from "../../layouts/Home";

function Guest() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" style={{ padding: "20px" }}>
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button
                variant="success"
                href="/form-login"
                style={{ marginRight: "10px" }}
              >
                Login
              </Button>
              <Button variant="primary" href="/form-register">
                Register
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form-register" element={<RegisterPage />} />
        <Route path="/form-login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default Guest;
