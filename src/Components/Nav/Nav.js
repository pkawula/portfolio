import React from "react";
import styles from "./Nav.module.scss";

const Nav = ({ openMenuFn, btnClass }) => {
  const buttonType = btnClass ? styles.buttonLineOpened : styles.buttonLine;
  return (
    <button onClick={openMenuFn} className={styles.button}>
      <span className={buttonType}></span>
      <span className={buttonType}></span>
      <span className={buttonType}></span>
    </button>
  );
};

export default Nav;
