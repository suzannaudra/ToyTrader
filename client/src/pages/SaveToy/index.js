import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import logo from "../../components/Image/fun-logo.png";
import SavedToyCard from "../../components/SavedToyCard"
import CardColumns from "react-bootstrap/CardColumns";

export default class savedToy extends Component {
    constructor(props) {
        super(props);

        this.deleteToy = this.deleteToy.bind(this);
        this.state = { toys: [] };
    }

    componentWillReceiveProps(props) {
        axios
            .get(`http://localhost:3000/savedtoys/${props.userid}`)
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
            .delete("http://localhost:3000/savedtoys/" + id)
            .then(res => console.log(res.data));

        this.setState({
            toys: this.state.toys.filter(el => el._id !== id)
        });
    }

    getToyData = (toyids) => {
        toyids.forEach(toy => {
            axios.get(`http://localhost:3000/toy/${toy}`)
                .then(res => {
                    let tempArray = this.state.toys;
                    tempArray.push(res);
                    this.setState({ toys: tempArray });
                })
        });
    }

    render() {
        console.log("List of favorited toys");
        console.table(this.state.toys);
        return (
            <div>
                <h3>TOYS</h3>
                <CardColumns>
                    {this.state.toys.map((currenttoy, index) => {
                        return (
                            <SavedToyCard
                                currenttoy={currenttoy.data}
                                key={index}
                            />
                        )
                    })}
                </CardColumns>
            </div>
        );
    }
}
