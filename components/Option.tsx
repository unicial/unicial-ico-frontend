import React from "react";
import { Row, Col } from "reactstrap";

const Option = () => {
  return (
    <>
      <div className="option-container">
        <Row style={{ margin: "0px" }}>
          <Col xs="12" md="12" lg="4">
            <div className="card-container">
              <div className="c-upPart">
                <div className="c-footerimgContainer">
                  <img
                    className="option-img"
                    src="/static/svg/book.svg"
                    alt="white-paper-icon"
                  />
                </div>

                <div className="c-letterPart">
                  <p className="title">Read our1</p>
                  <p className="content">White Paper</p>
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
          </Col>
          <Col xs="12" md="12" lg="4">
            <div className="card-container">
              <div className="c-upPart">
                <div className="c-footerimgContainer">
                  <img
                    className="option-img"
                    src="/static/svg/coincheck.svg"
                    alt="exchange-icon"
                  />
                </div>

                <div className="c-letterPart">
                  <p className="title">1 ZNX price</p>
                  <p className="content">1.18 USDT</p>
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
          </Col>
          <Col xs="12" md="12" lg="4">
            <div className="card-container">
              <div className="c-upPart">
                <div className="c-footerimgContainer">
                  <img
                    className="option-img"
                    src="/static/svg/participants.svg"
                    alt="team-icon"
                  />
                </div>
                <div className="c-letterPart">
                  <p className="title">ICO Participants</p>
                  <p className="content">370,000+</p>
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
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Option;
