import { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function ButtonCreate() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div style={{marginRight: "10px"}}>
        <Button variant="primary" onClick={handleShow}>
          Edit User
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
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
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Edit User
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default ButtonCreate;
