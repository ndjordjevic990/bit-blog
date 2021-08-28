import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Link to="/">
            <span>BIT BLOG</span>
          </Link>
          <Nav className="me-auto">
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/authors">
              <span>Authors</span>
            </Link>
            <Link to="/about">
              <span>About</span>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
