import React, { useState, useEffect, useRef } from "react";
import { Col, Progress, Row } from "reactstrap";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Toparea = () => {
  const [percent, setPercent] = useState(0);
  const interval: time = useRef(0);
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date("2022-12-30") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      return setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  useEffect(() => {
    interval.current = setInterval(() => {
      setPercent((val: any) => {
        if (val >= 42) {
          clearInterval(interval.current);
          return 42;
        }
        return val + 1;
      });
    }, 20);
  }, []);
  return (
    <div className="first-content" id="About Cryption">
      <div className="c-container">
        <Row>
          <Col lg={6}>
            <div className="c-large-text">Trading platform of the future!</div>
            <div className="c-medium-text my-5">
              A new smart block chain based marketplace for trading digital
              goods & assets according to users interests.
            </div>
            <a className="c-buytoken-btn">BUY TOKENS -25% OFF</a>
          </Col>
          <Col lg={5} className="offset-lg-1">
            <div className="c-medium-text">Token sale ends in:</div>
            <div className="c-countdown mt-4">
              <div className="c-countdown-items">
                <div className="c-time-item c-time-days">
                  {timeLeft.days < 10 ? "0" + timeLeft.days : timeLeft.days}
                </div>
                <div className="c-time-desc">Days</div>
              </div>
              <div className="c-countdown-items">
                <div className="c-time-item c-time-hours">
                  {timeLeft.hours < 10 ? "0" + timeLeft.hours : timeLeft.hours}
                </div>
                <div className="c-time-desc">Hours</div>
              </div>
              <div className="c-countdown-items">
                <div className="c-time-item c-time-minutes">
                  {timeLeft.minutes < 10
                    ? "0" + timeLeft.minutes
                    : timeLeft.minutes}
                </div>
                <div className="c-time-desc">Minutes</div>
              </div>
              <div className="c-countdown-items">
                <div className="c-time-item">
                  {timeLeft.seconds < 10
                    ? "0" + timeLeft.seconds
                    : timeLeft.seconds}
                </div>
                <div className="c-time-desc">Seconds</div>
              </div>
            </div>
            <div className="c-medium-text my-5">
              <span className="fw-bold">$25,256,432</span> contribution received
            </div>
            <div className="mb-5">
              <div className="c-progress-range">
                <span>$5m</span>
                <span>$55m</span>
              </div>
              <Progress value={percent.toString()} className="c-progress-bar">
                <span className="c-progress-value">{percent.toString()}%</span>
              </Progress>
              <div className="c-progress-desc">
                <span>Softcap in 1069 days</span>
                <span>Hardcap</span>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-5">
              <div className="c-token-item">
                <img src="/static/images/1.png"></img>
              </div>
              <div className="c-token-item">
                <img src="/static/images/2.png"></img>
              </div>
              <div className="c-token-item">
                <img src="/static/images/3.png"></img>
              </div>
              <div className="c-token-item">
                <img src="/static/images/4.png"></img>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Toparea;
