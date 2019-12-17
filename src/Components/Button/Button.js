import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, isDisabled }) => {
  return (
    <>
      {isDisabled ? (
        <button disabled className={styles.btn} type="submit">
          {children}
        </button>
      ) : (
        <button className={styles.btn} type="submit">
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
