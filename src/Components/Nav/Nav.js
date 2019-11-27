import React from "react";
import styles from "./Nav.module.scss";

const Nav = ({ openMenuFn }) => (
  <div className={styles.navContainer}>
    <button onClick={openMenuFn} className={styles.navContainer__button}>
      <span className={styles.navContainer__button_line}></span>
      <span className={styles.navContainer__button_line}></span>
      <span className={styles.navContainer__button_line}></span>
    </button>
  </div>
);

export default Nav;
