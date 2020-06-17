import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ToyTrader</Link>
        <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/toys" className="nav-link">Toys</Link>
          </li>
          <li className="navbar-item">
          <Link to="/toys/add" className="nav-link">Add a Toy to Toy Trader</Link>  
          </li>
          <li className="navbar-item">
          <Link to="/users/add" className="nav-link">Create User</Link>  
          </li>
          <li className="navbar-item">
          <Link to="/savedtoys" className="nav-link">Saved Toys</Link>  
          </li>
          <li className="navbar-item">
          <Link to="/toys/update" className="nav-link">Update Toy</Link>  
          </li>
        </ul>
      </div>
    </nav>
    )
  }}