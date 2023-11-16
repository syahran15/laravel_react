import { Button, Form, Nav, Navbar, Container } from "react-bootstrap";

function Navigation() {
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
              <Nav.Link href="/">Dashboard</Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button
                variant="success"
                style={{ marginRight: "10px" }}
                href="/form-login"
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
    </>
  );
}

export default Navigation;
