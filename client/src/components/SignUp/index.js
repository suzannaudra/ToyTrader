import React from "react";

export function SignUp(props) {
  // console.log(props);
  return (
    <>
      <input
        type="text"
        name="firstName"
        onChange={props.onChange}
        placeholder="First Name"
        value={props.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={props.onChange}
        placeholder="Last Name"
        value={props.lastName}
      />
      <input
        type="email"
        name="email"
        onChange={props.onChange}
        placeholder="Email"
        value={props.email}
      />
      <input
        type="password"
        name="password"
        onChange={props.onChange}
        placeholder="Password"
        value={props.password}
      />
      <button type="submit" onClick={props.onClick}>
        Sign Up
      </button>
    </>
  );
}

export default SignUp;
