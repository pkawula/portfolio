import React from "react";
import FormInput from "./FormInput";
import Link from "../Link/Link";
import styles from "./Form.module.scss";
import Button from "../Button/Button";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

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
    },
    formErrBorder: {
      name: false,
      email: false,
      message: false
    },
    formValid: false,
    buttonText: "Send",
    sendError: ""
  };

  sendEmail = e => {
    e.preventDefault();
    const {
      REACT_APP_EMAILJS_TEMPLATEID: template,
      REACT_APP_EMAILJS_USERID: user
    } = this.props.env;

    this.sendMessage(
      template,
      this.state.email,
      this.state.message,
      this.state.name,
      user
    );
  };

  sendMessage = (templateId, email, message, name, user) => {
    this.setState({ buttonText: "Sending..." });
    emailjs
      .send(
        "default_service",
        templateId,
        {
          email,
          message,
          name
        },
        user
      )
      .then(res => {
        this.setState({ buttonText: "Sent!", captcha: false });
        setTimeout(() => {
          this.clear();
        }, 1000);
      })
      .catch(err => {
        this.setState({
          sendError: `Cannot send email right now. Please try again later. Error: ${err.text}`
        });
        setTimeout(() => {
          this.clear();
        }, 5000);
      });
  };

  onCaptchaChange = () => {
    this.setState({ captcha: true }, () => {
      this.validateForm();
    });
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
    let matchEmail;
    let err;
    switch (fieldName) {
      case "name":
        err = fieldValue ? "" : `The ${fieldName} field is required`;
        this.setState(prevState => ({
          formErrors: {
            ...prevState.formErrors,
            [fieldName]: err
          },
          formErrBorder: {
            ...prevState.formErrBorder,
            [fieldName]: fieldValue ? false : true
          }
        }));
        break;
      case "email":
        matchEmail = fieldValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        err = matchEmail ? "" : `Your ${fieldName} is wrong!`;
        this.setState(prevState => ({
          formErrors: {
            ...prevState.formErrors,
            [fieldName]: err
          },
          formErrBorder: {
            ...prevState.formErrBorder,
            [fieldName]: matchEmail ? false : true
          }
        }));
        break;
      case "message":
        err = fieldValue ? "" : `The ${fieldName} field is required`;
        this.setState(prevState => ({
          formErrors: {
            ...prevState.formErrors,
            [fieldName]: err
          },
          formErrBorder: {
            ...prevState.formErrBorder,
            [fieldName]: fieldValue ? false : true
          }
        }));
        break;
      default:
        break;
    }
    this.validateForm();
  };

  validateForm = () => {
    const { captcha, name, email, message } = this.state;

    const formValidation = ({ formErrors }) => {
      Object.keys(formErrors).map(fieldName => {
        if (formErrors[fieldName].length > 0) {
          return true;
        } else return false;
      });
    };

    if (
      captcha &&
      name &&
      message &&
      formValidation &&
      email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ) {
      this.setState({ disabled: false, formValid: true });
    } else {
      this.setState({ disabled: true, formValid: false });
    }
  };

  clear = () => {
    this.setState({
      disabled: true,
      name: "",
      email: "",
      message: "",
      captcha: false,
      formErrors: {
        name: "",
        email: "",
        message: ""
      },
      formValid: false,
      buttonText: "Send",
      sendError: ""
    });
    recaptchaRef.current.reset();
  };

  render() {
    const {
      disabled,
      name,
      email,
      message,
      formErrors,
      buttonText,
      sendError,
      formErrBorder
    } = this.state;
    return (
      <>
        <form
          className={styles.wrapper}
          id="contactForm"
          method="POST"
          onSubmit={this.sendEmail}
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
            <FormInput
              checkInput={this.handleUserInput}
              id="name"
              value={name}
              isErrored={formErrBorder.name}
            >
              name
            </FormInput>
            <FormInput
              checkInput={this.handleUserInput}
              id="email"
              email
              value={email}
              isErrored={formErrBorder.email}
            >
              email
            </FormInput>
            <FormInput
              checkInput={this.handleUserInput}
              textarea
              id="message"
              value={message}
              isErrored={formErrBorder.message}
            >
              your message
            </FormInput>
          </div>

          <div className={styles.wrapperFormErrors}>
            {Object.keys(formErrors).map((fieldName, i) => {
              if (formErrors[fieldName].length > 0) {
                return (
                  <span key={i} className={styles.wrapperFormErrorsError}>
                    {formErrors[fieldName]}
                  </span>
                );
              } else return "";
            })}
            {sendError && (
              <span className={styles.wrapperFormErrorsError}>{sendError}</span>
            )}
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
              <Button isDisabled>{buttonText}</Button>
            ) : (
              <Button onSubmit={this.sendEmail}>{buttonText}</Button>
            )}
          </div>
        </form>
      </>
    );
  }
}

export default Form;
