import React, { Component } from "react";
import axios from "axios";
import ToyCard from "../../components/ToyCard";
import CardColumns from "react-bootstrap/CardColumns";

export default class ToyList extends Component {
  constructor(props) {
    super(props);
  }

  // toyList() {
  //   return this.state.toys.map((currenttoy, index) => {
  //     return (
  //       <ToyCard props={currenttoy} deleteToy={this.deleteToy} key={index} />
  //     );
  //   });
  // }

  savedtoyList() {
    //TODO: layer
    console.log("I was clicked");
  }

  render() {
    return (
      <div>
        <h3>TOYS</h3>
        <CardColumns>
          {this.props.toys.map((currenttoy, index) => {
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
