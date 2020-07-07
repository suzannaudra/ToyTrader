import React, { Component } from "react";
import axios from "axios";
import ToyCard from "../../components/ToyCard";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchtoys: []
    };
  }

  componentDidMount() {}

  render() {
    console.log("Search Results");
    console.table(this.state.searchtoys);
    return (
      <div>
        <CardColumns>
          {this.state.searchtoys.length > 0 ? (
            this.state.searchtoys.map((toy, index) => {
              return <ToyCard query={toy} key={index} />;
            })
          ) : (
            <div>Loading .....</div>
          )}
        </CardColumns>
      </div>
    );
  }
}

export default SearchResults;
