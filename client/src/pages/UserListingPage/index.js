import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
// import ToyCard from '../../components/ToyCard'
import CardDeck from "react-bootstrap/CardDeck";
import SavedToyCard from "../../components/SavedToyCard";
import { Col } from "react-bootstrap";

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
<<<<<<< HEAD
    console.log(props.userid);
    let url = `/listing/${props.userid}`;
    console.log(url);
=======
    console.log(props.userid)
    let url = `/listing/${props.userid}`;
    console.log(url)
>>>>>>> e1974076b89a9a732187b21e82d019a311225958
    axios
      .get(url)
      .then(response => {
        console.log(response);
        this.setState({
          userid: props.userid,
          toysListing: response.data.toys
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

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
    });

    this.setState({
      toyname: "",
      description: "",
      condition: "",
      location: "",
      image: "",
      Date: ""
    });
  }

<<<<<<< HEAD
  deleteToy(id) {
    axios.delete("/toy" + id).then(res => console.log(res.data));
=======
  deleteToy(userid, toyid) {
    console.log(userid)
>>>>>>> 1eda1e078597e82e9444614f8041f6718eb694dc

    console.log(toyid)
    const data = { userid: userid, toyid: toyid }
    console.log(data)
    axios
      .delete(`/toy/${userid}/${toyid}`)
      .then(res => console.log(res.data)).catch(err => console.log(err))
    // this.setState({
    //   toysListing: this.state.toysListing.filter(el => el._id !== toyid)
    // });
  }

  render() {
<<<<<<< HEAD
    console.log(this.state.toysListing);
=======
    console.log(this.props.userid)
    console.log(this.state.toysListing)
>>>>>>> 1eda1e078597e82e9444614f8041f6718eb694dc
    return (
      <div>
        <div>
          <h3>TOYS</h3>
          <CardDeck>
            {this.state.toysListing.map((currenttoy, index) => {
              return (
                <Col xs={12} sm={6} lg={4} className="px-0 pb-3" key={index}>
                  {/* Used savedToyCard because reuse component */}
                  <SavedToyCard
                    currenttoy={currenttoy}
                    deleteToy={this.deleteToy}
                    key={index}
                    userid={this.props.userid}
                  />
                </Col>
              );
            })}
          </CardDeck>
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
