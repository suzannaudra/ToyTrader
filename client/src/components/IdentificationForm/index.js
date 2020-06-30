import React from "react";
import "./style.css";

export function IdentificationForm(props) {
  console.log(props);
  return (
    <>
      {/* {!props.isRegister && (
                <input type="password" placeholder="Confirm Password" />
            )} */}

      <button type="submit" onClick={props.onClick}>
        {props.isRegister === true ? "Login" : "Register"}
      </button>
    </>
  );
}

export default IdentificationForm;
