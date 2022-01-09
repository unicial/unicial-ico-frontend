import React from "react";
import { Row, Col } from "reactstrap";

const Distribution = () => {
  return (
    <div
      id="crowdsale"
      data-vc-full-width="true"
      data-vc-full-width-init="true"
      className="vc_row wpb_row vc_row-fluid vc_custom_1523263520113 c-container"
      style={{ margin: "0 auto" }}
    >
      <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-12">
        <div className="vc_column-inner" style={{ paddingLeft: "0px" }}>
          <div className="wpb_wrapper">
            <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">
              <div className="wpb_wrapper">
                <p>
                  Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed
                  doiusmod tempor incidi labore et dolore magna aliqua. Ut enim
                  ad mini veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="clearboth"></div>
            <div
              className="ct-divider divider_responsive_zero"
              style={{ marginTop: "30px" }}
            ></div>
            <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">
              <div className="wpb_wrapper">
                <p>
                  <strong>
                    <span style={{ color: "#121822" }}>
                      In order to make CRN token distribution process more
                      efficient, the CRN price will now be linked to BTC:
                    </span>{" "}
                  </strong>
                </p>
              </div>
            </div>
            <div className="clearboth"></div>
            <div
              className="ct-divider divider_responsive_zero"
              style={{ marginTop: "25px" }}
            ></div>
            <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">
              <div className="wpb_wrapper">
                <div className="title-h3" style={{ textAlign: "left" }}>
                  <span style={{ color: "#121822" }}>1 CRN = 0.00014 BTC</span>
                </div>
              </div>
            </div>
            <div className="clearboth"></div>
            <div
              className="ct-divider divider_responsive_zero"
              style={{ marginTop: "80px" }}
            ></div>
            <div
              className="ct-button-container ct-button-position-left lazy-loading lazy-loading-showed"
              style={{ visibility: "visible" }}
            >
              <a
                className="ct-button ct-button-size-large ct-button-style-flat ct-button-text-weight-normal lazy-loading-item lazy-loading-showed ct-button-hover"
                data-ll-effect="drop-right-without-wrap"
                style={{
                  borderRadius: "32px",
                  background:
                    "linear-gradient(to left, rgb(0, 226, 144), rgb(18, 178, 165)); color: rgb(255, 255, 255)",
                  opacity: 1,
                  position: "relative",
                  left: "0px",
                }}
                href=""
                target="_self"
              >
                BUY TOKENS -25% OFF
              </a>
            </div>
            <div className="clearboth"></div>
            <div className="ct-divider " style={{ marginTop: "50px" }}></div>
          </div>
        </div>
      </div>
      <div className="donut wpb_column vc_column_container vc_col-sm-6 vc_col-lg-4 vc_col-md-6">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">
              <div className="wpb_wrapper">
                <div className="title-h3" style={{ textTransform: "none" }}>
                  Fund distribution
                </div>
              </div>
            </div>
            <div className="clearboth"></div>
            <div
              className="ct-divider divider_chart"
              style={{ marginTop: "100px" }}
            ></div>
            <div
              className="vc_chart vc_round-chart wpb_content_element"
              data-vc-legend="1"
              data-vc-tooltips="1"
              data-vc-animation="easeInOutCubic"
              data-vc-stroke-color="#ffffff"
              data-vc-stroke-width="2"
              data-vc-type="doughnut"
              data-vc-values='[{"value":60,"color":"#00e290","highlight":"#00af70","label":"<b>350 millions<\/b> Token"},{"value":20,"color":"#00bbb3","highlight":"#008882","label":"<b>150 millions<\/b> Token sale"},{"value":10,"color":"#007471","highlight":"#00413f","label":"<b>10 millions<\/b> Hard Cap"},{"value":10,"color":"#0d2035","highlight":"#03070c","label":"<b>$0.04<\/b> - Coin price"}]'
            >
              <div className="wpb_wrapper">
                <div className="vc_chart-with-legend">
                  <canvas
                    className="vc_round-chart-canvas"
                    width="187"
                    height="187"
                    style={{ width: "281px", height: "281px" }}
                  ></canvas>
                </div>
                <ul className="vc_chart-legend">
                  <li>
                    <span style={{ backgroundColor: "#00e290" }}></span>
                    <b>350 millions</b> Token
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#00bbb3" }}></span>
                    <b>150 millions</b> Token sale
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#007471" }}></span>
                    <b>10 millions</b> Hard Cap
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#0d2035" }}></span>
                    <b>$0.04</b> - Coin price
                  </li>
                </ul>
              </div>
            </div>
            <div className="clearboth"></div>
            <div
              className="ct-divider divider_responsive"
              style={{ marginTop: "140px" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="donut wpb_column vc_column_container vc_col-sm-6 vc_col-lg-4 vc_col-md-6">
        <div className="vc_column-inner" style={{ paddingRight: "0px" }}>
          <div className="wpb_wrapper">
            <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">
              <div className="wpb_wrapper">
                <div className="title-h3" style={{ textTransform: "none" }}>
                  Token distribution
                </div>
              </div>
            </div>
            <div className="clearboth"></div>
            <div
              className="ct-divider divider_chart"
              style={{ marginTop: "100px" }}
            ></div>
            <div
              className="vc_chart vc_round-chart wpb_content_element"
              data-vc-legend="1"
              data-vc-tooltips="1"
              data-vc-animation="easeInOutCubic"
              data-vc-stroke-color="#ffffff"
              data-vc-stroke-width="2"
              data-vc-type="doughnut"
              data-vc-values='[{"value":75,"color":"#00e290","highlight":"#00af70","label":"<b>45%<\/b> Distributed to Community"},{"value":13,"color":"#00bbb3","highlight":"#008882","label":"<b>25%<\/b> Reserved Funding"},{"value":12,"color":"#007471","highlight":"#00413f","label":"<b>9%<\/b> Founders and Team"},{"value":10,"color":"#0d2035","highlight":"#03070c","label":"<b>3%<\/b> Advisors"},{"value":5,"color":"#e8e041","highlight":"#dbd21b","label":"<b>2%<\/b> \u201cBounty\u201d campaign"}]'
            >
              <div className="wpb_wrapper">
                <div className="vc_chart-with-legend">
                  <canvas
                    className="vc_round-chart-canvas"
                    width="187"
                    height="187"
                    style={{ width: "281px", height: "281px" }}
                  ></canvas>
                </div>
                <ul className="vc_chart-legend">
                  <li>
                    <span style={{ backgroundColor: "#00e290" }}></span>
                    <b>45%</b> Distributed to Community
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#00bbb3" }}></span>
                    <b>25%</b> Reserved Funding
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#007471" }}></span>
                    <b>9%</b> Founders and Team
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#0d2035" }}></span>
                    <b>3%</b> Advisors
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#e8e041" }}></span>
                    <b>2%</b> “Bounty” campaign
                  </li>
                </ul>
              </div>
            </div>
            <div className="clearboth"></div>
            <div
              className="ct-divider divider_responsive"
              style={{ marginTop: "70px" }}
            ></div>
            <div className="clearboth"></div>
            <div
              className="ct-divider divider_responsive"
              style={{ marginTop: "75px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
