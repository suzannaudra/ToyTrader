import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import NavigationBar from "./components/navbar";
import ToyList from "./pages/ToyList";
import EditToy from "./components/EditToy";
import CreateToy from "./components/CreateToy";
import CreateUser from "./components/CreateUser";
import SavedToyList from "./pages/SavedToy";

function App() {
  return (
    <Router>
      <div className="container">
        <NavigationBar />
        <br />
        <Route path="/toys" exact component={ToyList} />
        <Route path="/toys/update" component={EditToy} />
        <Route path="/toys/add" component={CreateToy} />
        <Route path="/users/add" component={CreateUser} />
        <Route path="/savedtoys" component={SavedToyList} />
      </div>
    </Router>

  );
}

export default App;