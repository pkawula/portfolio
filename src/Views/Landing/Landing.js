import React from "react";
import Header from "../../Components/Header/Header";
import Intro from "../../Components/Intro/Intro";
import AppContext from "../../context";

class Landing extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        <Header />
        <Intro />
      </AppContext.Consumer>
    );
  }
}

export default Landing;
