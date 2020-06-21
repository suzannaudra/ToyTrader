import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import "./style.css"


function ToyCard(props) {
    let data = props.props
    return (
        // <tr>
        //     <td>{data.Toyname}</td>
        //     <td>{data.Description}</td>
        //     <td>{data.Condition}</td>
        //     <td>{data.Location}</td>
        //     <td><img src={data.Image} /></td>
        //     <td>{data.Date}</td>
        //     <td>
        //         <Link to={"/edit/" + data._id}>edit</Link> | <a href="#" onClick={() => { data.deleteToy(data._id) }}>delete</a>
        //     </td>
        // </tr>
        <Card>
            <Card.Img variant="top" src={data.Image} className="cardImg" />
            <Card.Body>
                <Card.Title>{data.Toyname}</Card.Title>
                <Card.Text>
                    <p>{data.Condition}</p>
                    <p>{data.Location}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated {data.Date} by {data.Username}</small>
            </Card.Footer>
        </Card>
    )
}
export default ToyCard;

