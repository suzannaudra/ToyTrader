import React, { Component } from "react";
import axios from "axios";
import ToyCard from "../../components/ToyCard";
import { CardDeck } from "react-bootstrap";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchtoys: []
    };
  }

  componentWillReceiveProps(props) {
    console.log("this is search results render");
    console.log(props);
  }

  render() {
    console.log("Search Results");
    console.table(this.state.searchtoys);
    return (
      <div>
        <CardDeck>
          {this.state.searchtoys.length > 0 ? (
            this.state.searchtoys.map((toy, index) => {
              return <ToyCard query={toy} key={index} />;
            })
          ) : (
            <div>Loading .....</div>
          )}
        </CardDeck>
      </div>
    );
  }
}

export default SearchResults;
