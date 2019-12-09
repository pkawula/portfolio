import React from "react";
import AppContext from "../../context";
import PageTitle from "../../Components/PageTitle/PageTitle";
import styles from "./Skills.module.scss";
import SkillSection from "../../Components/SkillSection/SkillSection";

class Skills extends React.Component {
  render() {
    const pageTitle = {
      title: "My Skills"
    };

    return (
      <AppContext.Consumer>
        {() => (
          <>
            <PageTitle green>{pageTitle}</PageTitle>
            <h2 className={styles.subHeading}>What I...</h2>
            <SkillSection />
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Skills;
