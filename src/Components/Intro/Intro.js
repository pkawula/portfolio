import React from "react";
import styles from "./Intro.module.scss";
import Link from "../Link/Link";
import meImage from "../../assets/images/me.jpg";
import PageTitle from "../PageTitle/PageTitle";
import Socials from "../Socials/Socials";

const Intro = () => (
  <div className={styles.wrapper}>
    <section className={styles.introContainer}>
      <PageTitle />
      <img
        className={styles.introContainer__avatar}
        src={meImage}
        alt="Author"
      />
      <h2 className={styles.introContainer__heading}>
        Let me introduce myself
      </h2>
      <p className={styles.introContainer__description}>
        I am a 23 years old aspiring frontend Developer! I am learning JS and
        it's features all by myself (using Internet, of course). I'm open for
        the new opportunities and would like to work as professional frontend
        developer.
      </p>
      <p className={styles.introContainer__description}>
        Check out my <Link href="#skills">skills</Link> and{" "}
        <Link href="#projects">projects</Link>. I'm also looking for new
        challenges and if you have one - feel free to{" "}
        <Link href="#contact">contact</Link> me!
      </p>
      <Link mail="kontakt@piotrkawula.pl">kontakt@piotrkawula.pl</Link>
    </section>
    <Socials className={styles.wrapperSocials} dark />
  </div>
);

export default Intro;
