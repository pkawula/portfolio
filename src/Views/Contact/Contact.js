import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import ContactIntro from "../../Components/ContactIntro/ContactIntro";
import SubmitForm from "../../Components/SubmitForm/SubmitForm";
import Form from "../../Components/Form/Form";

class Contact extends React.Component {
  render() {
    return (
      <>
        <PageTitle>Contact Me</PageTitle>
        <ContactIntro></ContactIntro>
        <SubmitForm></SubmitForm>
        <Form></Form>
      </>
    );
  }
}

export default Contact;
