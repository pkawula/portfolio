import React from "react";
import logoDark from "../../assets/images/logo_3_gray.png";
import logoLight from "../../assets/images/logo_3_white.png";
import styles from "./Logo.module.scss";
import { NavLink } from "react-router-dom";

const Logo = ({ closeMenuFn, light }) => {
  const logo = light ? logoDark : logoLight;
  const logoText = light ? styles.container__text : styles.container__textLight;

  return (
    <NavLink onClick={closeMenuFn} className={styles.container} exact to="/">
      <img className={styles.container__img} src={logo} alt="Logo" />
      <span className={logoText}>piotrkawula.pl</span>
    </NavLink>
  );
};

export default Logo;
