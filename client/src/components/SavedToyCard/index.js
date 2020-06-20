import React from 'react';
import { Link } from 'react-router-dom';


function ToyCard(props) {
    let data = props.props
    return (
        <tr>
            <td>{data.Username}</td>
            <td>{data.Description}</td>
            <td>{data.Condition}</td>
            <td>{data.Location}</td>
            <td><img src={data.Image} /></td>
            <td>{data.Date}</td>
            <td>
                <Link to={"/edit/" + data._id}>edit</Link> | <a href="#" onClick={() => { data.deleteToy(data._id) }}>delete</a>
            </td>
        </tr>
    )
}
export default ToyCard;