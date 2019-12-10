import React from "react";
import styles from "./SubmitForm.module.scss";
import Button from "../Button/Button";

const SubmitForm = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.wrapperTitle}>
        Show me that humanity is still in you {":)"}
      </p>
      <span className={styles.wrapperCaptcha}>Captcha here</span>
      <Button>Send</Button>
    </div>
  );
};

export default SubmitForm;
