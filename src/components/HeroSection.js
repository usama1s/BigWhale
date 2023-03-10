import React from "react";
import "./HeroSection.css";
import heroImage from "../images/HeroImage.svg";
import Icons from "./Icons";
import Icon from "../uiComponents/Icon";
import PrimaryButton from "../uiComponents/PrimaryButton";

const HeroSection = () => {
  return (
    <div className="herosection">
      <div style={{display: "flex", justifyContent: "center"}}>
      <Icon img={heroImage} width="250px" height="242px" />
      </div>
      
      <h2>Please, Connect your wallet</h2>
      <h3>
        Please connect your wallet to see your staking balance, daily interest,
        re-staking, referral rewards & more.
      </h3>
      <PrimaryButton text="Connect Wallet" />
      <p>
        <span className="gradient">New Users: </span>Here for the first time?
        Welcome! Check out our <a>Quick Start Guide </a> to get started
        within minutes. Its short & easy !
      </p>
      <p>
        The Bigwhale DeFi protocol is powered by 14+ web3 wallets used by
        millions of people around the world
      </p>
      <Icons />
    </div>
  );
};

export default HeroSection;
