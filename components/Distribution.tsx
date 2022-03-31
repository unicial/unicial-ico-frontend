import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { dateToTime } from "../common/utile";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getCurrentStage, getBuyPermission } from "../store/ICOinfo/selectors";
import { setCurrentStage } from "../store/ICOinfo";
import { stageName, price } from "../common/constant";
import { showBuyModal } from "../store/buymodal";
import { showAlert } from "../store/alert";
import ScrollAnimation from "react-animate-on-scroll";
import { formatDate } from "../common/utile";

const Distribution = () => {
  ChartJS.register(ArcElement, Tooltip);

  const dispatch = useAppDispatch();
  const currentStage = useAppSelector(getCurrentStage);
  const buyPermission = useAppSelector(getBuyPermission);

  const handleModal = () => {
    if (buyPermission) dispatch(showBuyModal(true));
    else {
      if (currentStage === stageName.preStage || currentStage === "") {
        dispatch(
          showAlert({
            message: `Zilionixx crowdsale will be start from ${formatDate(
              process.env.firstStage
            )}`,
            severity: "warning",
          })
        );
      } else if (currentStage === stageName.closeStage) {
        dispatch(
          showAlert({
            message: `Zilionixx crowdsale ended on ${formatDate(
              process.env.lastStage
            )}`,
            severity: "warning",
          })
        );
      } else {
        dispatch(
          showAlert({
            message: "Left time is done",
            severity: "warning",
          })
        );
      }
    }
  };

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
          "#218B54",
          "#00D58B",
          "#AFF2E4",
          "#78F0D6",
          "#40E1D1",
          "#00C5CD",
        ],
        hoverBackgroundColor: [
          "#218B54",
          "#00D58B",
          "#AFF2E4",
          "#78F0D6",
          "#40E1D1",
          "#00C5CD",
        ],
        borderWidth: 0,
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
          "#218B54",
          "#00D58B",
          "#AFF2E4",
          "#78F0D6",
          "#40E1D1",
          "#00C5CD",
        ],
        hoverBackgroundColor: [
          "#218B54",
          "#00D58B",
          "#AFF2E4",
          "#78F0D6",
          "#40E1D1",
          "#00C5CD",
        ],
        borderWidth: 0,
      },
    ],
  };

  useEffect(() => {
    const currentTimes = dateToTime("current");
    const firstStageTimes = dateToTime(`${process.env.firstStage}`);
    const secondStageTimes = dateToTime(`${process.env.secondStage}`);
    const thirdStageTimes = dateToTime(`${process.env.thirdStage}`);
    const lastStageTimes = dateToTime(`${process.env.lastStage}`);

    if (currentTimes < firstStageTimes) {
      dispatch(setCurrentStage(stageName.preStage));
    } else if (
      currentTimes >= firstStageTimes &&
      currentTimes < secondStageTimes
    ) {
      dispatch(setCurrentStage(stageName.firstStage));
    } else if (
      currentTimes >= secondStageTimes &&
      currentTimes < thirdStageTimes
    ) {
      dispatch(setCurrentStage(stageName.secondStage));
    } else if (
      currentTimes >= thirdStageTimes &&
      currentTimes < lastStageTimes
    ) {
      dispatch(setCurrentStage(stageName.thirdStage));
    } else {
      dispatch(setCurrentStage(stageName.closeStage));
    }
    formatDate(process.env.firstStage);
  }, []);

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
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            duration={2}
            delay={0}
            animateOnce={true}
          >
            <div className="c-distribution-title">
              We would like to proceed with the Zilionixx Crowdsale as follows:
            </div>
            <div className="c-distribution-history-container">
              <div className="c-distribution-history">
                <i className="fas fa-circle c-news-title-dot c-distribution-dot-icon"></i>
                <div className="c-distribution-history-text">
                  <div>
                    {formatDate(process.env.firstStage)} ~{" "}
                    {formatDate(process.env.secondStage)}
                  </div>
                  <div>
                    <span className="c-distribution-coin-text">1 ZNX</span>
                    <span> = {price.firstStage} USDT, 1.5 milion ZNX </span>
                  </div>
                </div>
              </div>
              <div className="c-distribution-history">
                <i className="fas fa-circle c-news-title-dot c-distribution-dot-icon"></i>
                <div className="c-distribution-history-text">
                  <div>
                    {formatDate(process.env.secondStage)} ~{" "}
                    {formatDate(process.env.thirdStage)}
                  </div>
                  <div>
                    <span className="c-distribution-coin-text">1 ZNX</span>
                    <span> = {price.secondStage} USDT, 1.5 milion ZNX </span>
                  </div>
                </div>
              </div>
              <div className="c-distribution-history">
                <i className="fas fa-circle c-news-title-dot c-distribution-dot-icon"></i>
                <div className="c-distribution-history-text">
                  <div>
                    {formatDate(process.env.thirdStage)} ~{" "}
                    {formatDate(process.env.lastStage)}
                  </div>
                  <div>
                    <span className="c-distribution-coin-text">1 ZNX</span>
                    <span> = {price.thirdStage} USDT, 1.5 milion ZNX </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <div className="c-distribution-chart-container">
          <div className="c-distribution-bonus-container">
            <div className="c-distribution-history">
              <i className="fas fa-circle c-news-title-dot c-distribution-dot-icon"></i>
              <div className="c-distribution-bonus-text">
                <div>
                  Investment from $500 <br />
                  <span className="title-h5">+10% ZNX </span> tokens
                </div>
              </div>
            </div>
            <div className="c-distribution-history">
              <i className="fas fa-circle c-news-title-dot c-distribution-dot-icon"></i>
              <div className="c-distribution-bonus-text">
                <div>
                  Investment from $1 000 <br />
                  <span className="title-h5">+20% ZNX </span> tokens
                </div>
              </div>
            </div>
            <div className="c-distribution-history">
              <i className="fas fa-circle c-news-title-dot c-distribution-dot-icon"></i>
              <div className="c-distribution-bonus-text">
                <div>
                  Investment from $5 000 <br />
                  <span className="title-h5">+25% ZNX </span> tokens
                </div>
              </div>
            </div>
          </div>
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
                  style={{ marginTop: "50px" }}
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
                <div className="ct-divider" style={{ marginTop: "50px" }}></div>
                <div className="c-distribution-price-content">
                  <div>1 ZNX</div>
                  <div className="c-distribution-dark">
                    {currentStage === stageName.firstStage
                      ? price.firstStage
                      : currentStage === stageName.secondStage
                      ? price.secondStage
                      : price.thirdStage}
                    USDT
                  </div>
                </div>
                <div className="clearboth"></div>
                <div className="ct-button-container c-distribution-buytoken-btn-content">
                  <span
                    className="c-distribution-buytoken-btn"
                    onClick={() => handleModal()}
                  >
                    BUY ZNX
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
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeOutUp"
                duration={2}
                delay={0}
                animateOnce={true}
              >
                <div className="wpb_wrapper">
                  <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">
                    <div className="wpb_wrapper">
                      <div
                        className="title-h3"
                        style={{ textTransform: "none" }}
                      >
                        Fund distribution
                      </div>
                    </div>
                  </div>
                  <div className="clearboth"></div>
                  <div
                    className="ct-divider divider_chart"
                    style={{ marginTop: "50px" }}
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
                      <div className="c-chart-container">
                        <Doughnut
                          data={dataDoughnut}
                          options={{
                            responsive: true,
                          }}
                        />
                        <span className="c-chart-inner-circle"></span>
                        <img
                          className="c-chart-inner-rectangle-fund"
                          src="/static/svg/rectangle.svg"
                          alt="rectangle"
                        />
                      </div>
                      <div
                        className="ct-divider divider_chart"
                        style={{ marginTop: "50px" }}
                      ></div>
                      <ul className="vc_chart-legend">
                        <li>
                          <span style={{ backgroundColor: "#218B54" }}></span>
                          <b>25%</b> Zilionixx Infra
                        </li>
                        <li>
                          <span style={{ backgroundColor: "#00D58B" }}></span>
                          <b>30%</b> Unicial Project Dev
                        </li>
                        <li>
                          <span style={{ backgroundColor: "#AFF2E4" }}></span>
                          <b>10%</b> Dongle Trade Dev
                        </li>
                        <li>
                          <span style={{ backgroundColor: "#78F0D6" }}></span>
                          <b>16%</b> Defi & NFT
                        </li>
                        <li>
                          <span style={{ backgroundColor: "#40E1D1" }}></span>
                          <b>14%</b> DAO Community Dev
                        </li>
                        <li>
                          <span style={{ backgroundColor: "#00C5CD" }}></span>
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
              </ScrollAnimation>
            </div>
          </div>
          <div className="donut wpb_column vc_column_container vc_col-sm-6 vc_col-lg-4 vc_col-md-6">
            <div className="vc_column-inner" style={{ paddingRight: "0px" }}>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeOutUp"
                duration={2}
                delay={0}
                animateOnce={true}
              >
                <div className="wpb_wrapper">
                  <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">
                    <div className="wpb_wrapper">
                      <div
                        className="title-h3"
                        style={{ textTransform: "none" }}
                      >
                        ZNX distribution
                      </div>
                    </div>
                  </div>
                  <div className="clearboth"></div>
                  <div
                    className="ct-divider divider_chart"
                    style={{ marginTop: "50px" }}
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
                      <div className="c-chart-container">
                        <Doughnut
                          data={dataDoughnut_per}
                          options={{ responsive: true }}
                        />
                        <span className="c-chart-inner-circle"></span>
                        <img
                          className="c-chart-inner-rectangle-znx"
                          src="/static/svg/rectangle.svg"
                          alt="rectangle"
                        />
                      </div>
                      <div
                        className="ct-divider divider_chart"
                        style={{ marginTop: "50px" }}
                      ></div>
                      <ul className="vc_chart-legend">
                        <li>
                          <span style={{ backgroundColor: "#218B54" }}></span>
                          <b>45%</b> Distributed to Community
                        </li>
                        <li>
                          <span style={{ backgroundColor: "#00D58B" }}></span>
                          <b>30%</b> Reserved Funding
                        </li>
                        <li>
                          <span style={{ backgroundColor: "#AFF2E4" }}></span>
                          <b>15%</b> Founders and Team
                        </li>
                        <li>
                          <span style={{ backgroundColor: "#78F0D6" }}></span>
                          <b>5%</b> Marketing
                        </li>
                        <li>
                          <span style={{ backgroundColor: "#40E1D1" }}></span>
                          <b>3%</b> Advisors
                        </li>
                        <li>
                          <span style={{ backgroundColor: "#00C5CD" }}></span>
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
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
