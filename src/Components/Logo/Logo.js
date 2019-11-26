import React from "react";
import logo from "../../assets/images/logo_3_gray.png";
import styles from "./Logo.module.scss";
import { NavLink } from "react-router-dom";

const Logo = () => (
  <NavLink className={styles.container} exact to="/">
    <img className={styles.container__img} src={logo} alt="Logo" />
    <span className={styles.container__text}>piotrkawula.pl</span>
  </NavLink>
);

export default Logo;
