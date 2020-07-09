import React, { Component } from "react";
import axios from "axios";
import { Col } from "react-bootstrap";
import SavedToyCard from "../../components/SavedToyCard"
import CardDeck from "react-bootstrap/CardDeck";

export default class savedToy extends Component {
    constructor(props) {
        super(props);

        this.deleteToy = this.deleteToy.bind(this);
        this.state = { toys: [] };
    }

    componentWillReceiveProps(props) {
        axios
            .get(`/savedtoys/${props.userid}`)
            .then(response => {
                console.log("Saved Toys");
                console.log(response.data);
                this.getToyData(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }

    deleteToy(id) {
        axios
            .delete(`/savedtoys/${id}`)
            .then(res => console.log(res.data));

        this.setState({
            toys: this.state.toys.filter(el => el._id !== id)
        });
    }

    getToyData = (toyids) => {
        toyids.forEach(toy => {
            axios.get(`/toy/${toy}`)
                .then(res => {
                    let tempArray = this.state.toys;
                    tempArray.push(res);
                    this.setState({ toys: tempArray });
                })
        });
    }

    render() {
        // console.log("List of favorited toys");
        // console.table(this.state.toys);
        return (
            <div>
                <h3>TOYS</h3>
                <CardDeck>
                    {this.state.toys.map((currenttoy, index) => {
                        return (
                            <Col xs={12} sm={6} lg={4} className="px-0 pb-3" key={index}>
                                <SavedToyCard
                                    currenttoy={currenttoy.data}
                                    key={index}
                                    onClick={() => this.deleteToy(currenttoy.data._id)}
                                />
                            </Col>
                        )
                    })}
                </CardDeck>
            </div >
        );
    }
}
