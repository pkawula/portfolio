import React from "react";
import AppContext from "../../context";
import styles from "./Menu.module.scss";
import { NavLink } from "react-router-dom";
import instagram from "../../assets/images/icons/instagram.svg";
import github from "../../assets/images/icons/github.svg";
import linkedin from "../../assets/images/icons/linkedin.svg";

class Menu extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {() => (
          <section className={styles.container}>
            <article className={styles.container__nav}>
              <NavLink to="/skills">My skills</NavLink>
              <NavLink to="/projects">My projects</NavLink>
              <NavLink to="/contact">Contact me</NavLink>
            </article>
            <article className={styles.container__socials}>
              <a
                className={styles.container__socials}
                href="http://instagram.com"
              >
                <img src={instagram} alt="instagram logo" />
              </a>
              <a className={styles.container__socials} href="http://github.com">
                <img src={github} alt="github logo" />
              </a>
              <a
                className={styles.container__socials}
                href="http://linkedin.com"
              >
                <img src={linkedin} alt="linkedin logo" />
              </a>
            </article>
          </section>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Menu;
