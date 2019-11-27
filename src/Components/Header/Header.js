import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";
// import Nav from "../Nav/Nav";

const Header = () => (
  <header className={styles.container}>
    <Logo />
    {/* <Nav /> */}
  </header>
);

export default Header;
