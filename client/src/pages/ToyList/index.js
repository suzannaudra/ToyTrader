import React, { Component } from "react";
import axios from "axios";
import ToyCard from "../../components/ToyCard";
import CardColumns from "react-bootstrap/CardColumns";

export default class ToyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toys: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/toys")
      .then(response => {
        console.log(response.data);
        this.setState({ toys: response.data });
      })
      .catch(error => {
        console.log(error);
      });

  }

  toyList() {
    return this.state.toys.map((currenttoy, index) => {
      return (
        <ToyCard props={currenttoy} deleteToy={this.deleteToy} key={index} />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>TOYS</h3>
        <CardColumns>
          {this.state.toys.map((currenttoy, index) => {
            return (
              <ToyCard
                currenttoy={currenttoy}
                userid={this.props.userid}
                onClick={this.savedtoyList}
                key={index}
              />
            );
          })}
        </CardColumns>
      </div>
    );
  }
}
