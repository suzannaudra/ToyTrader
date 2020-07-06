import React, { Component } from "react";
import "./style.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import logo from "../../components/Image/fun-logo.png";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

// import CommentBox from "../../components/CommentSection/index";

export default class Toy extends Component {

    render() {
        return (
            <div>
                <h3>{this.props.location.state.props.toyname}</h3>
                <hr></hr>
                <br></br>
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={6}>
                            <Card.Img src={this.props.location.state.props.image} />
                        </Col>
                        <Col className="description-text" xs={12} sm={6}>

                            <Card body className="text-center">
                                {" "}
                                <Card.Header>{this.props.location.state.props.condition}</Card.Header>
                                <Card.Body>
                                    <Card.Title>Description</Card.Title>
                                    <Card.Text>
                                        {this.props.location.state.props.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <div className="text-center">
                                <Col xs={12}>
                                    <Row className="centerrow">
                                        <Col xs={3} sm={2}>
                                            <IconButton
                                                className="favorite"
                                                color="secondary"
                                            // savedtoyList={props.savedtoyList}
                                            >
                                                <FavoriteIcon className="favorite material-icons" />
                                            </IconButton>
                                        </Col>
                                        <Col xs={3} sm={2}>
                                            {/* <i className="share material-icons">share</i> */}
                                            <IconButton
                                                className="favorite"
                                                color="secondary"
                                            // savedtoyList={props.savedtoyList}
                                            >
                                                <ShareIcon className="share material-icons" />
                                            </IconButton>
                                        </Col>
                                        <Col xs={3} sm={2}>
                                            <IconButton
                                                className="favorite"
                                                color="secondary"
                                            // savedtoyList={props.savedtoyList}
                                            >
                                                <MoreHorizIcon className="more material-icons" />
                                            </IconButton>
                                            {/* <i className="more material-icons">more</i> */}
                                        </Col>
                                    </Row>
                                </Col>
                            </div>



                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} sm={6}>
                            {/* <CommentBox /> */}
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}
