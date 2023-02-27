import React from "react";
import "./FootBar.css";
import logo from "../images/Logo.svg";
import Youtube from "../images/Youtube.svg";
import Twitter from "../images/Twitter.svg";
import Telegram from "../images/Telegram.svg";
import Binance from "../images/Binance.svg";
import Blocknative from "../images/blocknative.svg";

const FootBar = () => {
  return (
    <footer className="container">
      <div>
        <div className="footer">
          <div className="footer__logo">
            <img src={logo} alt="logo"></img>
            <div className="social__links">
              <a><img src={Youtube} alt="logo" /></a>
              <a><img src={Twitter} alt="logo" /></a>
              <a><img src={Telegram} alt="logo" /></a>
            </div>
          </div>
          <div className="footer__nav">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Support</a>
              </li>
              <li>
                <a>Docs & Whitepaper</a>
              </li>
              <li>
                <a>FAQ/ How it Works</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer__guide">
            <ul>
              <li>
                <a>Getting Started with Gudie</a>
              </li>
              <li>
                <a>Earnings Calculator</a>
              </li>
              <li>
                <a>Refer & Earn </a>
              </li>
              <li>
                <a>Borrow with BigWhite</a>
              </li>
              <li>
                <a>Term of Use</a>
              </li>
            </ul>
          </div>
          <div className="footer__socaillink">
            <ul>
              <li>
                <a>BigWhale in the Press</a>
              </li>
              <li>
                <a>Telegram</a>
              </li>
              <li>
                <a>Twitter</a>
              </li>
              <li>
                <a>Youtube</a>
              </li>
              <li>
                <a>Medium</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <p>©2023 BigWhale Fintech LLC. Akk Rights Reserved</p>
        </div>
        <div className="company__logos">
          <img src={Binance} alt="biance_logo" />
          <img src={Blocknative} alt="Blocknative_logo" />
        </div>
        <div className="footer__end">
          <p style={{ textAlign: "center" }}>
            Thie "Binance Chain","Binance Smart Chain" & "Blocknative" trademarks
            belong to their respective trademark owners.
            <br /> INVEST RESPONSIBLY. WE CARE ABOUT OUR INVESTORS.
            <br /> BigWhale.io suggests you to invest responsibly, and do your own
            due diligence before investing in any DeFi projects. We suggest you to
            not stake more than 5% of your savings into the our protocol or any
            other DeFi project in general. If you require urgent assistance
            regarding your investment with us, please contact support for
            expedited refunds.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default FootBar;
