import React from 'react';
// import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import "./style.css"
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';

function ToyCard(props) {
    let data = props.props
    return (

        <Card>
            <Card.Img variant="top" src={data.Image} className="cardImg" />
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Title>{data.Toyname}</Card.Title>

                    </Col>
                    <Col className="text-right">
                        <Link to={{
                            pathname: "../../pages/Product", state: {
                                props: data
                            }
                        }} className="btn btn-warning">View</Link>

                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card.Text>
                            {data.Condition}
                        </Card.Text>
                        <Card.Text>
                            {data.Location}
                        </Card.Text>

                    </Col>
                    <Col className="text-right my-2">
                        <IconButton className="favorite" color="secondary" savedtoyList={props.savedtoyList}>
                            <FavoriteIcon style={{ color: "green" }} />
                        </IconButton>
                    </Col>
                </Row>

            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated {data.Date} by {data.Username}</small>
            </Card.Footer>
        </Card>
    )
}
export default ToyCard;

