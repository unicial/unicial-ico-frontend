import React, { useState } from "react";
import { stageName, price } from "../common/constant";
import { getCurrentStage, getBuyPermission } from "../store/ICOinfo/selectors";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { showBuyModal } from "../store/buymodal";
import { showAlert } from "../store/alert";
import ScrollAnimation from "react-animate-on-scroll";
import { formatDate } from "../common/utile";

const Option = () => {
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
            message: `Zilionixx crowdsale ${formatDate(process.env.lastStage)}`,
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

  return (
    <div className="option-container">
      <div className="c-container c-option-content">
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOut="fadeOutLeft"
          duration={2}
          delay={0}
          animateOnce={true}
        >
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

            <a
              href="/static/zilionixx-whitepaper.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <p className="card-link">
                Open Whitepaper (Pdf)
                <img src="/static/svg/arrow.svg" />
              </p>
            </a>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          duration={2}
          delay={0}
          animateOnce={true}
        >
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
                <p className="c-option-text-content">
                  {currentStage === stageName.firstStage
                    ? price.firstStage
                    : currentStage === stageName.secondStage
                    ? price.secondStage
                    : price.thirdStage}
                  &nbsp; USDT
                </p>
                <img className="c-pig" src="/static/svg/pig.svg" />
              </div>
            </div>

            <span onClick={() => handleModal()}>
              <p className="card-link">
                Buy ZNX
                <img src="/static/svg/arrow.svg" />
              </p>
            </span>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOut="fadeOutRight"
          duration={2}
          delay={0}
          animateOnce={true}
        >
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

            <a
              href="https://t.me/zilionixxcommunity"
              target={"_blank"}
              rel="noreferrer"
            >
              <p className="card-link">
                Join ZNX Telegram
                <img src="/static/svg/arrow.svg" />
              </p>
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default Option;
