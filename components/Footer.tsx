import React from "react";
import React, { useState } from "react";
import { Col, Row, Button } from "reactstrap";

const Footer = () => {
  const [firstName, setFirstName] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleFirstName = (str: string) => {
    setFirstName(str);
  };

  const handleLastName = (str: string) => {
    setLastName(str);
  };

  const handleEmail = (str: string) => {
    setEmail(str);
  };

  const handleSubmit = () => {
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
    }
  };
  return (
    <div className="c-footer">
      <div className="c-container">
        <Row>
          <Col lg={3} md={6} sm={12} className="py-3">
            <img src="/static/images/logo_large.png"></img>
            <span className="d-block my-4">
              Zilionixx crowdsale landing page. Zilionixx crowdsale will be
              start on 1th Febrary.
            </span>
            <Button outline className="c-aboutus-btn">
              About Us
            </Button>
          </Col>
          <Col lg={3} md={6} sm={12} className="py-3">
            <span className="c-footer-title">Contacts</span>
            <div>
              <div className="mt-1">
                <span className="c-bottom-item">
                  <i className="fal fa-map-marker-alt" />
                  Address:
                  <br />
                  140 Paya Lebar road #05-15 AZ @ Paya Lebar Singapore (409015)
                </span>
              </div>
              <div className="mt-1">
                <span className="c-bottom-item">
                  <i className="fas fa-headphones"></i>
                  Phone: +65 6702 3011
                </span>
              </div>
              <div className="mt-1">
                <span className="c-bottom-item">
                  <i className="fal fa-fax"></i>
                  Fax: +65 6702 3011
                </span>
              </div>
              <div className="mt-1">
                <span className="c-bottom-item">
                  <i className="far fa-envelope"></i>
                  Email:&nbsp;
                  <a className="link-item" href="mailto:tsimafei@zilionixx.com">
                    tsimafei@zilionixx.com
                  </a>
                </span>
              </div>
              <div className="mt-1">
                <span className="c-bottom-item">
                  <i className="fal fa-globe"></i>
                  Website:&nbsp;
                  <a className="link-item" href="https://zilionixx.com">
                    zilionixx.com
                  </a>
                </span>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="py-3">
            <span className="c-footer-title">Links</span>
            <div>
              <div className="mt-1">
                <span className="c-footer-link">
                  <a className="link-item" href="https://znxscan.com">
                    Block Explorer
                  </a>
                </span>
              </div>
              <div className="mt-1">
                <span className="c-footer-link">
                  <a className="link-item" href="https://dongletrade.com">
                    Dongle Trade
                  </a>
                </span>
              </div>
              <div className="mt-1">
                <span className="c-footer-link">
                  <a className="link-item" href="https://zilionixx.com">
                    Zilionixx
                  </a>
                </span>
              </div>
              <div className="mt-1">
                <span className="c-footer-link">
                  <a
                    className="link-item"
                    href="https://medium.com/@zilionixx_foundation"
                  >
                    Medium News
                  </a>
                </span>
                <span className="c-footer-link">News</span>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="py-3">
            <span className="c-footer-title">Newsletter</span>
            <div>
              <div className="mt-1">
                <span>
                  Subscribe to our MailChimp newsletter and stay up to date with
                  all events coming straight in your mailbox:
                </span>
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
              <a className="c-footer-subscribe mt-3">SUBSCRIBE</a>
              <span className="c-encrypted-text mt-3">
                <span className="c-color-green">*</span> Personal information
                will be encrypted
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
