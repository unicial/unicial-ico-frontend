import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const ConnectWithUs = () => {
  return (
    <footer className="custom-footer">
      <div className="vc_row-full-width-before"></div>
      <div
        id="vc_row-61c568d399744"
        data-vc-full-width="true"
        data-vc-full-width-init="true"
        data-vc-stretch-content="true"
        className="vc_row vc_row-fluid footer-info vc_custom_1523008798268 vc_row-has-fill"
        data-effect="true"
        style={{
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        <div className="effect-2 wpb_column vc_column_container vc_col-sm-12">
          <div className=" vc_custom_1523543251776">
            <div className="wpb_wrapper">
              <div
                id="fullwidth-block-61c568d3998fc"
                className="fullwidth-block clearfix"
              >
                <div
                  className="fullwidth-block-background"
                  style={{
                    backgroundImage: "url(static/images/connectus_bg.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                  }}
                ></div>
                <div
                  className="fullwidth-block-inner"
                  style={{ padding: "0 21px" }}
                >
                  <div className="vc_empty_space" style={{ height: "80px" }}>
                    <span className="vc_empty_space_inner"></span>
                  </div>

                  <div className="wpb_text_column wpb_content_element ">
                    <ScrollAnimation
                      animateIn='fadeIn'
                      animateOut='fadeOut'
                      duration={2}
                      delay={0}
                      animateOnce={true}>
                      <div className="wpb_wrapper">
                        <div className="title-h1" style={{ textAlign: "center" }}>
                          <span
                            className="paragraph-title"
                            style={{ color: "#000000" }}
                          >
                            Connect with us
                          </span>
                        </div>
                      </div>
                    </ScrollAnimation>
                  </div>
                  <div className="clearboth"></div>
                  <div className="ct-divider "></div>
                  <div className="wpb_text_column wpb_content_element ">
                    <ScrollAnimation
                      animateIn='fadeInUp'
                      animateOut='fadeOutUp'
                      duration={2}
                      delay={0}
                      animateOnce={true}>
                      <div className="wpb_wrapper">
                        <p
                          style={{
                            textAlign: "center",
                            maxWidth: "730px",
                            margin: "auto",
                          }}
                        >
                          <span className="sub-content1">
                            You can subscribe about Zilionixx blockchain from
                            below Zilionixx social links. Please join here.
                          </span>
                        </p>
                      </div>
                    </ScrollAnimation>
                  </div>
                  <div className="clearboth"></div>
                  <div
                    className="ct-divider "
                    style={{ marginTop: "20px" }}
                  ></div>
                  <ScrollAnimation
                    animateIn='fadeInUp'
                    animateOut='fadeOutUp'
                    duration={2}
                    delay={0}
                    animateOnce={true}>
                    <div className="c-contactus-social-items socials socials-list socials-colored-hover socials-rounded socials-alignment-center">
                      <a
                        className="c-contactus-social-item"
                        href="https://twitter.com/zilionixx"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        className="c-contactus-social-item"
                        href="https://www.facebook.com/groups/4354141514692375/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>

                      <a
                        className="c-contactus-social-item"
                        href="https://www.linkedin.com/company/zilionixx"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a
                        className="c-contactus-social-item"
                        href="https://www.instagram.com/zilionixx"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>

                      <a
                        className="c-contactus-social-item"
                        href="https://www.youtube.com/channel/UCvM8xLpdbdyNFVXf5-NmnOA"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                      <a
                        className="c-contactus-social-item"
                        href="https://t.me/zilionixxcommunity"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-telegram-plane"></i>
                      </a>
                      <a
                        className="c-contactus-social-item"
                        href="https://join.slack.com/t/zilionixxcommunity/shared_invite/zt-12gnvg54z-YRfxn2QEPfHU7YoqTNUZCw"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-slack-hash"></i>
                      </a>
                    </div>
                  </ScrollAnimation>

                  <div className="clearboth"></div>
                  <div
                    className="ct-divider "
                    style={{ marginTop: "80px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vc_row-full-width"></div>
    </footer>
  );
};

export default ConnectWithUs;
