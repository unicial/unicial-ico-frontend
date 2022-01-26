import React from "react";
import { Row, Col } from "reactstrap";

const Option = () => {
  return (
    <div className="option-container">
      <div className="c-container c-option-content">
        <div className="c-option-card-container">
          <div className="c-upPart">
            <div className="c-footerimgContainer">
              <img
                className="option-img"
                src="/static/svg/book.svg"
                alt="white-paper-icon"
              />
            </div>

            <div className="c-option-letterPart">
              <p className="c-option-text-title">Read our</p>
              <p className="c-option-text-content">White Paper</p>
              <img className="c-pig" src="/static/svg/pig.svg" />
            </div>
          </div>

          <a href="/">
            <p className="card-link">
              Open Whitepaper (Pdf)
              <img src="/static/svg/arrow.svg" />
            </p>
          </a>
        </div>
        <div className="c-option-card-container">
          <div className="c-upPart">
            <div className="c-footerimgContainer">
              <img
                className="option-img"
                src="/static/svg/coincheck.svg"
                alt="exchange-icon"
              />
            </div>

            <div className="c-option-letterPart">
              <p className="c-option-text-title">1 ZNX price</p>
              <p className="c-option-text-content">1.18 USDT</p>
              <img className="c-pig" src="/static/svg/pig.svg" />
            </div>
          </div>

          <a href="/">
            <p className="card-link">
              Buy ZNX -25% OFF
              <img src="/static/svg/arrow.svg" />
            </p>
          </a>
        </div>
        <div className="c-option-card-container c-option-mr-large">
          <div className="c-upPart">
            <div className="c-footerimgContainer">
              <img
                className="option-img"
                src="/static/svg/participants.svg"
                alt="team-icon"
              />
            </div>
            <div className="c-option-letterPart">
              <p className="c-option-text-title">ICO Participants</p>
              <p className="c-option-text-content">370,000+</p>
              <img className="c-pig" src="/static/svg/pig.svg" />
            </div>
          </div>

          <a href="https://t.me/zilionixx">
            <p className="card-link">
              Join ZNX Telegram
              <img src="/static/svg/arrow.svg" />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Option;
