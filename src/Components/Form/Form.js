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
    formErrors: {
      name: undefined,
      email: undefined,
      message: undefined
    }
  };

  onChange = () => {
    this.setState({ disabled: false });
  };

  checkForm = e => {
    const inputName = e.target.id;
    const inputValue = e.target.value;
    if (!inputValue || inputValue === "") {
      this.setState({
        disabled: true,
        formErrors: { [inputName]: `The ${inputName} field cannot be empty!` }
      });
    }
    if (
      inputName === "email" &&
      !inputValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ) {
      this.setState({
        disabled: true,
        formErrors: { email: "Please write correct email address!" }
      });
    } else {
      this.setState({
        formErrors: { email: undefined }
      });
    }
  };
  //add the checkFormOnSubmit func when the user will be submitting the form

  render() {
    const { disabled } = this.state;
    const { name, email, message } = this.state.formErrors;

    return (
      <>
        <form
          className={styles.wrapper}
          id="contactForm"
          method="POST"
          onSubmit={this.checkForm}
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
            {name && <span className={styles.wrapperFormError}>{name}</span>}
            {email && <span className={styles.wrapperFormError}>{email}</span>}
            {message && (
              <span className={styles.wrapperFormError}>{message}</span>
            )}
            <FormInput checkInput={this.checkForm} id="name">
              name
            </FormInput>
            <FormInput checkInput={this.checkForm} id="email" email>
              email
            </FormInput>
            <FormInput checkInput={this.checkForm} textarea id="message">
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
