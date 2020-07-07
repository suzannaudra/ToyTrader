import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavigationBar from "./components/Navbar";
import ToyList from "./pages/ToyList";
import Toy from "./pages/Toy";
import EditToy from "./components/EditToy";
import UserListingPage from "./pages/UserListingPage";
import UserIdentification from "./pages/UserIdentification";
import SavedToyList from "./pages/SaveToy";
import LogInNav from "./components/LogInNav";
import CarouselSlider from "./components/CarouselSlider";
import axios from "axios";
import SignedInNav from "./components/SignedInNav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      userid: null,
      firstName: null,
      toys: [],
      query: ""
    };
  }

  componentDidMount = () => {
    this.getUser();
    //Fetch all toys here t set state and show when a user first loads
    axios
      .get("/toys")
      .then(response => {
        console.log(response.data);
        this.setState({ toys: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getToysByQuery = () => {
    axios
      .get(`http://localhost:3000/find/${this.state.query}`)
      .then(response => {
        console.log(response.data);
        this.setState({ toys: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  updatedUser = userObject => {
    this.setState(userObject);
  };

  getUser = () => {
    axios.get("/user/login").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data._id) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState(state => ({
          loggedIn: true,
          userid: response.data._id,
          firstName: response.data.firstName
        }));
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          userid: null,
          firstName: null
        });
      }
    });
  };

  kickUser = () => {
    console.log("Going to log out user");
    axios
      .get("/user/logout")
      .then(res => {
        this.updatedUser({
          loggedIn: false,
          userid: null,
          firstName: null
        });
        console.log("You have logged out");
      })
      .catch(error => console.log("Loggout error"));
  };

  render() {
    console.log("app render " + this.state.query);
    return (
      <Router>
        <div className="container">
          {this.state.loggedIn ? (
            <SignedInNav
              firstName={this.state.firstName}
              userid={this.state.userid}
              kickUser={this.kickUser}
            />
          ) : (
            <LogInNav updatedUser={this.updatedUser} />
          )}

          <NavigationBar
            onChange={event => this.setState({ query: event.target.value })}
            query={this.state.query}
            clickHandler={this.getToysByQuery}
            onKeyPress={event => {
              if ("Enter" === event.key) {
                this.getToysByQuery();
              }
            }}
          />
          <CarouselSlider />
          <br />
          <Route
            path="/"
            exact
            render={props => (
              <ToyList
                {...props}
                userid={this.state.userid}
                toys={this.state.toys}
              />
            )}
          />
          <Route
            path="/toys"
            exact
            render={props => (
              <ToyList
                {...props}
                userid={this.state.userid}
                toys={this.state.toys}
              />
            )}
          />
          <Route path="/toys/update" component={EditToy} />
          <Route
            path="/toys/add"
            render={props => (
              <UserListingPage
                {...props}
                userid={this.state.userid}
                firstName={this.state.firstName}
              />
            )}
          />
          <Route
            path="/user/add"
            render={props => (
              <UserIdentification {...props} updatedUser={this.updatedUser} />
            )}
          />
          <Route
            path="/savedtoys"
            render={props => (
              <SavedToyList {...props} userid={this.state.userid} />
            )}
          />
          {/* <Route path="/toy" render={props => (<Toy {...props} userid={this.state.userid} />)} /> */}
          <Route path="/toy" component={Toy} />
        </div>
      </Router>
    );
  }
}

export default App;
