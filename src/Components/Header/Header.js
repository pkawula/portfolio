import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.module.scss";

const Header = props => {
  return (
    <header className={styles.container}>
      <Logo {...props} />
    </header>
  );
};

export default Header;
