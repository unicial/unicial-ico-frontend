import React, { useState } from "react";
import clsx from "clsx";
import {
  Row,
  Col,
  Accordion,
  AccordionItem,
  AccordionHeader,
} from "reactstrap";

const FAQs = () => {
  const faqs = [
    {
      title: "Cryption Coins",
      content:
        "A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.",
    },
    {
      title: "How many sentences is a paragraph?",
      content:
        "Aim for three to five or more sentences per paragraph. Include on each page about two handwritten or three typed paragraphs. Make your paragraphs proportional to your paper. Since paragraphs do less work in short papers, have short paragraphs for short papers and longer paragraphs for longer papers.",
    },
    {
      title: "What is a paragraph and example?",
      content:
        "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. ... Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point.",
    },
    {
      title: "What is a paragraph and example?",
      content:
        "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. ... Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point.",
    },
    {
      title: "What is a paragraph and example?",
      content:
        "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. ... Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point.",
    },
    {
      title: "What is a paragraph and example?",
      content:
        "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. ... Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point.",
    },
    {
      title: "What is a paragraph and example?",
      content:
        "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. ... Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point.",
    },
    {
      title: "What is a paragraph and example?",
      content:
        "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. ... Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point.",
    },
    {
      title: "What is a paragraph and example?",
      content:
        "A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. ... Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point.",
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
                style={{ marginTop: "140px" }}
              ></div>
              <div className="wpb_text_column wpb_content_element  vc_custom_1520421849945">
                <div className="wpb_wrapper">
                  <div className="title-h3" style={{ textAlign: "left" }}>
                    Cryption Coins
                  </div>
                </div>
              </div>
              <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper">
                  <div className="title-h1" style={{ textAlign: "left" }}>
                    <span className="light">Frequently Questions</span>
                  </div>
                </div>
              </div>
              <div className="clearboth"></div>
              <div
                className="ct-divider divider_responsive"
                style={{ marginTop: "50px" }}
              ></div>
              <div className="accordion" id="accordionExample">
                {faqs.map((faq, key) => (
                  <div className="accordion-item">
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
