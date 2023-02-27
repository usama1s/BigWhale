import React from "react";
import "./Icon.css"

const Icon = (props) => {
    return (
        <div className="icon" style={{width: props.width, height: props.height}}>
            <div>
                <img src={props.img} alt="image" />
            </div>
        </div>
    );
}

export default Icon;