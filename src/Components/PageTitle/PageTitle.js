import React from "react";
import styles from "./PageTitle.module.scss";

const PageTitle = ({ children, green }) => {
  const defaultTitle = children ? (
    children
  ) : (
    <>
      <span className={styles.pageTitle_Sub}>piotr </span>|{"{"}awula
    </>
  );

  const headingClass = green ? styles.pageTitleGreen : styles.pageTitle;

  return <h1 className={headingClass}>{defaultTitle}</h1>;
};

export default PageTitle;
