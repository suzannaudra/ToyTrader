import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavigationBar from "./components/Navbar";
import ToyList from "./pages/ToyList";
import Toy from "./pages/Toy";
import EditToy from "./components/EditToy";
import CreateToy from "./components/CreateToy";
import UserIdentification from "./pages/UserIdentification";
// import SavedToyList from "./pages/SaveToy";
import LogInNav from "./components/LogInNav";
import CarouselSlider from "./components/CarouselSlider";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      userid: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/user/login").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          userid: response.data.user.userid
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          userid: null
        });
      }
    });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <LogInNav />
          <NavigationBar />
          <CarouselSlider />
          <br />
          <Route path="/" exact component={ToyList} />
          <Route path="/toys" exact component={ToyList} />
          <Route path="/toys/update" component={EditToy} />
          <Route path="/toys/add" component={CreateToy} />
          <Route path="/user/add" component={UserIdentification} />
          {/* <Route path="/savedtoys" component={SavedToyList} /> */}
          <Route path="/toy" component={Toy} />
        </div>
      </Router>
    );
  }
}

export default App;
