import React from "react";
import LayOut from "../../components/LayOut/LayOut";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Inputt from "../../components/UI/Input/Inputt";

function SignUp() {
  return (
    <div>
      <LayOut>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form>
                <Row>
                  <Col md={6}>
                    <Inputt
                      label="First Name"
                      placeholder="First Name"
                      value=""
                      type="text"
                      onChange={() => {}}
                    />
                  </Col>
                  <Col md={6}>
                    <Inputt
                      label="Last Name"
                      placeholder="Last Name"
                      value=""
                      type="text"
                      onChange={() => {}}
                    />
                  </Col>
                </Row>
                <Inputt
                  label="Email"
                  placeholder="Email"
                  value=""
                  type="email"
                  onChange={() => {}}
                />

                <Inputt
                  label="Password"
                  placeholder="Password"
                  value=""
                  type="password"
                  onChange={() => {}}
                />
                {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group> */}
                <Button
                  className="btn btn-primary "
                  type="submit"
                  style={{ marginTop: "10px" }}
                >
                  Sign In
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </LayOut>
    </div>
  );
}

export default SignUp;
