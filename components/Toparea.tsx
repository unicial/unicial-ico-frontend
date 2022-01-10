import React from "react";

const Toparea = () => {
  return (
    <div className="toparea">
      <div className="c-container">
        <div className="toparea-content">
          <div className="toparea-info">
            <span className="top-item top-item-first">
              <i className="fal fa-map-marker-alt" />
              140 paya lebar road, Singapore
            </span>
            <span className="top-item">
              <i className="fas fa-headphones"></i>
              +1 916-85-2235
            </span>
            <span className="top-item">
              <i className="far fa-envelope"></i>
              <a className="link-item" href="mailto:tsimafei@zilionixx.com">
                tsimafei@zilionixx.com
              </a>
            </span>
          </div>
          <div className="toparea-social">
            {/* <a className="link-item ps-3" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="link-item ps-3" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="link-item ps-3" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="link-item ps-3" href="#">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a className="link-item ps-3" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="link-item ps-3" href="#">
              <i className="fab fa-youtube"></i>
            </a> */}
            <a className="link-item ps-3" href="https://t.me/zilionixx">
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a className="link-item ps-3" href="https://discord.gg/6Yf7n8Qw">
              <i className="fab fa-discord"></i>
            </a>
            {/* <a className="link-item ps-3" href="#">
              <i className="fab fa-medium-m"></i>
            </a>
            <a className="link-item ps-3" href="#">
              <i className="fab fa-reddit-alien"></i>
            </a>
            <a className="link-item ps-3" href="#">
              <i className="fab fa-slack-hash"></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toparea;
