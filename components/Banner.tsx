import React from "react";
import { Button } from "reactstrap";
import Router from "next/router";

interface BannerProps {
  isOpen: boolean;
}
const Banner = ({ isOpen }: BannerProps) => {
  const handleJoin = () => {};
  const handleClose = () => {
    localStorage.setItem("banner_status", "disable");
    window.location.reload();
  };

  return (
    <div className={"c-banner-root"}>
      <img
        src="/static/svg/banner_texture.svg"
        alt="texture"
        className="c-banner-texture"
      />
      <div className="c-banner-container">
        <div className="c-banner-textcontent">
          <span className="c-banner-text">
            Join The Revolution of Blockchain.
          </span>
          <span className="c-banner-stick mx-5"></span>
          <span className="c-banner-text">Register for Free on Crowdsale.</span>
        </div>
        <img
          src="/static/svg/Vector.svg"
          alt="vector"
          className="c-banner-vector"
        />
        <Button
          className="c-modal-submit c-banner-join-btn"
          onClick={handleJoin}
        >
          Join now
        </Button>
        <span className="c-banner-close-btn" onClick={handleClose}>
          <i className="fas fa-times"></i>
        </span>
      </div>
    </div>
  );
};

export default Banner;
