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
    name: "",
    email: "",
    message: "",
    captcha: false,
    formErrors: {
      name: "",
      email: "",
      message: ""
    }
  };

  onCaptchaChange = () => {
    this.setState({ captcha: true });
  };

  handleUserInput = e => {
    const fieldName = e.target.id;
    const fieldValue = e.target.value;

    this.setState(
      {
        [fieldName]: fieldValue
      },
      () => {
        this.validateField(fieldName, fieldValue);
      }
    );
  };

  validateField = (fieldName, fieldValue) => {
    const { formErrors } = this.state;
    let matchEmail;
    switch (fieldName) {
      case "name":
        formErrors.name = fieldValue
          ? ""
          : `The ${fieldName} field is required`;
        break;
      case "email":
        matchEmail = fieldValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        formErrors.email = matchEmail ? "" : `Your ${fieldName} is wrong!`;
        break;
      case "message":
        formErrors.message = fieldValue
          ? ""
          : `The ${fieldName} field is required`;
        break;
      default:
        break;
    }
  };

  render() {
    const { disabled, name, email, message, formErrors } = this.state;

    return (
      <>
        <form
          className={styles.wrapper}
          id="contactForm"
          method="POST"
          onSubmit={this.checkFormOnSubmit}
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
            <FormInput checkInput={this.handleUserInput} id="name" value={name}>
              name
            </FormInput>
            <FormInput
              checkInput={this.handleUserInput}
              id="email"
              email
              value={email}
            >
              email
            </FormInput>
            <FormInput
              checkInput={this.handleUserInput}
              textarea
              id="message"
              value={message}
            >
              your message
            </FormInput>
          </div>

          <div className={styles.wrapperFormErrors}>
            {Object.keys(formErrors).map((fieldName, i) => {
              if (formErrors[fieldName].length > 0) {
                console.log(formErrors[fieldName]);
                return (
                  <span key={i} className={styles.wrapperFormErrorsError}>
                    {formErrors[fieldName]}
                  </span>
                );
              } else return "";
            })}
          </div>

          <div className={styles.wrapperSubmit}>
            <p className={styles.wrapperSubmitTitle}>
              Show me that humanity is still in you {":)"}
            </p>
            <ReCAPTCHA
              sitekey="6LcrSccUAAAAAKYXV3UJy2N9iC6ATdH-OW5Lzjb-"
              ref={recaptchaRef}
              onChange={this.onCaptchaChange}
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
