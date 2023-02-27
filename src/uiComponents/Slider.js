import React from "react";
import "./Slider.css"

const Slider = (props) => {
    return (
        <div className="">
            <p>{props.title}</p>
            <p className="gradient">{props.subtitle}</p>
            <div className="range__input">
              <label>
                <p>{props.min}</p>
                <p>{props.max}</p>
              </label>
              <input type="range" />
            </div>
          </div>
    );
}

export default Slider;