import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/Home">Fake Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/Product">Product</Nav.Link>

          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Action">Action</NavDropdown.Item>
            <NavDropdown.Item href="/Action">Another action</NavDropdown.Item>
            <NavDropdown.Item href="/Action">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Action">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
