import React from "react";
import "../messages/error_message.css";

const ErrorMessage = ({ message }) => {
  return (
    <React.Fragment>
      <small className="message">{message}</small>
    </React.Fragment>
  );
};

export default ErrorMessage;
