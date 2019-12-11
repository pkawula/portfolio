import React from "react";
import styles from "./SubmitForm.module.scss";
import Button from "../Button/Button";
import ReCAPTCHA from "react-google-recaptcha";

const SubmitForm = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className={styles.wrapper}>
      <p className={styles.wrapperTitle}>
        Show me that humanity is still in you {":)"}
      </p>
      <span className={styles.wrapperCaptcha}>
        <ReCAPTCHA
          sitekey="6LcrSccUAAAAAKYXV3UJy2N9iC6ATdH-OW5Lzjb-"
          onChange={onChange}
        />
      </span>
      <Button>Send</Button>
    </div>
  );
};

export default SubmitForm;
