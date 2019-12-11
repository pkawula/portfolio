import React from "react";
import FormInput from "./FormInput";

class Form extends React.Component {
  render() {
    return (
      <>
        <form id="contactForm" method="POST">
          <FormInput id="name">name</FormInput>
          <FormInput id="email" email>
            email
          </FormInput>
          <FormInput textarea id="message">
            your message
          </FormInput>
        </form>
      </>
    );
  }
}

export default Form;
