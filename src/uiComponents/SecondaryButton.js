import React from "react";
import "./SecondaryButton.css";

const SecondaryButton = ({ text }) => {
  return (
    <button className="secondary__button">
      <div>{text}</div>
    </button>
  );
};

export default SecondaryButton;
