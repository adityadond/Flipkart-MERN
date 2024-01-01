import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            Admin Dashboard
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <li className="nav-item">
                <NavLink to="/signIn" className="nav-link">
                  Sign In
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/signUp" className="nav-link">
                  {" "}
                  Sign Up
                </NavLink>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
