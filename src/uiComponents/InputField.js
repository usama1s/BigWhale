import React from "react";
import "./InputField.css";

const InputField = ({textField}) => {
  return (
    <div>
      <input className="inputfield" type="text" placeholder={textField} />
    </div>
  );
};

export default InputField;
