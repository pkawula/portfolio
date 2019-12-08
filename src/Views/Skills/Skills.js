import React from "react";
import AppContext from "../../context";
import PageTitle from "../../Components/PageTitle/PageTitle";
import styles from "./Skills.module.scss";
import SkillSection from "../../Components/SkillSection/SkillSection";
import skillsArray from "../../assets/skills.json";

class Skills extends React.Component {
  render() {
    const pageTitle = {
      title: "My Skills"
    };

    const sureAbout = skillsArray.sureAbout;
    const knowSomethingAbout = skillsArray.knowSomethingAbout;
    const wantToLearn = skillsArray.wantToLearn;

    return (
      <AppContext.Consumer>
        {() => (
          <>
            <PageTitle green>{pageTitle}</PageTitle>
            <h2 className={styles.subHeading}>What I...</h2>
            <SkillSection data={sureAbout}>...am sure about</SkillSection>
            <SkillSection data={knowSomethingAbout} >...tried and know something about</SkillSection>
            <SkillSection data={wantToLearn} >...want to learn</SkillSection>
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Skills;
