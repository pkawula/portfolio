import React from "react";
import styles from "./SubmitForm.module.scss";

const SubmitForm = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.wrapperTitle}>
        Show me that humanity is still in you {":)"}
      </p>
      <span className={styles.wrapperCaptcha}>Captcha here</span>
    </div>
  );
};

export default SubmitForm;
