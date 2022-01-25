import React, { useState, useEffect, useRef } from "react";
import { Col, Progress, Row } from "reactstrap";
import BuyTokenModal from "./BuyTokenModal";
import { getLeftTime } from "../api";

interface TopareaProps {
  handleShowAlert: (msg: any, severity: any) => void;
}

const Toparea = ({ handleShowAlert }: TopareaProps) => {
  const [percent, setPercent] = useState(0);
  const interval: any = useRef(0);
  const [isOpen, setIsOpen] = useState(false);
  const [buyTokenStatus, setBuyTokenStatus] = useState(true);
  const [endTime, setEndTime] = useState(0);

  const calculateTimeLeft = () => {
    let res_difference = endTime - new Date().getTime() / 1000;
    let timeLeft = {};

    if (buyTokenStatus) {
      if (res_difference > 0) {
        timeLeft = {
          days: Math.floor(res_difference / (60 * 60 * 24)),
          hours: Math.floor((res_difference / (60 * 60)) % 24),
          minutes: Math.floor((res_difference / 60) % 60),
          seconds: Math.floor(res_difference % 60),
        };
      } else {
        timeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
        setBuyTokenStatus(false);
      }
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  const handleModal = () => {
    if (buyTokenStatus) setIsOpen(true);
    else handleShowAlert("Left time is done", "error");
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (buyTokenStatus) {
        return setTimeLeft(calculateTimeLeft());
      }
    }, 1000);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    interval.current = setInterval(() => {
      setPercent((val: any) => {
        if (val >= 4) {
          clearInterval(interval.current);
          return 17;
        }
        return val + 1;
      });
    }, 20);
    getLeftTime().then((res: any) => {
      const { EndTime, Success } = res;
      if (Success) {
        setEndTime(EndTime);
        setBuyTokenStatus(true);
      } else {
        setBuyTokenStatus(false);
      }
    });
  }, []);

  return (
    <div className="first-content" id="About ZNX">
      <div className="c-container">
        <div className="c-container-content">
          <div className="c-firstcontent-left">
            <div>
              <p className="c-large-text1">Zilionixx</p>
              <p className="c-large-text2">Layer1 Blockchain!</p>
            </div>
            <div className="c-small-text my-5">
              A new smart block chain based marketplace for trading digital
              goods & assets according to users interests including metaverse
              and medical tech.
            </div>
            <span className="c-buytoken-btn" onClick={handleModal}>
              BUY ZNX -25% OFF
              <i className="fas fa-arrow-right ms-2"></i>
            </span>
          </div>
          <div className="c-firstcontent-right">
            <div className="c-small-text">ZNX sale ends in:</div>
            <div className="c-countdown mt-4">
              <div className="c-countdown-items c-time-days">
                <div className="c-time-item">
                  {timeLeft.days < 10 ? "0" + timeLeft.days : timeLeft.days}
                  <span className="c-time-desc">d</span>
                </div>
              </div>
              <div className="c-countdown-items c-time-hours">
                <div className="c-time-item ">
                  {timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}
                  <span className="c-time-desc">h</span>
                </div>
              </div>
              <div className="c-countdown-items c-time-hours">
                <div className="c-time-item">
                  {timeLeft.minutes < 10
                    ? "0" + timeLeft.minutes
                    : timeLeft.minutes}
                  <span className="c-time-desc">m</span>
                </div>
              </div>
              <div className="c-countdown-items c-time-hours">
                <div className="c-time-item">
                  <span>
                    {timeLeft.seconds < 10
                      ? "0" + timeLeft.seconds
                      : timeLeft.seconds}
                  </span>
                  <span className="c-time-desc">s</span>
                </div>
              </div>
            </div>
            <div className="c-medium-text my-5">
              <span className="fw-bold c-price-light">$ 310,500 </span>{" "}
              contribution received
            </div>
            <div className="mb-5">
              <div className="c-progress-range">
                <span>$0.1m</span>
                <span>$4.5m</span>
              </div>
              <Progress value={percent.toString()} className="c-progress-bar">
                <span
                  className="c-progress-arrow"
                  style={{ right: `${99 - percent}%` }}
                >
                  <span>{percent.toString()}%</span>
                  <i className="fas fa-caret-down"></i>
                </span>
                {/* <span className="c-progress-value">{percent.toString()}%</span> */}
              </Progress>
              <div className="c-progress-desc">
                <span>Softcap in 1069 days</span>
                <span>Hardcap</span>
              </div>
            </div>
            <div className="d-flex justify-content-end mt-5">
              <img src="/static/svg/visa_group.svg" alt="visa" />
            </div>
          </div>
        </div>
      </div>
      <BuyTokenModal
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        handleShowAlert={handleShowAlert}
      />
    </div>
  );
};

export default Toparea;
