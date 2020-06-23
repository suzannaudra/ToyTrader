import React, { Component } from 'react';
import axios from 'axios';
import IdentificationForm from '../../components/IdentificationForm';

export default class Validation extends Component {
    state = {
        userName: "",
        password: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleLogIn = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Welcome`);
        this.setState({
            userName: "",
            password: ""
        });
    };

    handleSignUp = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Hello ${this.state.userName} ${this.state.password}`);
        this.setState({
            userName: "",
            password: ""
        });
    };

    render() {
        return (
            <form className="form">
                <input
                    value={this.state.userName}
                    name="userName"
                    onChange={this.handleInputChange}
                    type="username"
                    placeholder="Username"
                />
                <input
                    value={this.state.password}
                    name="password"
                    onChange={this.handleInputChange}
                    type="password"
                    placeholder="Password"
                />
                <IdentificationForm
                    onClick={this.props.location.state.isResgister === true ? this.handleLogIn : this.handleSignUp}
                    isResgister={this.props.location.state.isResgister}
                />
            </form>
        )
    }
}


// export class CreateUser extends Component {
//     constructor(props) {
//         super(props);
//         //LINE BELOW CAUSES AN ERROR
//         //this.onChangeusername = this.onChangeusername.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             username: '',
//         }
//     }

//     onSubmit(e) {
//         e.preventDefault();

//         const user = {
//             username: this.state.username,
//         }

//         console.log(user);

//         axios.post('http://localhost:3000/users/indentify', user)
//             .then(res => console.log(res.data));

//         this.setState({
//             username: ''
//         })
//     }



//     render() {
//         return (
//             <div>
//                 <h3>Create New User</h3>
//                 <form onSubmit={this.onSubmit}>
//                     <div className="form-group">
//                         <label>username: </label>
//                         <input type="text"
//                             required
//                             className="form-control"
//                             value={this.state.username}
//                             onChange={this.onChangeusername}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input type="submit" value="Create User" className="btn btn=primary" />
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }