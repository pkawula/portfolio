import React from "react";
import styles from "./Intro.module.scss";
import Link from "../Link/Link";
import meImage from "../../assets/images/me.jpg";
import PageTitle from "../PageTitle/PageTitle";
import Socials from "../Socials/Socials";
import { NavLink } from "react-router-dom";

const Intro = () => (
  <div className={styles.wrapper}>
    <PageTitle />
    <section className={styles.wrapperIntro}>
      <article className={styles.wrapperIntroAvatar}>
        <img
          className={styles.wrapperIntroAvatarImage}
          src={meImage}
          alt="Author"
        />
      </article>
      <article className={styles.wrapperIntroDescription}>
        <h2 className={styles.wrapperIntroDescriptionHeading}>
          Let me introduce myself
        </h2>
        <p className={styles.wrapperIntroDescriptionParagraph}>
          I am a 23 years old aspiring frontend Developer! I am learning JS and
          it's features all by myself (using Internet, of course). I'm open for
          the new opportunities and would like to work as professional frontend
          developer.
        </p>
        <p className={styles.wrapperIntroDescriptionParagraph}>
          Check out my{" "}
          <NavLink
            className={styles.wrapperIntroDescriptionParagraphLink}
            to="/skills"
          >
            skills
          </NavLink>{" "}
          and{" "}
          <NavLink
            className={styles.wrapperIntroDescriptionParagraphLink}
            to="/projects"
          >
            projects
          </NavLink>
          . I'm also looking for new challenges and if you have one - feel free
          to{" "}
          <NavLink
            className={styles.wrapperIntroDescriptionParagraphLink}
            to="/contact"
          >
            contact
          </NavLink>{" "}
          me!
        </p>
        <Link mail="kontakt@piotrkawula.pl">kontakt@piotrkawula.pl</Link>
      </article>
    </section>
    <Socials className={styles.wrapperSocials} dark />
  </div>
);

export default Intro;
