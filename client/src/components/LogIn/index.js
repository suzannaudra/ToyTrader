import React from "react";

export function LogIn(props) {
  // console.log(props);
  return (
    <>
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
        Login
      </button>
    </>
  );
}

export default LogIn;
