import React, { Component } from "react";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../Image/fun-logo.png";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class LogInNav extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <img src={logo} alt="Fun Ex Change Logo" />
          </Col>
          <Col xs lg="1" className="px-1 pt-5 text-right">
            <Link
              to={{
                pathname: "/user/add",
                state: {
                  isResgister: true
                }
              }}
              className="btn btn-warning"
            >
              Login
            </Link>
          </Col>
          <Col xs lg="1" className="px-0 pt-5">
            <Link
              to={{
                pathname: "/user/add",
                state: {
                  isResgister: false
                }
              }}
              className="btn btn-warning"
            >
              Sign Up
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default LogInNav;
