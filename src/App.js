import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar/navbar.component";
import ToyList from "./components/ToyList/ToyList.component";
import EditToy from "./components/EditToy/EditToy.component";
import CreateToy from "./components/CreateToy/CreateToy.component";
import CreateUser from "./components/CreateUser/CreateUser.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ToyList} />
        <Route path="/edit/:id" component={EditToy} />
        <Route path="/create" component={CreateToy} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>

  );
}

export default App;
