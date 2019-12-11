import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children }) => {
  return (
    <button className={styles.btn} form="contactForm" type="submit">
      {children}
    </button>
  );
};

export default Button;
