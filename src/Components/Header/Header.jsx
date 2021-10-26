import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
// import "./Header.css/header.css";

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Link to="/">
            <span className="text-white">BIT BLOG</span>
          </Link>
          <Nav className="justify-content-end">
            <Link to="/">
              <span className="text-white p-2">Home</span>
            </Link>
            <Link to="/authors">
              <span className="text-white p-2">Authors</span>
            </Link>
            <Link to="/about">
              <span className="text-white p-2">About</span>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
