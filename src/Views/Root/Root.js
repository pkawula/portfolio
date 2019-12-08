import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "../../context";
import Header from "../../Components/Header/Header";
import Landing from "../Landing/Landing";
import Skills from "../Skills/Skills";
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
          {isMenuOpen ? (
            <Header closeMenuFn={this.closeMenu} />
          ) : (
            <Header light />
          )}
          {isMenuOpen ? (
            <Nav openMenuFn={this.closeMenu} btnClass />
          ) : (
            <Nav openMenuFn={this.openMenu} />
          )}
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route path="/skills" component={Skills}></Route>
          </Switch>
          {isMenuOpen && <Menu closeMenuFn={this.closeMenu} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
