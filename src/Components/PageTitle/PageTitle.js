import React from "react";
import styles from "./PageTitle.module.scss";

const PageTitle = () => (
  <h1 className={styles.pageTitle}>
    <span className={styles.pageTitle_Sub}>piotr </span>|{"{"}awula
  </h1>
);

export default PageTitle;
