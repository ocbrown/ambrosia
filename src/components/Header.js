import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar sticky={true} bg="danger">
      <Container>
        <Navbar.Brand href="#home" className="mx-auto">
          {/* <img
            alt="Ambrosia logo"
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "} */}
          <span className="text-warning">Ambrosia</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
