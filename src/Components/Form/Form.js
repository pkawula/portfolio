import React from "react";
import FormInput from "./FormInput";
import styles from "./Form.module.scss";

class Form extends React.Component {
  render() {
    return (
      <>
        <form id="contactForm" method="POST">
          <div className={styles.wrapper}>
            <FormInput id="name">name</FormInput>
            <FormInput id="email" email>
              email
            </FormInput>
            <FormInput textarea id="message">
              your message
            </FormInput>
          </div>
        </form>
      </>
    );
  }
}

export default Form;
