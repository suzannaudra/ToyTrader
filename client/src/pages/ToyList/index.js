import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ToyCard from '../../components/SavedToyCard';
// import savedToy from '../SavedToy';
import CardColumns from 'react-bootstrap/CardColumns'



export default class ToyList extends Component {
    constructor(props) {
        super(props);

        this.deleteToy = this.deleteToy.bind(this);
        this.state = {
            toys: [
                {
                    Toyname: "Barbie",
                    Username: "Suzann",
                    Description: "doll",
                    Condition: "new",
                    Image: "https://via.placeholder.com/100",
                    Date: "06/16/2020",
                    Location: "Oakland, CA",
                },
                {
                    Toyname: "Ram",
                    Username: "Thuy",
                    Description: "bike",
                    Condition: "new",
                    Image: "https://via.placeholder.com/100",
                    Date: "06/16/2020",
                    Location: "San Diego, CA",
                },
                {
                    Toyname: "Harley",
                    Username: "Angel",
                    Description: "Motorcyle",
                    Condition: "new",
                    Image: "https://via.placeholder.com/100",
                    Date: "06/16/2020",
                    Location: "San Francisco, CA"
                },
                {
                    Toyname: "Harley",
                    Username: "Angel",
                    Description: "Motorcyle",
                    Condition: "new",
                    Image: "https://via.placeholder.com/100",
                    Date: "06/16/2020",
                    Location: "San Francisco, CA"
                },
                {
                    Toyname: "Harley",
                    Username: "Angel",
                    Description: "Motorcyle",
                    Condition: "new",
                    Image: "https://via.placeholder.com/100",
                    Date: "06/16/2020",
                    Location: "San Francisco, CA"
                }
            ]
        };
    }
    componentDidMount() {

        // axios.get('http://localhost:3000/toys')
        // .then(response => {
        //   console.log(response.data)
        //   this.setState({ toys: response.data })

        // })
        // .catch((error) => {
        //   console.log(error);
        // })
    }

    deleteToy(id) {
        axios.delete('http://localhost:3000/toys/' + id)
            .then(res => console.log(res.data));

        this.setState({
            toys: this.state.toys.filter(el => el._id !== id)
        })
    }

    toyList() {
        return this.state.toys.map((currenttoy, index) => {
            return <ToyCard props={currenttoy} deleteToy={this.deleteToy} key={index} />
        })
    }

    render() {
        return (
            <div>
                <h3>TOYS</h3>
                {/* <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Toyname</th>
                            <th>Description</th>
                            <th>Condition</th>
                            <th>Image</th>
                            <th>Date</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.state.toys.map((currenttoy, index) => {
                            return <ToyCard props={currenttoy} deleteToy={this.deleteToy} key={index} />
                        })}
                    </tbody>
                </table> */}
                <CardColumns>
                    {this.state.toys.map((currenttoy, index) => {
                        return <ToyCard props={currenttoy} deleteToy={this.deleteToy} key={index} />
                    })}

                </CardColumns>
            </div>
        )
    }
}