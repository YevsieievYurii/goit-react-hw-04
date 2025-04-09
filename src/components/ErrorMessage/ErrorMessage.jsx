import React from "react";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.error}>
      <p>{message || "Oops! Something went wrong."}</p>
    </div>
  );
};

export default ErrorMessage;
