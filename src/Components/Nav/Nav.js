import React from "react";
import styles from "./Nav.module.scss";

const Nav = ({ openMenuFn }, navContainer__button) => {
  const buttonType = navContainer__button
    ? styles.navContainer__button
    : styles.navContainer__buttonClose;
  return (
    <div className={styles.navContainer}>
      <button onClick={openMenuFn} className={buttonType}>
        <span className={styles.navContainer__button_line}></span>
        <span className={styles.navContainer__button_line}></span>
        <span className={styles.navContainer__button_line}></span>
      </button>
    </div>
  );
};

export default Nav;
