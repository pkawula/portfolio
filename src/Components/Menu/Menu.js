import React from "react";
import { NavLink } from "react-router-dom";
import Socials from "../Socials/Socials";
import MenuButton from "./MenuButton";
import styles from "./Menu.module.scss";

const Menu = ({ isMenuOpened, closeMenuFn, handleMenuToggle }) => {
  const menuClasses = isMenuOpened ? [styles.container, styles.container_opened].join(' ') : styles.container;

  return (
    <>
      <section className={menuClasses}>
        <article className={styles.container__nav}>
          <NavLink
            onClick={closeMenuFn}
            className={styles.container__nav_link}
            to="/skills"
          >
            My skills
      </NavLink>
          <NavLink
            onClick={closeMenuFn}
            className={styles.container__nav_link}
            to="/projects"
          >
            My projects
      </NavLink>
          <NavLink
            onClick={closeMenuFn}
            className={styles.container__nav_link}
            to="/contact"
          >
            Contact me
      </NavLink>
        </article>
        <Socials isMenuOpened />
      </section>
      <MenuButton isMenuOpened={isMenuOpened} handleMenuToggle={handleMenuToggle} />
    </>
  )
};

export default Menu;
