import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import NavigationBar from "./components/Navbar";
import ToyList from "./pages/ToyList";
import EditToy from "./components/EditToy";
import CreateToy from "./components/CreateToy";
import UserIdentification from "./pages/UserIdentification";
import SavedToyList from "./pages/SaveToy";
import LogInNav from './components/LogInNav';
import ProductPage from './pages/Product page';
function App() {
  return (
    <Router>
      <div className="container">
        <LogInNav />
        <NavigationBar />
        <br />
        <Route path="/" exact component={ToyList} />
        <Route path="/toys" exact component={ToyList} />
        <Route path="/toys/update" component={EditToy} />
        <Route path="/toys/add" component={CreateToy} />
        <Route path="/users/indentify" component={UserIdentification} />
        <Route path="/savedtoys" component={SavedToyList} />
        <Route path="/productpage" exact component={ProductPage} />
      </div>
    </Router>

  );
}

export default App;