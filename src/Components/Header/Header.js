import React, { useState } from "react";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import styles from "./Header.module.scss";

const Header = () => {

  const [menuOpened, toggleMenu] = useState(false);

  const handleMenuToggle = () => toggleMenu(!menuOpened);
  const handleMenuClose = () => toggleMenu(false);

  return (
    <header className={styles.container}>
      <Logo handleMenuClose={handleMenuClose} isMenuOpened={menuOpened} />
      <Menu isMenuOpened={menuOpened} handleMenuToggle={handleMenuToggle} closeMenuFn={handleMenuClose} />
    </header>
  );
};

export default Header;
