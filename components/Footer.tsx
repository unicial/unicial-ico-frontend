import React from "react";
import { Col, Row, Button } from "reactstrap";

const Footer = () => {
  return (
    <div className="c-footer">
      <div className="c-container">
        <Row>
          <Col lg={3} md={6} sm={12} className="py-3">
            <img src="/static/images/logo_large.png"></img>
            <span className="d-block my-4">
              ICO Landing Page Template. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua enim dolor sit amet.
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
                  908 New Hampshire Avenue #100, Washington, DC 20037, United
                  States
                </span>
              </div>
              <div className="mt-1">
                <span className="c-bottom-item">
                  <i className="fas fa-headphones"></i>
                  Phone: +1 916-85-2235
                </span>
              </div>
              <div className="mt-1">
                <span className="c-bottom-item">
                  <i className="fal fa-fax"></i>
                  Fax: +1 916-85-2235
                </span>
              </div>
              <div className="mt-1">
                <span className="c-bottom-item">
                  <i className="far fa-envelope"></i>
                  Email:&nbsp;
                  <a className="link-item" href="mailto:info@cryption.network">
                    info@cryption.network
                  </a>
                </span>
              </div>
              <div className="mt-1">
                <span className="c-bottom-item">
                  <i className="fal fa-globe"></i>
                  Website: cryption.network
                </span>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12} className="py-3">
            <span className="c-footer-title">Links</span>
            <div>
              <div className="mt-1">
                <span className="c-footer-link">ICO list</span>
              </div>
              <div className="mt-1">
                <span className="c-footer-link">Our approach</span>
              </div>
              <div className="mt-1">
                <span className="c-footer-link">History</span>
              </div>
              <div className="mt-1">
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
                placeholder="Your E-mail address"
                className="c-footer-input mt-3"
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
