import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
// import ToyCard from '../../components/ToyCard'
import CardColumns from "react-bootstrap/CardColumns";
import SavedToyCard from "../../components/SavedToyCard";

export default class UserListingPage extends Component {
  constructor(props) {
    super(props);

    this.onChangeToyname = this.onChangeToyname.bind(this);
    this.onChangedescription = this.onChangedescription.bind(this);
    this.onChangecondition = this.onChangecondition.bind(this);
    this.onChangelocation = this.onChangelocation.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);
    this.onChangedate = this.onChangedate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      toysListing: [],
      userid: "",
      toyname: "",
      description: "",
      condition: "",
      location: "",
      image: "",
      Date: ""
    };
  }

  componentWillReceiveProps(props) {
    console.log(props.userid)
    let url = `http://localhost:3000/listing/${props.userid}`;
    console.log(url)
    axios
      .get(url)
      .then(response => {
        console.log(response);
        this.setState({ userid: props.userid, toysListing: response.data.toys });
      }).catch(err => {
        console.log(err)
      })


  }

  // componentDidMount() {
  //   this.requestForAllToysOfThisUser()

  // }

  // requestForAllToysOfThisUser() {
  //   console.log("this is userlistingpage " + this.state.userid)
  //   let url = "http://localhost:3000/listing/5efea56229b94841219c1076";
  //   console.log(url)
  //   axios
  //     .get(url)
  //     .then(response => {
  //       console.log("this is response of axios to /user " + response);
  //       this.setState({ toysListing: response.toys });
  //     }).catch(err => {
  //       console.log(err)
  //     })
  // }

  onChangeToyname(e) {
    e.persist();
    this.setState({
      toyname: e.target.value
    });
  }
  onChangedescription(e) {
    e.persist();
    this.setState({
      description: e.target.value
    });
  }

  onChangecondition(e) {
    e.persist();
    this.setState({
      condition: e.target.value
    });
  }

  onChangelocation(e) {
    e.persist();
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
    e.persist();
    this.setState({
      image: e.target.value
    });
  }

  onSubmit(e, userid, firstName) {
    e.preventDefault();

    const toy = {
      userid: userid,
      firstName: firstName,
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
      // window.location = "/";
    });
  }

  deleteToy(id) {
    axios
      .delete("http://localhost:3000/toy" + id)
      .then(res => console.log(res.data));

    this.setState({
      toysListing: this.state.toysListing.filter(el => el._id !== id)
    });
  }

  // toyList() {

  //   return this.state.toysListing.map((currenttoy, index) => {
  //     return (
  //       <ToyCard props={currenttoy} deleteToy={this.deleteToy} key={index} />
  //     );
  //   });
  // }

  render() {
    console.log(this.state.toysListing)
    return (
      <div>
        <div>
          <h3>TOYS</h3>
          <CardColumns>
            {this.state.toysListing.map((currenttoy, index) => {
              return (
                <SavedToyCard
                  currenttoy={currenttoy}
                  deleteToy={this.deleteToy}
                  key={index}
                />
              );
            })}
          </CardColumns>
        </div>
        <h3>Add New Toy</h3>
        <form
          onSubmit={e =>
            this.onSubmit(e, this.props.userid, this.props.firstName)
          }
        >
          <div className="form-group">
            <label>Toyname:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.toyname}
              onChange={this.onChangeToyname}
            />
          </div>
          <div className="form-group">
            <label> Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangedescription}
            />
          </div>
          <div className="form-group">
            <label> Condition: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.condition}
              onChange={this.onChangecondition}
            />
          </div>
          <div className="form-group">
            <label> Location: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.location}
              onChange={this.onChangelocation}
            />
          </div>
          <div className="form-group">
            <label> Image URL: </label>
            <input
              type="text"
              alt="Image URL"
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
