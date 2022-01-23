import React, { useEffect } from "react";
import { Alert } from "reactstrap";

interface AlertComponentProps {
  alertData: any;
  handleClose: () => void;
}

const AlertComponent = ({ alertData, handleClose }: AlertComponentProps) => {
  const { isOpen, msg, severity } = alertData;
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        handleClose();
      }, 5000);
    }
  }, [isOpen]);
  return (
    <div className={"c-alert-root"}>
      <Alert isOpen={isOpen} color="primary" fade className="c-alert-content">
        <img
          src="/static/svg/alert_texture.svg"
          alt="texture"
          className="c-alert-texture"
        />
        <span>
          {severity === "success" && (
            <img src="/static/svg/alert_ellipse1.svg" alt="ellipse" />
          )}
          {severity === "error" && (
            <img src="/static/svg/alert_ellipse2.svg" alt="ellipse" />
          )}
        </span>
        {severity === "success" && (
          <span className="c-alert-success-title">Success!</span>
        )}
        {severity === "error" && (
          <span className="c-alert-error-title">Error!</span>
        )}
        <span className="c-alert-text">{msg}</span>
        <span className="c-alert-close" onClick={() => handleClose()}>
          <i className="fas fa-times"></i>
        </span>
      </Alert>
    </div>
  );
};

export default AlertComponent;
