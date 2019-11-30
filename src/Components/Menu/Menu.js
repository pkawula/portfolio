import React from "react";
import styles from "./Menu.module.scss";
import { NavLink } from "react-router-dom";
import Socials from "../Socials/Socials";

const Menu = ({ closeMenuFn }) => (
  <section className={styles.container}>
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
    <Socials isMenu />
  </section>
);

export default Menu;
