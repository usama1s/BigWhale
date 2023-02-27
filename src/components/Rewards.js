import React from "react";
import GradientInput from "../uiComponents/GradientInput";
import SmallButton from "../uiComponents/SmallButton";
import "./Rewards.css";
import GreyButton from "../uiComponents/GreyButton";

const Rewards = () => {
  return (
    <div className="reward">
      <div className="rewards">
        <div>
          <h6>Rewards</h6>
          <p>Daily Bonus Through</p>
        </div>
        <div className="time">
          <div className="gradient_line">
            <span className="text">15</span>
            <label>Hours</label>
          </div>
          <div className="dots">
            <p ></p>
            <p ></p>
          </div>
          <div className="gradient_line">
            <span className="text">37</span>
            <label>Minutes</label>
          </div>
          <div className="dots">
            <p ></p>
            <p ></p>
          </div>
          <div className="gradient_line">
            <span className="text">33</span>
            <label>Second</label>
          </div>
        </div>
      </div>
      <hr />
      <div className="your__rewards">
        <div>
          <p>Your Rewards</p>
          <SmallButton text="Reinvest" />
        </div>
        <div>
          <p>0.0 BNB</p>
          <GradientInput text="0.0" />
        </div>
      </div>
      <hr />
      <div>
        <p>
          To withdraw or reinvest your income, specify the desired value and
          press "Withdraw reward" or "Reinvest" buttons.
        </p>
        <div className="buttons">
          <SmallButton text="Withdraw Reward" />
          <GreyButton text="Leave CAT" />
        </div>
      </div>
    </div>
  );
};

export default Rewards;
