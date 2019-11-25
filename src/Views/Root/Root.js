import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "../../context";
import Header from "../../Components/Header/Header";
import Landing from "../Landing/Landing";
import Menu from "../Menu/Menu";

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppContext.Provider>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route path="/menu" component={Menu}></Route>
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
