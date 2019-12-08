import React from "react";
import styles from "./SkillSection.module.scss";
import List from "../List/List";

// const knowSomethingAbout = data.skills.knowSomethingAbout;
// const wantToLearn = data.skills.wantToLearn;

const SkillSection = ({ data, children }) => {

  return (
    <section className={styles.wrapper}>
      <article className={styles.wrapperSection}>
        <h3 className={styles.wrapperSectionTitle}>{children}</h3>
        <List data={data} />
      </article>
    </section>
  );
};

export default SkillSection;
