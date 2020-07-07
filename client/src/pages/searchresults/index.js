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

  componentDidMount() {
    axios
      .get("http://localhost:3000/find/:query")
      .then(response => {
        console.log(response.data);
        this.setState({ searchtoys: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

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
