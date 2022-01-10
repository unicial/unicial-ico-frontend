import React from "react";
import { Row, Col } from "reactstrap";

const Option = () => {
  return (
    <>
      <div className="option-container">
        <Row style={{ margin: "0px" }}>
          <Col xs="12" lg="4">
            <div className="card-container">
              <img
                className="option-img"
                src="/static/images/white-paper.png"
                alt="white-paper-icon"
              />
              <p className="title">Read our</p>
              <p className="content">White Paper</p>
              <a href="/">
                <p className="card-link">Open Whitepaper (Pdf)</p>
              </a>
            </div>
          </Col>
          <Col xs="12" lg="4">
            <div className="card-container">
              <img
                className="option-img"
                src="/static/images/exchange.png"
                alt="exchange-icon"
              />
              <p className="title">1 ZNX price</p>
              <p className="content">1.18 USDT</p>
              <a href="/">
                <p className="card-link">Buy ZNX -25% OFF</p>
              </a>
            </div>
          </Col>
          <Col xs="12" lg="4">
            <div className="card-container">
              <img
                className="option-img"
                src="/static/images/team.png"
                alt="team-icon"
              />
              <p className="title">ICO Participants</p>
              <p className="content">370,000+</p>
              <a href="https://t.me/zilionixx">
                <p className="card-link">Join ZNX Telegram</p>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Option;
