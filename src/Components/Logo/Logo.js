import React from "react";
import logoDark from "../../assets/images/logo_3_gray.png";
import logoWhite from "../../assets/images/logo_3_white.png";
import styles from "./Logo.module.scss";
import { NavLink } from "react-router-dom";

const Logo = ({ handleMenuClose, isMenuOpened }) => {
  const containerClass = isMenuOpened ? [styles.container, styles.container_menuOpened].join(' ') : styles.container;
  const logo = isMenuOpened ? logoWhite : logoDark;
  const textClass = isMenuOpened ? [styles.container__text, styles.container__text_menuOpened].join(' ') : styles.container__text;

  return (
    <NavLink onClick={handleMenuClose} className={containerClass} exact to="/">
      <img className={styles.container__img} src={logo} alt="Logo" />
      <span className={textClass}>piotrkawula.pl</span>
    </NavLink>
  );
};

export default Logo;
