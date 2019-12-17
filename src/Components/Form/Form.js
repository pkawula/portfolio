import React from "react";
import FormInput from "./FormInput";
import Link from "../Link/Link";
import styles from "./Form.module.scss";
import Button from "../Button/Button";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();
class Form extends React.Component {
  state = {
    disabled: true,
    name: null,
    email: null,
    message: null,
    formError: ""
  };

  onChange = () => {
    this.setState({ disabled: false });
  };

  checkForm = e => {
    if (!e.target.value || e.target.value === "") {
      this.setState({
        formError: `Invalid ${e.target.id}` //check if this func is working in other cases
      });
    }
  };
  //add the checkFormOnSubmit func when the user will be submitting the form

  render() {
    const { disabled, formError } = this.state;

    return (
      <>
        <form
          className={styles.wrapper}
          id="contactForm"
          method="POST"
          onSubmit={this.onSubmit}
        >
          <div className={styles.wrapperIntro}>
            <h3 className={styles.wrapperIntroTitle}>Let's keep in touch...</h3>
            <p className={styles.wrapperIntroParagraph}>
              Don't like contact forms? Send me an{" "}
              <Link mail="kontakt@piotrkawula.pl">email</Link>
              {"!"}
            </p>
          </div>

          <div className={styles.wrapperForm}>
            {formError && <span>{formError}</span>}{" "}
            {/* you need to display error nicely */}
            <FormInput checkName={this.checkForm} id="name">
              name
            </FormInput>
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
            <ReCAPTCHA
              sitekey="6LcrSccUAAAAAKYXV3UJy2N9iC6ATdH-OW5Lzjb-"
              ref={recaptchaRef}
              onChange={this.onChange}
              align="center"
            />
            {disabled ? (
              <Button isDisabled>Send</Button>
            ) : (
              <Button>Send</Button>
            )}
          </div>
        </form>
      </>
    );
  }
}

export default Form;
