import React, { useState, useEffect } from "react";
import { Modal, ModalBody, Button, Input, FormFeedback } from "reactstrap";
import { addMailchimp } from "../api";
import { stepIndex } from "../common/constant";

interface BuyTokenModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
}

const BuyTokenModal = ({ isOpen, handleCloseModal }: BuyTokenModalProps) => {
  const [firstName, setFirstName] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [address, setAddress] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [stepId, setStepId] = useState(stepIndex.first);

  const handleFirstName = (str: string) => {
    setFirstName(str);
  };

  const handleLastName = (str: string) => {
    setLastName(str);
  };

  const handleEmail = (str: string) => {
    setEmail(str);
  };

  const handleAddress = (str: string) => {
    setAddress(str);
  };

  const handleInit = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
    setStepId(stepIndex.first);
  };

  const handleClose = () => {
    handleCloseModal();
    handleInit();
  };

  const handleFirstNext = () => {
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
      setStepId(stepIndex.second);
    }
  };

  const handleSecondNext = () => {
    if (!address) {
      setErrorAddress("Please enter your Address");
    } else {
      setErrorAddress("");
      setStepId(stepIndex.third);
    }
  };

  const handleThirdNext = () => {};

  let stepFirst = (
    <>
      <div className="c-modal-content">
        Please Input Your Name & Email Address
      </div>
      <div className="c-modal-input-group">
        <div className="c-modal-name">
          <div className="c-m-r-10">
            <Input
              className="c-modal-input"
              placeholder="First Name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleFirstName(e.target.value)
              }
            />
            <FormFeedback>{errorFirstName}</FormFeedback>
          </div>
          <div>
            <Input
              className="c-modal-input"
              placeholder="Last Name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleLastName(e.target.value)
              }
            />
            <FormFeedback>{errorLastName}</FormFeedback>
          </div>
        </div>
        <Input
          className="c-modal-input"
          placeholder="Email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleEmail(e.target.value)
          }
        />
        <FormFeedback>{errorEmail}</FormFeedback>
      </div>
      <Button className="c-modal-submit" onClick={handleFirstNext}>
        Next <i className="fas fa-arrow-right"></i>
      </Button>
    </>
  );

  let stepSecond = (
    <>
      <div className="c-modal-content">
        Please Input ZNX Address to Receive ZNX token
      </div>
      <div className="c-modal-input-group">
        <Input
          className="c-modal-input"
          placeholder="Address"
          maxLength={22}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleAddress(e.target.value)
          }
        />
        <FormFeedback>{errorAddress}</FormFeedback>
      </div>
      <Button className="c-modal-submit" onClick={handleSecondNext}>
        Next <i className="fas fa-arrow-right"></i>
      </Button>
    </>
  );

  let stepThird = (
    <>
      <div className="c-modal-content">
        Please Send ETH or BNB to This Address
      </div>
      <div className="c-modal-input-group">
        <div>
          <span className="c-modal-address-header">ETH</span>
          <span className="c-modal-address-content">
            0x460D4386f74395F8A784Ea40CF65cde1bADb1679
          </span>
        </div>
        <div className="c-m-t-10">
          <span className="c-modal-address-header">BNB</span>
          <span className="c-modal-address-content">
            0x460D4386f74395F8A784Ea40CF65cde1bADb1679
          </span>
        </div>
      </div>
      <Button className="c-modal-submit" onClick={handleThirdNext}>
        Receive ZNX <i className="fas fa-arrow-right"></i>
      </Button>
    </>
  );
  return (
    <div>
      <Modal isOpen={isOpen} size="md" centered>
        <ModalBody className="c-modal-body">
          <span className="c-modal-close-btn" onClick={handleClose}>
            <i className="fas fa-times"></i>
          </span>
          <div className="c-modal-header">
            Join The Revolution of Blockchain
          </div>
          <div className="c-modal-stepper">
            <div className="c-stepper-content">
              <div
                className={
                  stepId === stepIndex.first
                    ? "c-stepper-item active"
                    : "c-stepper-item"
                }
              >
                <span className="c-stepper-btn">1</span>
              </div>
              <div
                className={
                  stepId === stepIndex.second
                    ? "c-stepper-item active"
                    : "c-stepper-item"
                }
              >
                <span
                  className={
                    stepId === stepIndex.first
                      ? "c-stepper-pin left"
                      : stepId === stepIndex.second
                      ? "c-stepper-pin right"
                      : "c-stepper-pin none"
                  }
                >
                  <i className="fas fa-circle"></i>
                  <i className="fas fa-circle"></i>
                  <i className="fas fa-circle"></i>
                </span>
                <span className="c-stepper-btn">2</span>
              </div>
              <div
                className={
                  stepId === stepIndex.third
                    ? "c-stepper-item active"
                    : "c-stepper-item"
                }
              >
                <span className="c-stepper-btn">3</span>
              </div>
            </div>
          </div>
          {stepId === stepIndex.first
            ? stepFirst
            : stepId === stepIndex.second
            ? stepSecond
            : stepThird}
          <img
            src="/static/svg/modal_texture.svg"
            alt="texture"
            className="c-modal-texture"
          />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default BuyTokenModal;
