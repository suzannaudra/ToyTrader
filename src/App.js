import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ToyList from "./components/ToyList.component";
import EditToy from "./components/EditToy.component";
import CreateToy from "./components/CreateToy.component";
import CreateUser from "./components/CreateUser.component";
import SavedToyList from "./components/SavedToy.component";
import savedToy from './components/SavedToy.component';

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/toys" exact component={ToyList} />
      <Route path="/toys/update" component={EditToy} />
      <Route path="/toys/add" component={CreateToy} />
      <Route path="/users/add" component={CreateUser} />
      <Route path="/savedtoys" component={savedToy} />
      </div>
    </Router>
    
  );
}

export default App;
