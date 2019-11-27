import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "../../context";
import Header from "../../Components/Header/Header";
import Landing from "../Landing/Landing";
import Nav from "../../Components/Nav/Nav";
import Menu from "../../Components/Menu/Menu";
import styles from "./Root.module.scss";

class Root extends React.Component {
  state = {
    isMenuOpen: false,
    hamburgerClose: false
  };

  openMenu = () => {
    this.setState({
      isMenuOpen: true
    });
  };

  closeMenu = () => {
    this.setState({
      isMenuOpen: false
    });
  };

  buttonOpen = () => {
    this.setState({
      hamburgerClose: false
    });
  };

  buttonClose = () => {
    this.setState({
      hamburgerClose: true
    });
  };

  render() {
    const { isMenuOpen, hamburgerClose } = this.state;
    return (
      <BrowserRouter>
        <AppContext.Provider>
          <Header className={styles.header} />

          {hamburgerClose ? (
            <Nav openMenuFn={isMenuOpen ? this.closeMenu : this.openMenu} />
          ) : (
            <Nav
              openMenuFn={isMenuOpen ? this.closeMenu : this.openMenu}
              navContainer__button
            />
          )}

          {/* {isMenuOpen ? (
            <Nav openMenuFn={this.closeMenu} />
          ) : (
            <Nav
              open
              // className={styles.toggleMenu}
              openMenuFn={this.openMenu}
            />
          )} */}
          <Switch>
            <Route exact path="/" component={Landing}></Route>
          </Switch>
          {isMenuOpen && <Menu />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
