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
import SavedToyList from "./pages/SaveToy";
import LogInNav from "./components/LogInNav";
import CarouselSlider from "./components/CarouselSlider";
import axios from "axios"
import SignedInNav from "./components/SignedInNav";
import SearchFunction from "./components/SearchFilter";
import { Col, Row } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      userid: null,
      firstName: null
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
          userid: response.data.user.userid,
          firstName: response.data.user.firstName
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          userid: null,
          firstName: null
        });
      }
    });
  }

  render() {
    console.log("app render " + this.state.firstName)
    return (
      <Router>
        <div className="container">
          {this.state.loggedIn ? <SignedInNav firstName={this.state.firstName} updatedUser={this.updatedUser} /> : <LogInNav updatedUser={this.updatedUser} />}

          <NavigationBar />
          <Row>
            <Col className="centerToyBtn" xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} >
              <SearchFunction />
            </Col>
            <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} >
              <CarouselSlider />
            </Col>

            <Col xs={{ span: 12, order: 3 }} >

              <br />
              <Route path="/" exact component={ToyList} />
              <Route path="/toys" exact component={ToyList} />
              <Route path="/toys/update" component={EditToy} />
              <Route path="/toys/add" component={CreateToy} />
              <Route path="/user/add" render={(props) => <UserIdentification {...props} updatedUser={this.updateUser} />} />
              {/* <Route path="/savedtoys" component={SavedToyList} /> */}
              <Route path="/toy" component={Toy} />
            </Col>
          </Row>
        </div>
      </Router>
    );
  }
}

// function App() {
//   return (
//     <Router>
//       <div className="container">
//         <LogInNav />
//         <NavigationBar />
//         <CarouselSlider />
//         <br />
//         <Route path="/" exact component={ToyList} />
//         <Route path="/toys" exact component={ToyList} />
//         <Route path="/toys/update" component={EditToy} />
//         <Route path="/toys/add" component={CreateToy} />
//         <Route path="/user/add" component={UserIdentification} />
//         <Route path="/savedtoys" component={SavedToyList} />
//         <Route path="/toy" component={Toy} />
//       </div>
//     </Router>
//   );
// }

export default App;
