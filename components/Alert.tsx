import React, { useState, useEffect } from "react";
import { Alert } from "reactstrap";
import { showAlert } from "../store/alert";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { alertMessage, alertSeverity } from "../store/alert/selectors";

const AlertComponent = () => {
  const dispatch = useAppDispatch();
  const msg = useAppSelector(alertMessage);
  const severity = useAppSelector(alertSeverity);
  const [openAlert, setOpenAlert] = useState(false);
  const [message, setMessage] = useState("");

  const handleClose = () => {
    dispatch(showAlert({ message: "", severity: true }));
  };

  useEffect(() => {
    if (msg) {
      setOpenAlert(true);
      setMessage(msg);
      setTimeout(() => {
        handleClose();
      }, 5000);
    } else {
      setOpenAlert(false);
      setMessage("");
    }
  }, [msg, severity]);

  return (
    <div className={"c-alert-root"}>
      <Alert
        isOpen={openAlert}
        color="primary"
        fade
        className="c-alert-content"
      >
        <img
          src="/static/svg/alert_texture.svg"
          alt="texture"
          className="c-alert-texture"
        />
        <span>
          {severity && (
            <img src="/static/svg/alert_ellipse1.svg" alt="ellipse" />
          )}
          {!severity && (
            <img src="/static/svg/alert_ellipse2.svg" alt="ellipse" />
          )}
        </span>
        {severity && <span className="c-alert-success-title">Success!</span>}
        {!severity && <span className="c-alert-error-title">Error!</span>}
        <span className="c-alert-text">{message}</span>
        <span className="c-alert-close" onClick={() => handleClose()}>
          <i className="fas fa-times"></i>
        </span>
      </Alert>
    </div>
  );
};

export default AlertComponent;
