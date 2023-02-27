import React from "react";
import InputField from "../uiComponents/InputField";
import SmallButton from "../uiComponents/SmallButton";
import "./Bouns.css";
import Investing from "./Investing";
import ProfitCalculator from "./ProfitCalculator";
import Rewards from "./Rewards";
import GradientInput from "../uiComponents/GradientInput";

const Bouns = () => {
  return (
    <div className="">
      <div className="two-sec">
        <div>
          <Rewards />
        </div>
        <div>
          <Investing />
        </div>
      </div>
      <div className="bouns">
        <div className="ctabouns">
          <h6>Referral Rewards</h6>
          <p>
            Invite someone with your referral link and earn a part of their
            profits as your referral rewards.
          </p>
          <a>
            <p> Know more </p>
          </a>
          <div className="table-overview">
            <table>
              <tr>
                <th>Level</th>
                <th>Network</th>
                <th>Volume</th>
                <th>Profit</th>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="totalbouns">
          <h6>Total Referral Rewards</h6>
          <p className="gradient">-BNB</p>
          <div style={{ width: "120px" }}>
            <SmallButton text="Learn More" />
          </div>
          <hr />
          <InputField textField="https://mycatteam.co/?ref=0x3e5" />
          <div style={{ marginTop: "16px", width: "120px" }}>
            <GradientInput text="Copy Link" />
          </div>
        </div>
      </div>
      <ProfitCalculator />
    </div>
  );
};

export default Bouns;
