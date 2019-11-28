import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "../../context";
import Header from "../../Components/Header/Header";
import Landing from "../Landing/Landing";
import Nav from "../../Components/Nav/Nav";
import Menu from "../../Components/Menu/Menu";

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
    const { isMenuOpen } = this.state;
    return (
      <BrowserRouter>
        <AppContext.Provider>
          <Header />

          {/* {hamburgerClose ? (
            <Nav
              openMenuFn={isMenuOpen ? this.closeMenu : this.openMenu}
              opened
            />
          ) : (
            <Nav openMenuFn={isMenuOpen ? this.closeMenu : this.openMenu} />
          )} */}

          {isMenuOpen ? (
            <Nav openMenuFn={this.closeMenu} btnClass />
          ) : (
            <Nav openMenuFn={this.openMenu} />
          )}
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
