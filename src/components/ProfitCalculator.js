import React from "react";
import SmallButton from "../uiComponents/SmallButton";
import "./ProfitCalculator.css";
import GradientInput from "../uiComponents/GradientInput";
import Slider from "../uiComponents/Slider";

const ProfitCalculator = () => {
  return (
    <div className="calculator">
      <div className="main">
        <h6>Profit Calculator</h6>
        <p>Calculate how much you can earn with CAT</p>
        <div className="inputslide">
          <Slider title="Stacking Amount" subtitle="0.1 BNB" max="1000" min="1" />
          <Slider title="Staking Period" subtitle="7 Days" max="365" min="1" />
        </div>
      </div>
      <div className="second">
        <div className="">
          <div>
            <p>Profit</p>
            <GradientInput text="+0.01 BNB" />
          </div>
          <div>
            <p>Period</p>
            <GradientInput text="7 Days" />
          </div>
        </div>
        <div className="">
          <div>
            <p>Profit Percentage</p>
            <GradientInput text="8.40%" />
          </div>
          <div>
            <p>Total Balance</p>
            <GradientInput text="0.11" />
          </div>
        </div>
        <div className="">
        <div>
            <SmallButton text="Reinvest" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProfitCalculator;
