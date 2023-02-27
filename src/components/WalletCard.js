import React from "react";
import WalletSingleCard from "../uiComponents/WalletSingleCard";
import "./WalletCard.css";
import wallet from "../images/Wallet.svg";
import Deposit from "../images/Deposit.svg";
import Interests from "../images/Interests.svg";
import Rewards from "../images/Rewards.svg";


const WalletCard = () => {
  return (
    <div className="walletcards">
      
      <WalletSingleCard WalletTitle="Wallet Balance" icon={wallet} />
      <WalletSingleCard WalletTitle="Daily Interest" icon={Interests} />
      <WalletSingleCard WalletTitle="Your Deposit" icon={Deposit} />
      <WalletSingleCard WalletTitle="Daily Interest" icon={Interests} />
      <WalletSingleCard WalletTitle="Refer Awards" icon={Rewards} />
    </div>
  );
};

export default WalletCard;
