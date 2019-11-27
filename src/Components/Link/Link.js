import React from "react";
import styles from "./Link.module.scss";

const Link = ({ children, href, mail, secondary, ...props }) => {
  const linkClass = secondary ? styles.link__secondary : styles.link__default;

  return (
    <a className={linkClass} href={href ? href : `mailto:${mail}`} {...props}>
      {children}
    </a>
  );
};

export default Link;
