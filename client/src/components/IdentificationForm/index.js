import React from "react";
import "./style.css";

export function IdentificationForm(props) {
  console.log(props);
  return (
    <>
      {/* {!props.isResgister && (
                <input type="password" placeholder="Confirm Password" />
            )} */}

      <button type="submit" onClick={props.onClick}>
        {props.isResgister === true ? "Login" : "Register"}
      </button>
    </>
  );
}

export default IdentificationForm;
