import React, { Component } from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import Media from 'react-bootstrap/Media'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import thuy from '../../components/Image/thuy-profile.jpg'


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
                        <br></br>
                        <h1>About Our App</h1>

                        <h3>This is a application made using React. This is designed to help families get rid of extra toys that they no longer want or need. There is a feature for clients to sign up and then login to the application so that they can add the toy listing. Users can also save a toy that they like by using the heart, to their saved toy page. Users also have the ability to contact by other users by email if they see a toy that interests them. Users can also search for a toy, location, user, or description in the search bar. Once a toy is sold the user can then delete the toy from the database.</h3>

                        <br></br>
                        <h1>Contact Us</h1>
                        <ul className="list-unstyled">
                            <Media as="li">
                                <img
                                    className="mr-3"
                                    src="holder.js/64x64"
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <h5>Angel de la Torre</h5>
                                    <p>

                                    </p>
                                </Media.Body>
                            </Media>
                            <br></br>
                            <Media as="li">
                                <img
                                    className="profilePic"
                                    className="mr-3 mt-0"
                                    src={thuy}
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <h5>Thuy Nguyen</h5>
                                    <p>
                                        <GitHubIcon
                                            onClick={event => window.location.href = 'https://github.com/thuynguyen-nht'} />
                                        <LinkedInIcon onClick={event => window.location.href = 'https://www.linkedin.com/in/thuy-nguyen-40915b74/'} />
                                        <EmailIcon onClick={event => window.location.href = 'href="mailto:thuynguyen.nht20@gmail.com"'} />
                                    </p>
                                </Media.Body>
                            </Media>
                            <br></br>
                            <Media as="li">
                                <img
                                    className="mr-3"
                                    src="holder.js/64x64"
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <h5>List-based media object</h5>
                                    <p>

                                    </p>
                                </Media.Body>
                            </Media>
                            <br></br>
                            <Media as="li">
                                <img
                                    className="mr-3"
                                    src="holder.js/64x64"
                                    alt="Generic placeholder"
                                />
                                <Media.Body>
                                    <h5>List-based media object</h5>
                                    <p>

                                    </p>
                                </Media.Body>
                            </Media>
                        </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}