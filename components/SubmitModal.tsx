import React, { useState } from "react";
import { Modal, ModalBody, Button, Input, FormFeedback } from "reactstrap";
import axios from "axios";
import { showAlert } from "../store/alert";
import { useAppDispatch } from "../store/hooks";

interface ModalComponentProps {
  isOpen?: boolean;
  handleClose: () => void;
}

const ModalComponent = ({ isOpen, handleClose }: ModalComponentProps) => {
  const [firstName, setFirstName] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const dispatch = useAppDispatch();

  const handleFirstName = (str: string) => {
    setFirstName(str);
  };

  const handleLastName = (str: string) => {
    setLastName(str);
  };

  const handleEmail = (str: string) => {
    setEmail(str);
  };

  const handleCloseModal = () => {
    handleClose();
  };

  const handleSubmit = async () => {
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
      try {
        const response = await axios.post("/api/subscribe", {
          firstName,
          lastName,
          email,
        });
        dispatch(
          showAlert({
            message: "You have successfully submitted.",
            severity: "success",
          })
        );
        handleClose();
      } catch (e: any) {
        dispatch(
          showAlert({
            message: e.response.data.error,
            severity: "error",
          })
        );
      }
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} size="md" centered>
        <ModalBody className="c-modal-body">
          <span className="c-modal-close-btn" onClick={handleCloseModal}>
            <i className="fas fa-times"></i>
          </span>
          <div className="c-modal-header">
            Register To Get Your Free Access on Zilionixx
          </div>
          <div className="video-responsive">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/oxnLTjyuqK0`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            />
          </div>
          <div className="c-modal-content">
            Sign Up to Get Updates of the #Zilionixx Crowdsale Discounts
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
          <Button className="c-modal-submit" onClick={handleSubmit}>
            Submit
          </Button>
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

export default ModalComponent;
