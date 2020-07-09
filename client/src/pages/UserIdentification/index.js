import React, { Component } from "react";
import axios from "axios";
import IdentificationForm from "../../components/IdentificationForm";
import { LogIn } from "../../components/LogIn";
import SignUp from "../../components/SignUp";

export default class Validation extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLogIn = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Welcome`);

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/user/login", user)
      .then(res => {
        this.props.updatedUser({
          loggedIn: true,
          userid: res.data._id,
          firstName: res.data.firstName
        });
        console.log(res.data);
        window.location = "/";
      })
      .catch();

    this.setState({
      email: "",
      password: ""
    });
  };

  handleSignUp = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    alert(`Hello ${this.state.firstName}`);
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    };
<<<<<<< HEAD
    axios.post("/user/add", user).then(res => console.log(res.data));
=======
    axios
      .post("/user/add", user)
      .then(res => console.log(res.data));
>>>>>>> e1974076b89a9a732187b21e82d019a311225958
    this.setState({ redirectTo: "/" });

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <form className="form">
        {this.props.location.state.isRegister === true ? (
          <LogIn
            email={this.state.email}
            password={this.state.password}
            onClick={this.handleLogIn}
            onChange={this.handleInputChange}
          />
        ) : (
          <SignUp
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            password={this.state.password}
            onClick={this.handleSignUp}
            onChange={this.handleInputChange}
          />
        )}
      </form>
    );
  }
}
