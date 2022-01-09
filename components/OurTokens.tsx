import React from "react";
import { Row, Col, Container } from "reactstrap";

const OurTokens = () => {
  return (
    <div className="c-container">
      <div style={{ marginTop: "140px" }} />
      <h3 className="title-h3" style={{ textAlign: "center" }}>
        Our Tokens
      </h3>
      <h1 className="title-h1" style={{ textAlign: "center" }}>
        What is Cryption Coin
      </h1>
      <div style={{ marginTop: "60px" }} />
      <div style={{ marginBottom: "16px" }}>
        <div className="our-sub-title">
          <span className="styled-subtitle" style={{ color: "#191f25" }}>
            Cryption Coin is a token, based on the Ethereum blockchain
            technology. It is the core asset of the new Cryption Marketplace.
          </span>
        </div>
      </div>
      <div style={{ marginTop: "120px" }} />
      <Row className="our-background">
        <Col className="c-column" xs="12" md="6" lg="4">
          <h3 className="title-h3" style={{ marginBottom: "23px" }}>
            Without blockchain fluctuations
          </h3>
          <div className="our-card-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam.
          </div>
          <div style={{ marginTop: "100px" }} />

          <h3 className="title-h3" style={{ marginBottom: "23px" }}>
            No transaction
            <br />
            fees
          </h3>
          <div className="our-card-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam.
          </div>
        </Col>

        <Col
          className="c-column"
          xs="12"
          md="6"
          lg={{ offset: 4, size: 4 }}
          style={{ textAlign: "right" }}
        >
          <h3 className="title-h3" style={{ marginBottom: "23px" }}>
            Protects
            <br />
            the identity
          </h3>
          <div className="our-card-content" style={{ marginLeft: "auto" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam.
          </div>
          <div style={{ marginTop: "100px" }} />

          <h3 className="title-h3" style={{ marginBottom: "23px" }}>
            Instant
            <br />
            Operations
          </h3>
          <div className="our-card-content" style={{ marginLeft: "auto" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim veniam.
          </div>
        </Col>
      </Row>
      <div style={{ marginBottom: "125px" }} />
    </div>
  );
};

export default OurTokens;
