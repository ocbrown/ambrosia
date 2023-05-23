import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="danger" className="fixed-bottom">
      <Container>
        <Nav className="mx-auto">
          <Nav.Item>
            <span className="text-warning">Oliver Brown</span>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
