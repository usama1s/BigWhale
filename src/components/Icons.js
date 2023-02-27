import React from "react";
import "./Icons.css";
import Icon from "../uiComponents/Icon";
import MetaMask from "../images/icons/MetaMask_Fox 1.svg";
import Coinbase from "../images/icons/Coinbase.svg";
import Binance from "../images/icons/binance.svg";
import Blocto from "../images/icons/Blocto.svg";
import coin from "../images/icons/coin.svg";
import Iconblack from "../images/icons/lconblack.svg";
import opera from "../images/icons/opera.svg";
import solona from "../images/icons/solona.svg";
import TPicon from "../images/icons/TPicon.svg";
import trust from "../images/icons/trust.svg";
import Wicon from "../images/icons/Wicon.svg";
import brave from "../images/icons/brave.svg";

const Icons = () => {
  return (
    <div className="icons">
      <Icon img={MetaMask} width="92px" height="89px" />
      <Icon img={Coinbase} width="92px" height="89px" />
      <Icon img={Binance} width="92px" height="89px" />
      <Icon img={Wicon} width="92px" height="89px" />
      <Icon img={TPicon} width="92px" height="89px" />
      <Icon img={coin} width="92px" height="89px" />
      <Icon img={solona} width="92px" height="89px" />
      <Icon img={opera} width="92px" height="89px" />
      <Icon img={brave} width="92px" height="89px" />
      <Icon img={Iconblack} width="92px" height="89px" />
      <Icon img={Blocto} width="92px" height="89px" />
      <Icon img={trust} width="92px" height="89px" />
      <Icon img={solona} width="92px" height="89px" />
      <Icon img={solona} width="92px" height="89px" />
    </div>
  );
};

export default Icons;
