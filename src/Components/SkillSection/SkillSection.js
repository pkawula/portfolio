import React from "react";
import styles from "./SkillSection.module.scss";
import data from "../../assets/skills.json";

const sureAbout = data.skills.sureAbout;
// const knowSomethingAbout = data.skills.knowSomethingAbout;
// const wantToLearn = data.skills.wantToLearn;

class SkillSection extends React.Component {
  render() {
    return (
      <section className={styles.wrapper}>
        <article>
          <h3>Title of category</h3>
          <ul>
            {sureAbout.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </article>
      </section>
    );
  }
}

export default SkillSection;
