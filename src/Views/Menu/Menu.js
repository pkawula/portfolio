import React from "react";
import AppContext from "../../context";
import styles from "./Menu.module.scss";

class Menu extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {() => <h1 className={styles.h1}>Hello in the menu</h1>}
      </AppContext.Consumer>
    );
  }
}

export default Menu;
