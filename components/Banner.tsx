import React, { useEffect } from "react";
import { Button } from "reactstrap";
import moment from "moment";
import { useCookies } from "react-cookie";

interface BannerProps {
  isOpen?: boolean;
  handleBannerClose: () => void;
  handleBannerShow: () => void;
  handleShowModal: () => void;
}

const Banner = ({
  isOpen,
  handleBannerClose,
  handleBannerShow,
  handleShowModal,
}: BannerProps) => {
  const [cookies, setCookie] = useCookies(["Banner"]);

  const handleCloseBanner = () => {
    const expiretime: any = process.env.expiretime;
    let expiresAt: any = moment(expiretime * 1000 + new Date().getTime());
    setCookie(
      "Banner",
      {
        closeBanner: true,
      },
      { path: "/", expires: expiresAt._d, secure: true }
    );
    handleBannerClose();
  };

  useEffect(() => {
    if (cookies.Banner) {
      handleBannerClose();
    } else {
      // handleShowModal();
      handleBannerShow();
    }
  }, [cookies]);

  return (
    <div className={isOpen ? "c-banner-root" : "c-banner-disable"}>
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
          onClick={handleShowModal}
        >
          Join now
        </Button>
        <span className="c-banner-close-btn" onClick={handleCloseBanner}>
          <i className="fas fa-times"></i>
        </span>
      </div>
    </div>
  );
};

export default Banner;
