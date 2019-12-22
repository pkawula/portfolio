import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Form from "../../Components/Form/Form";
import { env } from "../../config";

class Contact extends React.Component {
  render() {
    return (
      <>
        <PageTitle>Contact Me</PageTitle>
        <Form env={env}></Form>
      </>
    );
  }
}

export default Contact;
