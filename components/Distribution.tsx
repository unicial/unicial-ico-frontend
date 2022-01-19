import React from "react";
import { Row, Col } from "reactstrap";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const Distribution = () => {
  ChartJS.register(ArcElement, Tooltip);
  const dataDoughnut = {
    labels: [
      "Zilionixx Infra",
      "Unicial Project Dev",
      "Dongle Trade Dev",
      "Defi & NFT",
      "DAO Community Dev",
      "Bonus reserved",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [25, 30, 10, 16, 14, 5],
        backgroundColor: [
          "#3a6efa",
          "#e75c22",
          "#8c6bff",
          "#f6c120",
          "#6fb1f1",
          "#79d21e",
        ],
        hoverBackgroundColor: ["#00f2a0", "#00ccc3", "#008481", "#0d2035"],
      },
    ],
  };
  const dataDoughnut_per = {
    labels: [
      "Distributed to Community",
      "Reserved Funding",
      "Founders and Team",
      "Marketing",
      "Advisors",
      "Bounty campaign",
    ],
    datasets: [
      {
        data: [45, 30, 15, 5, 3, 2],
        backgroundColor: [
          "#3a6efa",
          "#e75c22",
          "#8c6bff",
          "#f6c120",
          "#6fb1f1",
          "#79d21e",
        ],
        hoverBackgroundColor: [
          "#00e290",
          "#5AD3D1",
          "#FFC870",
          "#616774",
          "#e8e041",
        ],
      },
    ],
  };
  const plugins = [
    {
      beforeDraw: function (chart: any) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx;
        ctx.restore();
        var fontSize = (height / 160).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "top";
        var text = "Foo-bar",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
  ];
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
                  We would like to proceed with the Zilionxx Crowdsale as
                  follows:
                </p>
                <p style={{ color: "#000000", fontSize: "13px" }}>
                  <b>- Feb 1th ~ Feb 10th </b>
                  <br />
                  <b>&nbsp;&nbsp;&nbsp;1 ZNX = 1.2 USDT, 1.5 milion ZNX </b>
                </p>
                <p style={{ color: "#000000", fontSize: "13px" }}>
                  <b>- Feb 11th ~ Feb 20th </b>
                  <br />
                  <b>&nbsp;&nbsp;&nbsp;1 ZNX = 1.23 USDT, 1.5 milion ZNX </b>
                </p>
                <p style={{ color: "#000000", fontSize: "13px" }}>
                  <b>- Feb 21th ~ Feb 28th </b>
                  <br />
                  <b>&nbsp;&nbsp;&nbsp;1 ZNX = 1.25 USDT, 1.5 milion ZNX </b>
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
                      In order to make ZNX distribution process more efficient,
                      the ZNX price will now be linked to USDT:
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
                  <span style={{ color: "#121822" }}>1 ZNX = 1.18 USDT</span>
                  <br />
                  <span style={{ color: "#121822", fontSize: "18px" }}>
                    ZNX Total Supply 88,888,888
                  </span>
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
                BUY ZNX -25% OFF
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
                  <div className="c-chart-container">
                    <Doughnut
                      data={dataDoughnut}
                      options={{
                        responsive: true,
                      }}
                    />
                  </div>
                </div>
                <ul className="vc_chart-legend">
                  <li>
                    <span style={{ backgroundColor: "#3a6efa" }}></span>
                    <b>25%</b> Zilionixx Infra
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#e75c22" }}></span>
                    <b>30%</b> Unicial Project Dev
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#8c6bff" }}></span>
                    <b>10%</b> Dongle Trade Dev
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#f6c120" }}></span>
                    <b>16%</b> Defi & NFT
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#6fb1f1" }}></span>
                    <b>14%</b> DAO Community Dev
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#79d21e" }}></span>
                    <b>5%</b> Bonus reserved
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
                  ZNX distribution
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
                  <div className="c-chart-container">
                    <Doughnut
                      data={dataDoughnut_per}
                      options={{ responsive: true }}
                    />
                  </div>
                </div>
                <ul className="vc_chart-legend">
                  <li>
                    <span style={{ backgroundColor: "#3a6efa" }}></span>
                    <b>45%</b> Distributed to Community
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#e75c22" }}></span>
                    <b>30%</b> Reserved Funding
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#8c6bff" }}></span>
                    <b>15%</b> Founders and Team
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#f6c120" }}></span>
                    <b>5%</b> Marketing
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#6fb1f1" }}></span>
                    <b>3%</b> Advisors
                  </li>
                  <li>
                    <span style={{ backgroundColor: "#79d21e" }}></span>
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
