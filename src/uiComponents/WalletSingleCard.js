import React from "react";
import "./WalletSingleCard.css";
import Icon from "./Icon";
import info_icon from "../images/info_icon.svg";

const WalletSingleCard = (props) => {
    return (
        <div className="card">
            <Icon img={props.icon} width="53px" height="51px" />
            <div className="card__info">
                <div>
                    <h2>{props.WalletTitle} </h2>
                    <img src={info_icon} alt="info" />
                </div>
                <div>
                    <span>____</span>
                    <p>BNB</p>
                </div>
            </div>
        </div>
    );
}

export default WalletSingleCard