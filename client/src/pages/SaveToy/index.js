// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import CardColumns from "react-bootstrap/CardColumns";

// export default class savedToy extends Component {
//   constructor(props) {
//     super(props);

//     this.deleteToy = this.deleteToy.bind(this);
//     this.state = { toys: [] };
//   }
//   componentDidMount() {
//     axios
//       .get("http://localhost:3000/savedtoys")
//       .then(response => {
//         this.setState({ toys: response.data });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   deleteToy(id) {
//     axios
//       .delete("http://localhost:3000/savedtoys/" + id)
//       .then(res => console.log(res.data));

//     this.setState({
//       toys: this.state.toys.filter(el => el._id !== id)
//     });
//   }

//   savedtoyList() {
//     return this.state.toys.map(currenttoy => {
//       return (
//         <savedToy
//           toy={currenttoy}
//           deleteToy={this.deleteToy}
//           key={currenttoy._id}
//         />
//       );
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h3>TOYS</h3>
//         <CardColumns>
//           {this.state.toys.map((currenttoy, index) => {
//             return (
//               <ToyCard
//                 props={currenttoy}
//                 savedtoyList={this.savedtoyList}
//                 key={index}
//               />
//             );
//           })}
//         </CardColumns>
//       </div>
//     );
//   }
// }
