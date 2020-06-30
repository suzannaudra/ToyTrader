import React, { Component } from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../Image/fun-logo.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import FavoriteIcon from '@material-ui/icons/Favorite';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
                        <NavDropdown className="usernav" title="Ryan" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"> <FavoriteIcon style={{ color: "red" }} /> Favorites</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"> <SaveAltIcon style={{ color: "blue" }} /> Saved</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item id="SignOut" href="#action/3.3"> <ExitToAppIcon style={{ color: "red" }} /> Sign Out</NavDropdown.Item>

                        </NavDropdown>
                    </Col>

                </Row>
            </Container>
        )
    }
}
export default SignedInNav;