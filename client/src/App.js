import React from "react";
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
// import LogInNav from "./components/LogInNav";
import SignedInNav from "./components/SignedInNav";
import CarouselSlider from "./components/CarouselSlider";

function App() {
  return (
    <Router>
      <div className="container">
        {/* <LogInNav /> */}
        <SignedInNav />
        <NavigationBar />
        <CarouselSlider />
        <br />
        <Route path="/" exact component={ToyList} />
        <Route path="/toys" exact component={ToyList} />
        <Route path="/toys/update" component={EditToy} />
        <Route path="/toys/add" component={CreateToy} />
        <Route path="/user/add" component={UserIdentification} />
        <Route path="/savedtoys" component={SavedToyList} />
        <Route path="/toy" component={Toy} />
      </div>
    </Router>
  );
}

export default App;
