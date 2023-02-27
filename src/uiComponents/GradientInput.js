import React from "react";
import "./GradientInput.css"

const GradientInput = (props) =>{
    return (
        <div className="gradient-input">
            <p> {props.text} </p>
        </div>
    );
}

export default GradientInput;