import React from "react";
import FormInput from "./FormInput";
import Link from "../Link/Link";
import styles from "./Form.module.scss";
import Button from "../Button/Button";
import ReCAPTCHA from "react-google-recaptcha";

class Form extends React.Component {
  onChange = value => {
    console.log("Captcha value:", value);
  };

  render() {
    return (
      <>
        <form className={styles.wrapper} id="contactForm" method="POST">
          <div className={styles.wrapperIntro}>
            <h3 className={styles.wrapperIntroTitle}>Let's keep in touch...</h3>
            <p className={styles.wrapperIntroParagraph}>
              Don't like contact forms? Send me an{" "}
              <Link mail="kontakt@piotrkawula.pl">email</Link>
              {"!"}
            </p>
          </div>

          <div className={styles.wrapperForm}>
            <FormInput id="name">name</FormInput>
            <FormInput id="email" email>
              email
            </FormInput>
            <FormInput textarea id="message">
              your message
            </FormInput>
          </div>

          <div className={styles.wrapperSubmit}>
            <p className={styles.wrapperSubmitTitle}>
              Show me that humanity is still in you {":)"}
            </p>
            <span className={styles.wrapperSubmitCaptcha}>
              <ReCAPTCHA
                sitekey="6LcrSccUAAAAAKYXV3UJy2N9iC6ATdH-OW5Lzjb-"
                onChange={this.onChange}
              />
            </span>
            <Button>Send</Button>
          </div>
        </form>
      </>
    );
  }
}

export default Form;
