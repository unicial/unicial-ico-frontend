import React from "react";

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
          <div className="wpb_wrapper">
            <div className="c-news-title-large">
              <span>Meet a Crew of Professionals</span>
            </div>
          </div>
        </div>
        <div className="clearboth"></div>
        <div
          className="ct-divider divider_responsive"
          style={{ marginTop: "100px" }}
        ></div>
        <div className="ct-team row inline-row ct-team-style-1">
          <div className="col-lg-3 col-sm-6 col-xs-12 inline-column">
            <div
              id="post-441"
              className="team-person centered-box post-441 ct_team_person type-ct_team_person status-publish has-post-thumbnail hentry"
            >
              <div className="team-person-image bordered-box c-ourteam-person-info">
                <a href="#" target="_self">
                  <img
                    width="400"
                    height="400"
                    src="/static/images/member.jpg"
                    className="img-responsive wp-post-image"
                    alt="1"
                    // srcset="https://codex-themes.com/themes/cryption/wp-content/uploads/sites/9/2018/02/1-ct-person.jpg 2x"
                  />
                </a>
              </div>
              <div className="team-person-info">
                <div className="c-ourteam-name">Doctor Joe Luo</div>
                <div className="c-ourteam-role">Co-Founder, CEO</div>
                <div className="team-person-content"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 inline-column">
            <div
              id="post-442"
              className="team-person centered-box post-442 ct_team_person type-ct_team_person status-publish has-post-thumbnail hentry"
            >
              <div className="team-person-image bordered-box c-ourteam-person-info">
                <a href="#" target="_self">
                  <img
                    width="400"
                    src="/static/images/member.jpg"
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
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 inline-column">
            <div
              id="post-443"
              className="team-person centered-box post-443 ct_team_person type-ct_team_person status-publish has-post-thumbnail hentry"
            >
              <div className="team-person-image bordered-box c-ourteam-person-info">
                <a href="#" target="_self">
                  <img
                    width="400"
                    height="400"
                    src="/static/images/member.jpg"
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
          </div>
          <div className="col-lg-3 col-sm-6 col-xs-12 inline-column">
            <div
              id="post-444"
              className="team-person centered-box post-444 ct_team_person type-ct_team_person status-publish has-post-thumbnail hentry"
            >
              <div className="team-person-image bordered-box c-ourteam-person-info">
                <a href="#" target="_self">
                  <img
                    width="400"
                    height="400"
                    src="/static/images/member.jpg"
                    className="img-responsive wp-post-image"
                    alt="4"
                  />
                </a>
              </div>
              <div className="team-person-info">
                <div className="c-ourteam-name">Raymend</div>
                <div className="c-ourteam-role">Marketing Manager</div>
                <div className="team-person-content"></div>
                {/* <div className="socials team-person-socials socials-colored-hover">
                  <a
                    title="Facebook"
                    target="_blank"
                    href="#"
                    className="socials-item"
                  >
                    <i className="socials-item-icon social-item-rounded facebook"></i>
                  </a>
                  <a
                    title="LinkedIn"
                    target="_blank"
                    href="#"
                    className="socials-item"
                  >
                    <i className="socials-item-icon social-item-rounded linkedin"></i>
                  </a>
                  <a
                    title="Skype"
                    target="_blank"
                    href="#"
                    className="socials-item"
                  >
                    <i className="socials-item-icon social-item-rounded skype"></i>
                  </a>
                </div> */}
              </div>
            </div>
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
