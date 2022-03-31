import React, { useState } from "react";
import { Col, Row, Button } from "reactstrap";
import axios from "axios";
import { showAlert } from "../store/alert";
import { useAppDispatch } from "../store/hooks";
import ScrollAnimation from "react-animate-on-scroll";
import { formatDate } from "../common/utile";

const Footer = () => {
  const [firstName, setFirstName] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const dispatch = useAppDispatch();

  const handleFirstName = (str: string) => {
    setFirstName(str);
  };

  const handleLastName = (str: string) => {
    setLastName(str);
  };

  const handleEmail = (str: string) => {
    setEmail(str);
  };

  const handleSubmit = async () => {
    let flag = true;
    if (firstName) {
      setErrorFirstName("");
    } else {
      flag = false;
      setErrorFirstName("Please enter your First Name");
    }
    if (lastName) {
      setErrorLastName("");
    } else {
      flag = false;
      setErrorLastName("Please enter your Last Name");
    }
    if (email) {
      let regEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regEmail.test(email)) {
        setErrorEmail("Please enter a correct email address");
        flag = false;
      } else {
        setErrorEmail("");
      }
    } else {
      flag = false;
      setErrorEmail("Please enter your email");
    }
    if (flag) {
      try {
        const response = await axios.post("/api/subscribe", {
          firstName,
          lastName,
          email,
        });
        dispatch(
          showAlert({
            message: "You have successfully submitted.",
            severity: "success",
          })
        );
      } catch (e: any) {
        dispatch(
          showAlert({
            message: e.response.data.error,
            severity: "error",
          })
        );
      }
    } else {
      dispatch(
        showAlert({
          message: "Your information is incorrect.",
          severity: "error",
        })
      );
    }
  };

  return (
    <div className="c-footer">
      <div className="c-container">
        <Row>
          <Col lg={3} md={6} sm={12} className="py-3">
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOut="fadeOutLeft"
              duration={2}
              delay={0}
              animateOnce={true}
            >
              <div className="c-footer-logo">
                <img src="/static/svg/logo.svg"></img>
                <span>Zilionixx</span>
              </div>
              <span className="d-block my-4">
                Zilionixx crowdsale landing page. Zilionixx crowdsale will be
                start on {formatDate(process.env.firstStage)}.
              </span>
              <Button outline className="c-aboutus-btn">
                About Us
              </Button>
            </ScrollAnimation>
          </Col>
          <Col lg={3} md={6} sm={12} className="py-3">
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOut="fadeOutLeft"
              duration={2}
              delay={0}
              animateOnce={true}
            >
              <span className="c-footer-title">Contacts</span>
              <div>
                <div className="mt-1">
                  <span className="c-bottom-item">
                    <img src="/static/svg/location.svg" alt="location" />
                    <span className="c-footer-contact-stick"></span>
                    <div>
                      <span className="c-footer-contact-title">Address:</span>
                      <br />
                      140 Paya Lebar road #05-15 AZ @ Paya Lebar Singapore
                      (409015)
                    </div>
                  </span>
                </div>
                <div className="mt-1">
                  <span className="c-bottom-item">
                    <img src="/static/svg/headphones.svg" alt="phone" />
                    <span className="c-footer-contact-stick"></span>
                    <span className="c-footer-contact-title">
                      Phone/Fax:&nbsp;
                    </span>{" "}
                    +65 6702 3011
                  </span>
                </div>
                <div className="mt-1">
                  <span className="c-bottom-item">
                    <img src="/static/svg/email.svg" alt="email" />
                    <span className="c-footer-contact-stick"></span>
                    <span className="c-footer-contact-title">Email:&nbsp;</span>
                    <a
                      target="_blank"
                      className="c-footer-contact-mail"
                      href="mailto:tsimafei@zilionixx.com"
                      rel="noreferrer"
                    >
                      tsimafei@zilionixx.com
                    </a>
                  </span>
                </div>
                <div className="mt-1">
                  <span className="c-bottom-item">
                    <img src="/static/svg/world.svg" alt="world" />
                    <span className="c-footer-contact-stick"></span>
                    <span className="c-footer-contact-title">
                      Website:&nbsp;
                    </span>
                    <a
                      target="_blank"
                      href="https://zilionixx.com"
                      rel="noreferrer"
                    >
                      zilionixx.com
                    </a>
                  </span>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={3} md={6} sm={12} className="py-3">
            <ScrollAnimation
              animateIn="fadeInRight"
              animateOut="fadeOutRight"
              duration={2}
              delay={0}
              animateOnce={true}
            >
              <span className="c-footer-title">Links</span>
              <div>
                <div className="mt-1">
                  <span className="c-footer-link">
                    <a
                      target="_blank"
                      href="https://znxscan.com"
                      rel="noreferrer"
                    >
                      Block Explorer
                    </a>
                  </span>
                </div>
                <div className="mt-1">
                  <span className="c-footer-link">
                    <a
                      target="_blank"
                      href="https://dongletrade.com"
                      rel="noreferrer"
                    >
                      Dongle Trade
                    </a>
                  </span>
                </div>
                <div className="mt-1">
                  <span className="c-footer-link">
                    <a
                      target="_blank"
                      href="https://zilionixx.com"
                      rel="noreferrer"
                    >
                      Zilionixx
                    </a>
                  </span>
                </div>
                <div className="mt-1">
                  <span className="c-footer-link">
                    <a
                      target="_blank"
                      href="https://medium.com/@zilionixx_foundation"
                      rel="noreferrer"
                    >
                      Medium News
                    </a>
                  </span>
                </div>
              </div>
            </ScrollAnimation>
          </Col>
          <Col lg={3} md={6} sm={12} className="py-3">
            <ScrollAnimation
              animateIn="fadeInRight"
              animateOut="fadeOutRight"
              duration={2}
              delay={0}
              animateOnce={true}
            >
              <span className="c-footer-title">Newsletter</span>
              <div>
                <div className="mt-1">
                  <span>Subscribe to get news.</span>
                </div>

                <input
                  placeholder="Your First Name"
                  className="c-footer-input mt-3"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleFirstName(e.target.value)
                  }
                ></input>
                <input
                  placeholder="Your LastName"
                  className="c-footer-input mt-3"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleLastName(e.target.value)
                  }
                ></input>
                <input
                  placeholder="Your E-mail address"
                  className="c-footer-input mt-3"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleEmail(e.target.value)
                  }
                ></input>
                <a className="c-footer-subscribe mt-3" onClick={handleSubmit}>
                  SUBSCRIBE <i className="fas fa-arrow-right ms-2"></i>
                </a>
                <span className="c-encrypted-text mt-3">
                  <span className="c-color-green">*</span> Personal information
                  will be encrypted
                </span>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
