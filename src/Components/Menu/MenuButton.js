import React from "react";
import styles from "./MenuButton.module.scss";

const MenuButton = ({ handleMenuToggle, isMenuOpened }) => {
  const buttonClass = isMenuOpened ? [styles.button, styles.button_opened].join(' ') : styles.button;
  return (
    <button onClick={handleMenuToggle} className={buttonClass}>
      <span></span>
    </button>
  );
};

export default MenuButton;
