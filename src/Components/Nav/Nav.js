import React from "react";
import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav className={styles.navContainer}>
    <NavLink exact to="/menu">
      <button className={styles.navContainer__button}>
        <span className={styles.navContainer__button_line}></span>
        <span className={styles.navContainer__button_line}></span>
        <span className={styles.navContainer__button_line}></span>
      </button>
    </NavLink>
  </nav>
);

export default Nav;
