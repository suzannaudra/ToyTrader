import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'

export default class NavigationBar extends Component {

    render() {
        return (

            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/toys">ToyTrader</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/toys">Toys</Nav.Link>
                        <Nav.Link href="/toys/add">Add a Toy to Toy Trader</Nav.Link>
                        <Nav.Link href="/users/add">Create User</Nav.Link>
                        <Nav.Link href="/savedtoys">Saved Toys</Nav.Link>
                        <Nav.Link href="/toys/update">Update Toy</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}