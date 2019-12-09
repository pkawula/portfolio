import React from "react";
import styles from "./SkillSection.module.scss";
import List from "../List/List";
import skillsArray from "../../assets/skills.json";

// const knowSomethingAbout = data.skills.knowSomethingAbout;
// const wantToLearn = data.skills.wantToLearn;

const SkillSection = () => {

    const sureAbout = skillsArray.sureAbout;
    const knowSomethingAbout = skillsArray.knowSomethingAbout;
    const wantToLearn = skillsArray.wantToLearn;

  return (
    <section className={styles.wrapper}>
        <List imgok data={sureAbout}>...am sure about</List>
        <List imglike data={knowSomethingAbout}>...tried and know something about</List>
        <List imgstop data={wantToLearn}>...want to learn</List>
    </section>
  );
};

export default SkillSection;
