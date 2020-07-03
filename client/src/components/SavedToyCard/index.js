import React from "react";
// import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
// import "./style.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";

function SavedToyCard(props) {
  let data = props.props;
  return (
    <Card>
      <Card.Img variant="top" src={data.image} className="cardImg" />
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{data.toyname}</Card.Title>
          </Col>
          <Col className="text-right">
            <Link
              to={{
                pathname: "../../pages/Toy",
                state: {
                  props: data
                }
              }}
              className="btn btn-warning"
            >
              View
            </Link>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card.Text>{data.condition}</Card.Text>
            <Card.Text>{data.location}</Card.Text>
          </Col>
          <Col className="text-right my-2">
            <IconButton className="favorite" color="secondary">
              <DeleteIcon style={{ color: "red" }} />
            </IconButton>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          Last updated {data.Date} by {data.firstName}
        </small>
      </Card.Footer>
    </Card>
  );
}
export default SavedToyCard;
