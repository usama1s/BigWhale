import React from "react";
import SmallButton from "../uiComponents/SmallButton";
import "./Investing.css";
import GradientInput from "../uiComponents/GradientInput";

const Investing = () => {
  return (
    <div className="investing">
      <h6>Investing</h6>
      <div className="remainingbalance">
        <div style={{ width: "50%" }}>
          <p>Wallet Balance</p>
          <GradientInput text="0.02331 BNB" />
        </div>
        <div style={{ width: "50%" }}>
          <p>0.0 BNB</p>
          <GradientInput text="0.00000" />
        </div>
      </div>
      <hr />
      <div>
        <p>Daily Rewards</p>
        <div>
          <GradientInput text="-" />
        </div>
      </div>
      <hr />
      <div>
        <p>Daily Rewards</p>
        <div className="buttons">
          <GradientInput text="0.013" />
          <GradientInput text="Min Value is 0.1" />
        </div>
        <div>
          <SmallButton text="Start Investing" />
        </div>
      </div>
    </div>
  );
};

export default Investing;
