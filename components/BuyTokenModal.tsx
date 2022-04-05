import React, { useState, useEffect } from "react";
import { Modal, ModalBody, Button, Input, FormFeedback } from "reactstrap";
import { stepIndex } from "../common/constant";
import { addUser, addAddress, getAddress } from "../api";
import copy from "copy-text-to-clipboard";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getBuyModalStatus } from "../store/buymodal/selectors";
import { showBuyModal } from "../store/buymodal";
import { showAlert } from "../store/alert";
import { ethers } from "ethers";
import { formatDate } from "../common/utile";
import { price } from "../common/constant";

const StagePrice = () => {
  return (
    <div className="c-modal-stageprice-root">
      <div>
        <div className="c-distribution-history">
          <i className="fas fa-circle c-news-title-dot c-distribution-dot-icon"></i>
          <div className="c-modal-stageprice-text">
            <div>
              {formatDate(process.env.firstStage)} ~{" "}
              {formatDate(process.env.secondStage)}
            </div>
            <div>
              <span className="c-distribution-coin-text">1 ZNX</span>
              <span> = {price.firstStage} USDT, 1.5 milion ZNX </span>
            </div>
          </div>
        </div>
        <div className="c-distribution-history">
          <i className="fas fa-circle c-news-title-dot c-distribution-dot-icon"></i>
          <div className="c-modal-stageprice-text">
            <div>
              {formatDate(process.env.secondStage)} ~{" "}
              {formatDate(process.env.thirdStage)}
            </div>
            <div>
              <span className="c-distribution-coin-text">1 ZNX</span>
              <span> = {price.secondStage} USDT, 1.5 milion ZNX </span>
            </div>
          </div>
        </div>
        <div className="c-distribution-history">
          <i className="fas fa-circle c-news-title-dot c-distribution-dot-icon"></i>
          <div className="c-modal-stageprice-text">
            <div>
              {formatDate(process.env.thirdStage)} ~{" "}
              {formatDate(process.env.lastStage)}
            </div>
            <div>
              <span className="c-distribution-coin-text">1 ZNX</span>
              <span> = {price.thirdStage} USDT, 1.5 milion ZNX </span>
            </div>
          </div>
        </div>
      </div>
      <span className="c-modal-stageprice-stick"></span>
      <div>
        <div className="c-distribution-history">
          <i className="fas fa-circle c-news-title-dot c-distribution-dot-icon"></i>
          <div className="c-modal-stageprice-text">
            <div>
              Investment from $500 <br />
              <span className="fw-bolder">+10% ZNX </span> tokens
            </div>
          </div>
        </div>
        <div className="c-distribution-history">
          <i className="fas fa-circle c-news-title-dot c-distribution-dot-icon"></i>
          <div className="c-modal-stageprice-text">
            <div>
              Investment from $1 000 <br />
              <span className="fw-bolder">+20% ZNX </span> tokens
            </div>
          </div>
        </div>
        <div className="c-distribution-history">
          <i className="fas fa-circle c-news-title-dot c-distribution-dot-icon"></i>
          <div className="c-modal-stageprice-text">
            <div>
              Investment from $5 000 <br />
              <span className="fw-bolder">+25% ZNX </span> tokens
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BuyTokenModal = () => {
  const dispatch = useAppDispatch();
  const modalShow = useAppSelector(getBuyModalStatus);
  const [firstName, setFirstName] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [address, setAddress] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [stepId, setStepId] = useState(stepIndex.first);
  const [addressETH, setAddressETH] = useState("");
  const [addressBNB, setAddressBNB] = useState("");
  const [copyETHStatus, setCopyETHStatus] = useState(true);
  const [copyBNBStatus, setCopyBNBStatus] = useState(true);

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
    setErrorFirstName("");
    setLastName("");
    setErrorLastName("");
    setEmail("");
    setErrorEmail("");
    setAddress("");
    setErrorAddress("");
    setStepId(stepIndex.first);
  };

  const handleClose = () => {
    handleInit();
    dispatch(showBuyModal(false));
  };

  const handleFirstNext = async () => {
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
      const form = new FormData();
      form.append("email", email);
      form.append("firstname", firstName);
      form.append("lastname", lastName);
      const res = await addUser(form);
      if (res.Success) setStepId(stepIndex.second);
      else {
        dispatch(
          showAlert({
            message: res.Error.Msg,
            severity: "error",
          })
        );
      }
    }
  };

  const handleSecondNext = async () => {
    let flag = true;
    if (!address) {
      flag = false;
      setErrorAddress("Please enter your Address");
    } else {
      try {
        ethers.utils.getAddress(address);
      } catch (error) {
        flag = false;
        setErrorAddress("Please check your address");
      }
    }
    const formSetAddr = new FormData();
    formSetAddr.append("email", email);
    formSetAddr.append("address", address);
    const res_address = await addAddress(formSetAddr);
    if (flag) {
      if (!res_address.Success) {
        flag = false;
        dispatch(
          showAlert({
            message: "Network Error",
            severity: "error",
          })
        );
      } else {
        setErrorAddress("");
      }
    }
    if (flag) {
      const formGetAddr = new FormData();
      formGetAddr.append("email", email);
      const res_getaddr = await getAddress(formGetAddr);
      const { Success, Data } = res_getaddr;
      if (!Success) {
        flag = false;
        dispatch(
          showAlert({
            message: "Network Error",
            severity: "error",
          })
        );
      } else {
        Data.Wallet.forEach((item: any) => {
          if (item.ChainName === "ETH") {
            setAddressETH(item.Address);
          } else if (item.ChainName === "BNB") {
            setAddressBNB(item.Address);
          }
        });
      }
      setStepId(stepIndex.third);
    }
  };

  const handleThirdNext = () => {
    handleInit();
    dispatch(showBuyModal(false));
  };

  const handleCopyAddress = (coin: string) => {
    if (coin === "eth") {
      copy(addressETH);
      setCopyETHStatus(!copyETHStatus);
      const timer = setTimeout(() => {
        setCopyETHStatus(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (coin === "bnb") {
      copy(addressBNB);
      setCopyBNBStatus(!copyBNBStatus);
      const timer = setTimeout(() => {
        setCopyBNBStatus(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  };

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
              value={firstName}
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
              value={lastName}
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
          value={email}
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
          maxLength={42}
          value={address}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleAddress(e.target.value)
          }
        />
        <FormFeedback>{errorAddress}</FormFeedback>
      </div>
      <div className="d-flex justify-content-around align-items-center c-modal-footer">
        <span
          className="c-modal-backbtn"
          onClick={() => setStepId(stepIndex.first)}
        >
          Back
        </span>
        <Button className="c-modal-submit" onClick={handleSecondNext}>
          Next <i className="fas fa-arrow-right"></i>
        </Button>
        <span className="c-modal-backbtnothers"></span>
      </div>
      <div className="c-modal-small-text">
        *Note: To get your ZNX Address, click{" "}
        <a
          className="c-modal-highlight-text"
          href="https://medium.com/@zilionixx_foundation/connecting-metamask-to-zilionixx-network-7ec14b6a36af"
          target={"_blank"}
          rel="noreferrer"
        >
          HERE
        </a>{" "}
        for full guide
      </div>
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
          <span className="c-modal-address-content">{addressETH}</span>
          <span className="c-modal-copyicon">
            {copyETHStatus ? (
              <img
                src="/static/svg/copy_icon.svg"
                alt="copy"
                onClick={() => handleCopyAddress("eth")}
              />
            ) : (
              <i className="fa fa-check"></i>
            )}
          </span>
        </div>
        <div className="c-m-t-10">
          <span className="c-modal-address-header">BNB</span>
          <span className="c-modal-address-content">{addressBNB}</span>
          <span className="c-modal-copyicon">
            {copyBNBStatus ? (
              <img
                src="/static/svg/copy_icon.svg"
                alt="copy"
                onClick={() => handleCopyAddress("bnb")}
              />
            ) : (
              <i className="fa fa-check"></i>
            )}
          </span>
        </div>
      </div>
      <div className="d-flex justify-content-around align-items-center c-modal-footer">
        <span
          className="c-modal-backbtn"
          onClick={() => setStepId(stepIndex.second)}
        >
          Back
        </span>
        <Button className="c-modal-submit" onClick={handleThirdNext}>
          Finish <i className="fas fa-arrow-right"></i>
        </Button>
        <span className="c-modal-backbtnothers"></span>
      </div>
    </>
  );
  return (
    <div>
      <Modal isOpen={modalShow} size="md" centered>
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
          <StagePrice />
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
