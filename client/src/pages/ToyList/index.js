import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ToyCard from "../../components/ToyCard";
import CardColumns from "react-bootstrap/CardColumns";

export default class ToyList extends Component {
  constructor(props) {
    super(props);

    this.savedtoyList = this.savedtoyList.bind(this);
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

    //   this.setState({
    //     Tou: "",
    //     password: ""
    //   });
  }

  toyList() {
    return this.state.toys.map((currenttoy, index) => {
      return (
        <ToyCard props={currenttoy} deleteToy={this.deleteToy} key={index} />
      );
    });
  }

  savedtoyList(currenttoy) {
    axios
      .post("http://localhost:3000/savedToys", currenttoy)

      .then(res => console.log(res.data));
  }

  render() {
    return (
      <div>
        <h3>TOYS</h3>
        <CardColumns>
          {this.state.toys.map((currenttoy, index) => {
            return (
              <ToyCard
                props={currenttoy}
                savedtoyList={this.savedtoyList}
                key={index}
              />
            );
          })}
        </CardColumns>
      </div>
    );
  }
}
