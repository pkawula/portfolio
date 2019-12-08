import React from "react";
import styles from "./SkillSection.module.scss";
import ok from "../../assets/images/icons/ok.png";
import skillsList from "../../assets/skills.json";

// const knowSomethingAbout = data.skills.knowSomethingAbout;
// const wantToLearn = data.skills.wantToLearn;

class SkillSection extends React.Component {
  render() {
    const skillData = skillsList.skills;
    return (
      <section className={styles.wrapper}>
        <article className={styles.wrapperSection}>
          <h3 className={styles.wrapperSectionTitle}>...am sure about</h3>
          <ul className={styles.wrapperSectionList}>
            {skillData.sureAbout.map((value, index) => (
              <li key={index} className={styles.wrapperSectionListItem}>
                <img
                  src={ok}
                  alt="good"
                  className={styles.wrapperSectionListItemIcon}
                />
                {value}
              </li>
            ))}
          </ul>
        </article>
      </section>
    );
  }
}

export default SkillSection;
