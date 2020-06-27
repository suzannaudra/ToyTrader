import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import "./style.css"


function ToyCard(props) {
    let data = props.props
    return (

        <Card>
            <Card.Img variant="top" src={data.Image} className="cardImg" />
            <Card.Body>
                <Card.Title>{data.Toyname}</Card.Title>
                <Card.Text>
                    {data.Condition}
                </Card.Text>
                <Card.Text>
                    {data.Location}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated {data.Date} by {data.Username}</small>
            </Card.Footer>
        </Card>
    )
}
export default ToyCard;

