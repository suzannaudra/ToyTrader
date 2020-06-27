import React from "react";
import Input from "../Input";
import './style.css'

export function IdentificationForm(props) {
    console.log(props)
    return (
        <form className="form">
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            {!props.isResgister && (
                <input type="password" placeholder="Confirm Password" />
            )}

            <button type="submit">
                {props.isResgister === true ? "Login" : "Register"}
            </button>
        </form>
    );
}

export default IdentificationForm;