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
    <div className="c-distribution-container">
      <div
        id="crowdsale"
        data-vc-full-width="true"
        data-vc-full-width-init="true"
        className="vc_row wpb_row vc_row-fluid vc_custom_1523263520113 c-container"
        style={{ margin: "0 auto" }}
      >
        <div>
          <div className="c-distribution-title">
            We would like to proceed with the Zilionixx Crowdsale as follows:
          </div>
          <div className="c-distribution-history-container">
            <div className="c-distribution-history">
              <i className="fas fa-circle c-news-title-dot c-distribution-dot-icon"></i>
              <div className="c-distribution-history-text">
                <div>Feb 1th ~ Feb 10th</div>
                <div>
                  <span className="c-distribution-coin-text">1 ZNX</span>
                  <span> = 1.2 USDT, 1.5 milion ZNX </span>
                </div>
              </div>
            </div>
            <div className="c-distribution-history">
              <i className="fas fa-circle c-news-title-dot c-distribution-dot-icon"></i>
              <div className="c-distribution-history-text">
                <div>Feb 11th ~ Feb 20th</div>
                <div>
                  <span className="c-distribution-coin-text">1 ZNX</span>
                  <span> = 1.23 USDT, 1.5 milion ZNX </span>
                </div>
              </div>
            </div>
            <div className="c-distribution-history">
              <i className="fas fa-circle c-news-title-dot c-distribution-dot-icon"></i>
              <div className="c-distribution-history-text">
                <div>Feb 21th ~ Feb 28th</div>
                <div>
                  <span className="c-distribution-coin-text">1 ZNX</span>
                  <span> = 1.25 USDT, 1.5 milion ZNX </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-distribution-chart-container">
          <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-4 vc_col-md-12">
            <div className="vc_column-inner" style={{ paddingLeft: "0px" }}>
              <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">
                  <div className="wpb_wrapper c-distribution-chart-desc">
                    <p>
                      In order to make ZNX distribution process more efficient,
                      the ZNX price will now be linked to USDT:
                    </p>
                  </div>
                </div>
                <div className="clearboth"></div>
                <div
                  className="ct-divider divider_responsive_zero"
                  style={{ marginTop: "30px" }}
                ></div>
                <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">
                  <div className="wpb_wrapper c-distribution-chart-totalsupply">
                    <span style={{ position: "relative" }}>
                      ZNX Total Supply{" "}
                      <span className="fw-bold">88,888,888</span>
                      <img
                        src="/static/svg/distribution_vector.svg"
                        alt="vector"
                        className="c-distribution-chart-vector"
                      ></img>
                    </span>
                  </div>
                </div>
                <div className="clearboth"></div>
                <div
                  className="ct-divider divider_responsive_zero"
                  style={{ marginTop: "50px" }}
                ></div>
                <div className="c-distribution-price-content">
                  <div>1 ZNX</div>
                  <div className="c-distribution-dark">1.18 USDT</div>
                </div>
                <div className="clearboth"></div>
                <div
                  className="ct-divider divider_responsive_zero"
                  style={{ marginTop: "50px" }}
                ></div>
                <div
                  className="ct-button-container ct-button-position-left lazy-loading lazy-loading-showed"
                  style={{ visibility: "visible" }}
                >
                  <span className="c-buytoken-btn">
                    BUY ZNX -25% OFF
                    <i className="fas fa-arrow-right ms-2"></i>
                  </span>
                </div>
                <div className="clearboth"></div>
                <div
                  className="ct-divider "
                  style={{ marginTop: "50px" }}
                ></div>
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
      </div>
    </div>
  );
};

export default Distribution;
