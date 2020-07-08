import React, { Component } from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";


export default class AboutUs extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={12} xs={10}>
                        <h1>Who are we?</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} xs={10}>
                        <h2>
                            We're a small team of devolopers setting out to help parents and kids sell and trade the toy's they're tired of!
                        </h2>
                    </Col>
                </Row>
            </Container>
        );
    }
}