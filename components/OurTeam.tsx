import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const OurTeam = () => {
  return (
    <div className="c-container c-news-container">
      <img
        className="c-ourteam-rectangle-svg"
        src="/static/svg/rectangle.svg"
        alt="rectangle"
      />
      <div className="wpb_wrapper">
        <div className="clearboth"></div>
        <div
          className="ct-divider divider_responsive"
          style={{ marginTop: "106px" }}
        ></div>
        <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeIn fadeIn vc_custom_1522922142217 wpb_start_animation animated">
          <div className="wpb_wrapper">
            <div className="c-news-title-small">
              <i className="fas fa-circle c-news-title-dot"></i>
              Our Team
            </div>
          </div>
        </div>
        <div className="wpb_text_column wpb_content_element  wpb_animate_when_almost_visible wpb_fadeIn fadeIn wpb_start_animation animated">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            duration={2}
            delay={0}
            animateOnce={true}
          >
            <div className="wpb_wrapper">
              <div className="c-news-title-large">
                <span>Meet a Crew of Professionals</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <div className="clearboth"></div>
        <div
          className="ct-divider divider_responsive"
          style={{ marginTop: "100px" }}
        ></div>
        <div className="ct-team row inline-row ct-team-style-1">
          <div className="col-lg-3 col-sm-6 col-xs-12 inline-column">
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOut="fadeOutLeft"
              duration={2}
              delay={0}
              animateOnce={true}
            >
              <div
                id="post-441"
                className="team-person centered-box post-441 ct_team_person type-ct_team_person status-publish has-post-thumbnail hentry"
              >
                <div className="team-person-image bordered-box c-ourteam-person-info">
                  <a
                    href="https://www.facebook.com/groups/4354141514692375/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      width="400"
                      height="400"
                      src="/static/images/JoeLuo.jpg"
                      className="img-responsive wp-post-image"
                      alt="1"
                    />
                  </a>
                </div>
                <div className="team-person-info">
                  <div className="c-ourteam-name">Doctor Joe Luo</div>
                  <div className="c-ourteam-role">Co-Founder, CEO</div>
                  <div className="team-person-content"></div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 inline-column">
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOut="fadeOutLeft"
              duration={2}
              delay={0}
              animateOnce={true}
            >
              <div
                id="post-442"
                className="team-person centered-box post-442 ct_team_person type-ct_team_person status-publish has-post-thumbnail hentry"
              >
                <div className="team-person-image bordered-box c-ourteam-person-info">
                  <a
                    href="https://www.facebook.com/groups/4354141514692375/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      width="400"
                      src="/static/images/tsimafei.png"
                      height="400"
                      className="img-responsive wp-post-image"
                      alt="2"
                    />
                  </a>
                </div>
                <div className="team-person-info">
                  <div className="c-ourteam-name">Tsimafei</div>
                  <div className="c-ourteam-role">CTO, Blockchain Engineer</div>
                  <div className="team-person-content"></div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 inline-column">
            <ScrollAnimation
              animateIn="fadeInRight"
              animateOut="fadeOutRight"
              duration={2}
              delay={0}
              animateOnce={true}
            >
              <div
                id="post-443"
                className="team-person centered-box post-443 ct_team_person type-ct_team_person status-publish has-post-thumbnail hentry"
              >
                <div className="team-person-image bordered-box c-ourteam-person-info">
                  <a
                    href="https://www.facebook.com/groups/4354141514692375/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      width="400"
                      height="400"
                      src="/static/images/JoanLau.png"
                      className="img-responsive wp-post-image"
                      alt="3"
                    />
                  </a>
                </div>
                <div className="team-person-info">
                  <div className="c-ourteam-name">Joan Lau</div>
                  <div className="c-ourteam-role">Co-Founder, Marketing</div>
                  <div className="team-person-content"></div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 inline-column">
            <ScrollAnimation
              animateIn="fadeInRight"
              animateOut="fadeInRight"
              duration={2}
              delay={0}
              animateOnce={true}
            >
              <div
                id="post-444"
                className="team-person centered-box post-444 ct_team_person type-ct_team_person status-publish has-post-thumbnail hentry"
              >
                <div className="team-person-image bordered-box c-ourteam-person-info">
                  <a
                    href="https://www.facebook.com/groups/4354141514692375/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      width="400"
                      height="400"
                      src="/static/images/reymond.jpg"
                      className="img-responsive wp-post-image"
                      alt="4"
                    />
                  </a>
                </div>
                <div className="team-person-info">
                  <div className="c-ourteam-name">Raymend</div>
                  <div className="c-ourteam-role">Marketing Manager</div>
                  <div className="team-person-content"></div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="clearboth"></div>
        <div
          className="ct-divider divider_responsive"
          style={{ marginTop: "110px" }}
        ></div>
      </div>
    </div>
  );
};

export default OurTeam;
