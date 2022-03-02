import React from "react";
import { Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

const OurTokens = () => {
  return (
    <div className="c-container" id="Our Tokens">
      <div style={{ marginTop: "140px" }} />
      <ScrollAnimation
              animateIn='fadeIn'
              animateOut='fadeOut'
              duration={2}
              delay={0}
              animateOnce={true}>
        <div className="mainTitle" style={{ textAlign: "left" }}>
          <div className="dot"></div>
          Our Zilionixx Coin(ZNX)
        </div>
        <div className="c-news-title-large">
          <span>What is Zilionixx Coin</span>
        </div>
        <div style={{ marginTop: "39px" }} />
        <div style={{ marginBottom: "16px" }}>
          <div className="our-sub-title">
            <span
              className="mainAnswer"
              style={{ color: "#191f25", textAlign: "left" }}
            >
              ZNX is a coin, native token on Zilionixx blockchain technology.
            </span>
          </div>
        </div>
      </ScrollAnimation>
      <div style={{ marginTop: "40px" }} />
      <Row className="our-background c-ourtoken-dialog-content">
        <Col className="c-column" xs="12" md="6" lg="4">
        <ScrollAnimation
              animateIn='fadeInLeft'
              animateOut='fadeInRight'
              duration={2}
              delay={0}
              animateOnce={true}>
            <div
              className="c-introduceContainer"
              style={{ justifyContent: "left" }}
            >
              <div className="c-number">01</div>
              <h3 className="title-h3" style={{ marginBottom: "23px" }}>
                Zilionixx Protocol
              </h3>
            </div>
            <div className="our-card-content">
              Zilionixx is being developed as the next-generation blockchain that
              ensures safer and faster transaction processing speed by completing
              a consensus algorithm based on the NONCEchain layer that combines
              hashchain and DAG.
            </div>
          </ScrollAnimation>
          <div style={{ marginTop: "100px" }} />
          <ScrollAnimation
              animateIn='fadeInLeft'
              animateOut='fadeOutLeft'
              duration={2}
              delay={0}
              animateOnce={true}>
            <div
              className="c-introduceContainer"
              style={{ justifyContent: "left" }}
            >
              <div className="c-number">03</div>
              <h3 className="title-h3" style={{ marginBottom: "23px" }}>
                Unicial & Meditech
              </h3>
            </div>

            <div className="our-card-content">
              We have built a virtual world in Zilionixx and are developing
              services that guarantee various social activities, such as medical
              volunteering and holding concerts.
            </div>
          </ScrollAnimation>
        </Col>

        <Col
          className="c-column"
          xs="12"
          md="6"
          // lg={{ offset: 4, size: 4 }}
          style={{ textAlign: "right" }}
        >
           <ScrollAnimation
              animateIn='fadeInRight'
              animateOut='fadeOutRight'
              duration={2}
              delay={0}
              animateOnce={true}>
            <div
              className="c-introduceContainer"
              style={{ justifyContent: "right" }}
            >
              <div className="c-number">02</div>
              <h3 className="title-h3" style={{ marginBottom: "23px" }}>
                AI Smart Contract
              </h3>
            </div>

            <div className="our-card-content" style={{ marginLeft: "auto" }}>
              By introducing AI into smart contracts, we are developing smart
              contract VMs that will be more useful in Unicial and other dApps by
              realizing the combination of Zilioxx blockchain data and AI.
            </div>
          </ScrollAnimation>
          <div style={{ marginTop: "100px" }} />
          <ScrollAnimation
              animateIn='fadeInRight'
              animateOut='fadeOutRight'
              duration={2}
              delay={0}
              animateOnce={true}>
            <div
              className="c-introduceContainer"
              style={{ justifyContent: "right" }}
            >
              <div className="c-number">04</div>
              <h3 className="title-h3" style={{ marginBottom: "23px" }}>
                Interact with <br />
                Game
              </h3>
            </div>

            <div className="our-card-content" style={{ marginLeft: "auto" }}>
              We are trying to develop an SDK that can be used easily by game
              developers by improving transaction processing speed on blockchain
              so that Zilionixx can be used in games.
            </div>
          </ScrollAnimation> 
        </Col>
      </Row>
      <div style={{ marginBottom: "125px" }} />
    </div>
  );
};

export default OurTokens;
