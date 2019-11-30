import React from "react";
import styles from "./Socials.module.scss";
import instagram from "../../assets/images/icons/instagram.svg";
import githubLight from "../../assets/images/icons/github-light.png";
import githubDark from "../../assets/images/icons/github-dark.svg";
import linkedinLight from "../../assets/images/icons/linkedin.png";
import linkedinDark from "../../assets/images/icons/linkedin-dark.png";
import Link from "../Link/Link";

const Socials = ({ dark, isMenu }) => {
  const imageGit = dark ? githubDark : githubLight;
  const imageLi = dark ? linkedinDark : linkedinLight;

  const sectionClass = isMenu ? styles.container : styles.containerDefault;

  return (
    <section className={sectionClass}>
      <Link
        secondary
        href="https://www.instagram.com/ojciecpio_xd/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles.container__link_image}
          src={instagram}
          alt="instagram logo"
          title="Visit Instagram"
        />
      </Link>
      <Link
        secondary
        href="https://github.com/pkawula"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles.container__link_image}
          src={imageGit}
          alt="github logo"
          title="Visit Github"
        />
      </Link>
      <Link
        secondary
        href="https://www.linkedin.com/in/piotr-kawula-8bab8b164/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className={styles.container__link_image}
          src={imageLi}
          alt="linkedin logo"
          title="Visit Linkedin"
        />
      </Link>
    </section>
  );
};

export default Socials;
