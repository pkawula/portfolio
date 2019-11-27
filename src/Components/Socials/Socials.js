import React from "react";
import styles from "./Socials.module.scss";
import instagram from "../../assets/images/icons/instagram.svg";
import github from "../../assets/images/icons/github-light.png";
import linkedin from "../../assets/images/icons/linkedin.png";
import Link from "../Link/Link";

const Socials = () => (
  <section className={styles.container}>
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
        src={github}
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
        src={linkedin}
        alt="linkedin logo"
        title="Visit Linkedin"
      />
    </Link>
  </section>
);

export default Socials;
