import React from "react";
// import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import "./style.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import axios from "axios";

function savedtoyList(currenttoy, userid) {
  const data = {
    userid: userid,
    toyid: currenttoy._id
  }
  axios
    .post("http://localhost:3000/savedToys/add", data).then(res => console.log(res.data));
}

function ToyCard(props) {
  let data = props.currenttoy;
  console.log(data);
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
                pathname: "/toy",
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
            <IconButton
              className="favorite"
              color="secondary"
              onClick={() => savedtoyList(props.currenttoy, props.userid)}
            >
              <FavoriteIcon style={{ color: "green" }} />
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
export default ToyCard;
