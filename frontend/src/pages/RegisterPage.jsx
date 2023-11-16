import { Button, Form, Card } from "react-bootstrap";
import { useState } from "react";

function RegisterPage() {
  const [username, setUsername] = useState();
  // const [role, setRole] = useState();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  return (
    <>
      <Card style={{ width: "50%", margin: "auto", marginTop: "100px" , padding: "40px"}}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Form Register
        </h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>
          <p>Role</p>
          <Form.Select
            className="mb-3"
            aria-label="Default select example"
            style={{ marginTop: "-10px" }}
          >
            <option>Choose your role</option>
            <option value="1">User</option>
            <option value="2">Admin</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" style={{ width: "100%" }}>
            Submit
          </Button>
        </Form>
      </Card>

    </>
  );
}

export default RegisterPage;
