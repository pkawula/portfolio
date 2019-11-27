import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "../../context";
import Header from "../../Components/Header/Header";
import Landing from "../Landing/Landing";
import Menu from "../../Components/Menu/Menu";

class Root extends React.Component {
  state = {
    isMenuOpen: false
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
  render() {
    const { isMenuOpen } = this.state;
    const contextElements = {
      ...this.state
    };
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openMenuFn={this.openMenu} />
          <Switch>
            <Route exact path="/" component={Landing}></Route>
          </Switch>
          {isMenuOpen && <Menu closeMenuFn={this.closeMenu} />}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
