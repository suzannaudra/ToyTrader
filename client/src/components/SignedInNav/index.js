import React, { Component } from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../Image/fun-logo.png";
import { Container } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListIcon from "@material-ui/icons/List";

class SignedInNav extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <img src={logo} alt="Fun Ex Change Logo" />
                    </Col>
                    <Col xs lg="1" className="px-1 pt-5 text-right">
                        {/* plug in username in dropdown "title" */}
                        <NavDropdown
                            className="usernav"
                            title={this.props.firstName}
                            id="collasible-nav-dropdown"
                        >
                            <NavDropdown.Item href="/savedtoys">
                                {" "}
                                <FavoriteIcon style={{ color: "red" }} /> Favorites
              </NavDropdown.Item>
                            <NavDropdown.Item href="/toys/add">
                                {" "}
                                <ListIcon style={{ color: "blue" }} /> Your Listing
              </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item id="SignOut" onClick={this.props.kickUser}>
                                {" "}
                                <ExitToAppIcon style={{ color: "red" }} /> Sign Out
              </NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default SignedInNav;
