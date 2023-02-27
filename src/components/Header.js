import React from "react";
import logo from "../images/Logo.svg";
import "./Header.css";
import list from "../images/List.svg";
import SecondaryButton from "../uiComponents/SecondaryButton";

const Header = () => {
  return (
    <div className=" container">
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="navbar__links">
          <SecondaryButton text="Connect Wallet" className="hide" />
          <div className="list">
            <img src={list} alt="list" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
