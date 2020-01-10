import React from "react";
import styles from "./NoMatchPage.module.scss";
import { Link } from "react-router-dom";

const NoMatchPage = () => (
  <section className={styles.wrapper}>
    <h1 className={styles.wrapperError}>404</h1>
    <p className={styles.wrapperInformation}>
      It seems like you're lost on this page...
    </p>
    <Link to="/" className={styles.wrapperLink}>
      Let's go back to homepage!
    </Link>
  </section>
);

export default NoMatchPage;
