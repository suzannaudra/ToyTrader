import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { MongooseDocument } from "mongoose";

export default class CreateToy extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeToyname = this.onChangeToyname.bind(this);
    this.onChangedescription = this.onChangedescription.bind(this);
    this.onChangecondition = this.onChangecondition.bind(this);
    this.onChangelocation = this.onChangelocation.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);
    this.onChangedate = this.onChangedate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userid: "",
      toyname: "",
      description: "",
      condition: "",
      location: "",
      image: "",
      Date: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      userid: e.target.value
    });
  }

  onChangeToyname(e) {
    this.setState({
      toyname: e.target.value
    });
  }
  onChangedescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangecondition(e) {
    this.setState({
      condition: e.target.value
    });
  }

  onChangelocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  onChangedate(Date) {
    this.setState({
      Date: Date
    });
  }

  onChangeimage(e) {
    this.setState({
      image: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const toy = {
      userid: this.state.userid,
      toyname: this.state.toyname,
      description: this.state.description,
      condition: this.state.condition,
      location: this.state.location,
      image: this.state.image,
      Date: this.state.Date
    };

    console.log(toy);

    axios.post("/toys/add", toy).then(res => {
      console.log(res.data);
      window.location = "/";
    });
  }

  render() {
    return (
      <div>
        <h3>Add New Toy</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>userid:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.userid}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <label>toyname:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.toyname}
              onChange={this.onChangeToyname}
            />
          </div>
          <div className="form-group">
            <label> description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangedescription}
            />
          </div>
          <div className="form-group">
            <label> condition: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.condition}
              onChange={this.onChangecondition}
            />
          </div>
          <div className="form-group">
            <label> location: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.location}
              onChange={this.onChangelocation}
            />
          </div>
          <div className="form-group">
            <label> image: </label>
            <input
              type="image"
              alt="imagetoy"
              required
              className="form-control"
              //NOT SURE IF THIS IMAGE INPUT IS CORRECT
              value={this.state.image}
              onChange={this.onChangeimage}
            />
          </div>
          <div className="form-group">
            <label> Date: </label>
            <div>
              <DatePicker
                selected={this.state.Date}
                onChange={this.onChangedate}
              />
            </div>
          </div>
          <div className="form-group">
            <input type="submit" value="Add Toy" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
