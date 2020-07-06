import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import "./style.css";

export default class NavigationBar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="navbar-container">
        <Navbar.Brand href="/toys">ToyTrader</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/toys">HOME</Nav.Link>
            <Nav.Link href="">ABOUT US</Nav.Link>
            <NavDropdown title="CONTACT " id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/thuynguyen-nht">Thuy Nguyen</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/ardealto">Angel de la Torre</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/suzannaudra">Suzann Kowalski</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/Bangdrum">Ryan Shepard</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Find a toy!" className="Searchbar text-center" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
