import React from "react";
import styles from "./Link.module.scss";

const Link = ({ children, href, mail }) => (
  <a className={styles.link__default} href={href ? href : `mailto:${mail}`}>
    {children}
  </a>
);

export default Link;
