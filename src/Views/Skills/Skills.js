import React from "react";
import AppContext from "../../context";
import PageTitle from "../../Components/PageTitle/PageTitle";

class Skills extends React.Component {
  render() {
    const pageTitle = {
      title: "My Skills"
    };
    return (
      <AppContext.Consumer>
        {() => <PageTitle green>{pageTitle}</PageTitle>}
      </AppContext.Consumer>
    );
  }
}

export default Skills;
