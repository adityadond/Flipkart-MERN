import React, { useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Inputt from "../../components/UI/Input/Inputt";
import { login } from "../../components/actions/auth.action";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const handleKeyDown = (e) => {
    // Check if the backspace key is pressed (keyCode 8)
    if (e.keyCode === 8) {
      // Prevent default behavior of the backspace key
      e.preventDefault();
      // Modify the password state to remove the last character
      setPassword(password.slice(0, -1));
    }
  };
  const userLogin = (e) => {
    e.preventDefault();
    const user = { email: "aditya@gmail.com", password: "123456" };
    login(user);
  };
  return (
    <div>
      <LayOut>
        <Container>
          <Row style={{ marginTop: "50px" }}>
            <Col md={{ span: 6, offset: 3 }}>
              <Form onSubmit={userLogin}>
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
                  value={password}
                  type={showPassword ? "text" : "password"}
                  onChange={passwordHandler}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "32%",
                    right: "30%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                  }}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </span>
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

export default SignIn;
