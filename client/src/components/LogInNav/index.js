import React, { Component } from "react";
import "./style.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../Image/fun-logo.png'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';


class LogInNav extends Component {
    // state = {
    //     userIsRegistered: false
    // };

    // logIn = event => {
    //     event.preventDefault();
    //     this.setState({ userIsRegistered: true })
    // }

    // signUp = event => {
    //     event.preventDefault();
    //     this.setState({ userIsRegistered: false })
    // }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <img src={logo} />
                    </Col>
                    <Col xs lg="1" className="px-1 pt-5 text-right">
                        <Link to={{
                            pathname: "/users/indentify", state: {
                                isResgister: true
                            }
                        }} className="btn btn-warning">Login</Link>

                    </Col>
                    <Col xs lg="1" className="px-0 pt-5">
                        <Link to={{
                            pathname: "/users/indentify", state: {
                                isResgister: false
                            }
                        }} className="btn btn-warning">Sign Up</Link>
                    </Col>
                </Row>
            </Container>
        )
    }

}
export default LogInNav;

