import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavLink,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

export default class NavigationBar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="navbar-container">
        <Navbar.Brand as={Link} to="/toys">
          ToyTrader
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={"/toys"}>
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to={"/aboutUs"}>
              ABOUT US
            </Nav.Link>
            <NavDropdown title="CONTACT" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/thuynguyen-nht">
                Thuy Nguyen
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/ardealto">
                Angel de la Torre
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/suzannaudra">
                Suzann Kowalski
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/Bangdrum">
                Ryan Shepard
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Find a toy!"
              className="Searchbar text-center"
              value={this.props.query}
              onChange={this.props.onChange}
            />
            <Button
              variant="outline-info"
              onClick={this.props.clickHandler}
              onKeyPress={this.props.onKeyPress}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
