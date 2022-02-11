import React, { useState } from "react";
import Link from "next/link";
import { stageName, price } from "../common/constant";
import { getCurrentStage, getBuyPermission } from "../store/ICOinfo/selectors";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { showBuyModal } from "../store/buymodal";
import { showAlert } from "../store/alert";

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
            message: "Zilionixx crowdsale will be start from 14th Febrary",
            severity: "warning",
          })
        );
      } else if (currentStage === stageName.closeStage) {
        dispatch(
          showAlert({
            message: "Zilionixx crowdsale ended on Febrary 14th",
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

          <Link href="/">
            <p className="card-link">
              Open Whitepaper (Pdf)
              <img src="/static/svg/arrow.svg" />
            </p>
          </Link>
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
              <p className="c-option-text-content">
                {currentStage === stageName.secondStage
                  ? price.secondStage
                  : price.firstStage}
                &nbsp; USDT
              </p>
              <img className="c-pig" src="/static/svg/pig.svg" />
            </div>
          </div>

          <span onClick={() => handleModal()}>
            <p className="card-link">
              Buy ZNX -25% OFF
              <img src="/static/svg/arrow.svg" />
            </p>
          </span>
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
      </div>
    </div>
  );
};

export default Option;
