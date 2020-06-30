// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./style.css";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
// import logo from "../../components/Image/fun-logo.png";
// import { FcApproval } from "react-icons/fc";
// import { IconContext } from "react-icons";
// import CommentBox from "..//../components/CommentSection/index";

// export default class productPage extends Component {
//   componentDidMount() {
//     axios
//       .get("http://localhost:3000/productpage")
//       .then(response => {
//         this.setState({ toys: response.data });
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <h3>Insert toy name here</h3>
//         <br></br>
//         <Container fluid>
//           <Row>
//             <Col xs={12} sm={6}>
//               <Card.Img src={logo} rounded />
//             </Col>
//             <Col className="description-text" xs={12} sm={6}>
//               <Card body className="text-center">
//                 {" "}
//                 NEW! <br></br>
//                 Description:
//               </Card>
//             </Col>
//           </Row>
//           <Row justify-content-md-right>
//             <Col xs={12} sm={6}></Col>
//             <Col xs={12} sm={6}>
//               <Row className="centerrow">
//                 <Col xs={3} sm={2}>
//                   <i class="favorite material-icons">favorite</i>
//                 </Col>
//                 <Col xs={3} sm={2}>
//                   <i class="share material-icons">share</i>
//                 </Col>
//                 <Col xs={3} sm={2}>
//                   <i class="more material-icons">more</i>
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//           <Row>
//             <Col xs={12} sm={6}>
//               <CommentBox />
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   }
// }
