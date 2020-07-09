import React, { Component } from "react";
import "./style.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ContactMailIcon from '@material-ui/icons/ContactMail';
// import CommentBox from "../../components/CommentSection/index";
import axios from "axios";

export default class Toy extends Component {

    savedtoyList(currenttoy, userid) {
        console.log("Now saving toy")
        console.log(userid)
        const data = {
            userid: userid,
            toyid: currenttoy
        }
        axios
            .post("/savedToys/add", data).then(res => console.log(res.data));
    }

    sendEmail(ownerid) {
        axios.get(`/email/${ownerid}`).then(res => { window.location = `mailto:${res.data.email}` })
    }


    render() {
        console.log(this.props.location.state.props)
        // console.log("Listing toycard props")
        console.log("getting location userid")
        console.log(this.props.location.state.props.userid)
        return (
            <div>
                <h3>{this.props.location.state.props.toyname}</h3>
                <hr></hr>
                <br></br>
                <Container fluid>
                    <Row>
                        <Col xs={12} sm={6}>
                            <Card.Img className="bigImage" src={this.props.location.state.props.image} />
                        </Col>
                        <Col className="description-text" xs={12} sm={6}>
                            <Card >
                                <Card.Header>{this.props.location.state.props.condition}</Card.Header>


                                <Card.Body>
                                    <Card.Title className="toyPageDescription" >Description</Card.Title>
                                    <Card.Text>
                                        {this.props.location.state.props.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <div className="text-center">
                                <Col xs={12}>
                                    <Row className="centerrow">
                                        <Col className="iconDiv">
                                            <IconButton
                                                className="favorite"
                                                color="secondary"
                                                onClick={() => this.savedtoyList(this.props.location.state.props._id, this.props.location.state.userid)}
                                            >
                                                <FavoriteIcon fontSize="large" className="favorite material-icons" />
                                            </IconButton>
                                            <p>Favorite</p>
                                        </Col>
                                        <Col className="iconDiv">

                                            <IconButton
                                                className="favorite"
                                                color="secondary"
                                                onClick={() => this.sendEmail(this.props.location.state.props.userid)}
                                            >
                                                <ContactMailIcon fontSize="large" className="share material-icons" />
                                            </IconButton>
                                            <p>Contact</p>
                                        </Col>
                                        <Col className="iconDiv">
                                            <IconButton
                                                className="favorite"
                                                color="secondary"
                                            // savedtoyList={props.savedtoyList}
                                            >
                                                <ShareIcon fontSize="large" className="more material-icons" />
                                            </IconButton>
                                            <p>Share</p>
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
