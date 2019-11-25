import React from "react";
import AppContext from "../../context";
import Intro from "../../Components/Intro/Intro";

class Landing extends React.Component {
  render() {
    return <AppContext.Consumer>{() => <Intro />}</AppContext.Consumer>;
  }
}

export default Landing;
