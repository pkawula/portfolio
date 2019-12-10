import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import ContactIntro from "../../Components/ContactIntro/ContactIntro";
import SubmitForm from "../../Components/SubmitForm/SubmitForm";

class Contact extends React.Component {
  render() {
    return (
      <>
        <PageTitle>Contact Me</PageTitle>
        <ContactIntro></ContactIntro>
        <SubmitForm></SubmitForm>
      </>
    );
  }
}

export default Contact;
