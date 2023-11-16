import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

function LoginPage() {
  const { http, setToken } = useAuth();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();

  const submit = () => {
    //api call

    http.post("/login", { email: email, password: password }).then((res) => {
      setToken(res.data.user, res.data.access_token);

      console.log("ini data user", res.data);
    });
  };
  return (
    <>
      <Card
        style={{
          width: "50%",
          margin: "auto",
          marginTop: "100px",
          padding: "40px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Form Login
        </h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We&apos;ll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" onClick={submit} style={{ width: "100%" }}>
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
}

export default LoginPage;
