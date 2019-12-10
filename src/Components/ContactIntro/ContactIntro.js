import React from "react";
import styles from "./ContactIntro.module.scss";
import Link from "../Link/Link";

const ContactIntro = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.wrapperTitle}>Let's keep in touch...</h3>
      <p className={styles.wrapperParagraph}>
        Don't like contact forms? Send me an{" "}
        <Link mail="kontakt@piotrkawula.pl">email</Link>
        {"!"}
      </p>
    </div>
  );
};

export default ContactIntro;
