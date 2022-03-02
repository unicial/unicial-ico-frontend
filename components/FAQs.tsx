import React, { useState } from "react";
import clsx from "clsx";
import { Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

const FAQs = () => {
  const faqs = [
    {
      title: "Zilionixx blockchain",
      content:
        "Zilionixx is a layer-1 blockchain development platform that enables developers to build efficient and secure decentralized applications. Developers can use solidity code of Ethereum or Binance on Zilionixx blockchain.",
    },
    {
      title: "What is smart contract?",
      content:
        "A smart contract is a self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code. The code and the agreements contained therein exist across a distributed, decentralized blockchain network. The code controls the execution, and transactions are trackable and irreversible.",
    },
    {
      title: "What is Unicial?",
      content:
        "Unicial is a metaverse. The term metaverse can be traced back to Neal Stephenson and his dystopian cyberpunk novel Snow Crash. The novel was released in 1992, and it’s considered a canon of the genre, along with William Gibson’s Neuromancer, which describes a virtual reality dataspace called the matrix.",
    },
    {
      title: "What is dongletrade?",
      content:
        "Dongletrade is an exchange website where users can buy and sell coins including znx. For most digital currency investors, the centralized cryptocurrency exchange is one of the most important vehicles for transacting. Centralized cryptocurrency exchanges are online platforms used to buy and sell cryptocurrencies. They are the most common means that investors use to buy and sell cryptocurrency holdings.",
    },
    {
      title: "What is Zilionixx block explorer?",
      content:
        "Zilionixx block explorer(https://znxscan.com) is a block explorer on where users and developers can check their transactions.",
    },
  ];

  const [activeFaqItem, setActiveFaqItem] = useState(0);

  return (
    <div className="faq-background" id="FAQ">
      <div className="c-container">
        <Row>
          <Col sm="12" md="8" lg="6">
            <div className="wpb_wrapper">
              <div className="clearboth"></div>
              <div
                className="ct-divider divider_responsive"
                style={{ marginTop: "106px" }}
              ></div>
              <div className="wpb_text_column wpb_content_element  vc_custom_1520421849945">
                <div className="wpb_wrapper">
                  <div className="c-news-title-small">
                    <i className="fas fa-circle c-news-title-dot"></i>
                    Zilionixx blockchain
                  </div>
                </div>
              </div>
              <ScrollAnimation
                animateIn='fadeIn'
                animateOut='fadeOut'
                duration={2}
                delay={0}
                animateOnce={true}>
                <div className="c-roadmap-title-large">
                  <span>Our Plan of Zilionixx</span>
                </div>
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <div className="c-news-title-large">
                      <span>Frequently Questions</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <div className="clearboth"></div>
              <div
                className="ct-divider divider_responsive"
                style={{ marginTop: "50px" }}
              ></div>
              <ScrollAnimation
                animateIn='fadeInLeft'
                animateOut='fadeOutLeft'
                duration={2}
                delay={0}
                animateOnce={true}>
                <div className="accordion" id="accordionExample">
                  {faqs.map((faq, key) => (
                    <div
                      className="accordion-item c-faq-accordion-item"
                      key={key}
                    >
                      <h2 className="accordion-header" id={`heading${key}`}>
                        <button
                          className={clsx("accordion-button", {
                            collapsed: activeFaqItem !== key,
                          })}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${key}`}
                          aria-expanded={activeFaqItem === key ? "true" : "false"}
                          aria-controls={`collapse${key}`}
                          onClick={() => setActiveFaqItem(key)}
                        >
                          {activeFaqItem === key ? (
                            <i className="fas fa-minus-circle"></i>
                          ) : (
                            <i className="fas fa-plus-circle"></i>
                          )}

                          {faq.title}
                        </button>
                      </h2>
                      <div
                        id={`collapse${key}`}
                        className={clsx("accordion-collapse collapse", {
                          show: activeFaqItem === key,
                        })}
                        aria-labelledby={`heading${key}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">{faq.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
              <div className="clearboth"></div>
              <div
                className="ct-divider divider_responsive"
                style={{ marginTop: "140px" }}
              ></div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FAQs;
