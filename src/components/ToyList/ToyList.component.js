import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Toy = props => (
  <tr>
    <td>{props.toy.username}</td>
    <td>{props.toy.description}</td>
    <td>{props.toy.condition}</td>
    <td>{props.toy.location}</td>
    <td>{props.toy.image}</td>
    <td>{props.toy.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.toy._id}>edit</Link> | <a href="#" onClick={() => {props.deleteToy(props.toy._id) }}>delete</a>
    </td>
  </tr>
)

export default class ToyList extends Component {
  constructor(props) {
    super(props);

    this.deleteToy = this.deleteToy.bind(this);
    this.state = {toys: []};
  }
  componentDidMount(){
    axios.get('http://localhost:3000/toys')
    .then(response => {
      this.setState({ toys: response.data })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  deleteToy(id) {
    axios.delete('http://localhost:3000/toys/'+id)
    .then(res => console.log(res.data));

    this.setState({
      toys: this.state.toys.filter(el =>el._id !== id)
    })
  }

toyList(){
  return this.state.toys.map(currenttoy => {
    return <Toy toy={currenttoy} deleteToy={this.deleteToy} key={currenttoy._id}/>
  })
}

  render() {
    return (
      <div>
        <h3>TOYS</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Condition</th>
              <th>Image</th>
              <th>Date</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {this.toyList()}
          </tbody>
        </table>  
      </div>
    )
  }
}