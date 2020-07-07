import React, { Component } from "react";
import axios from "axios";
import ToyCard from "../../components/ToyCard";
import CardDeck from 'react-bootstrap/CardDeck'
import { Col } from "react-bootstrap";

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
        <CardDeck>

          {this.state.toys.map((currenttoy, index) => {
            return (
              <Col xs={12} sm={6} lg={4} className="px-0 pb-3">
                <ToyCard
                  currenttoy={currenttoy}
                  userid={this.props.userid}
                  onClick={this.savedtoyList}
                  key={index}
                />
              </Col>

            );
          })}


        </CardDeck>
      </div>
    );
  }
}
