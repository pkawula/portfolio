import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContext from "../../context";
import Header from "../../Components/Header/Header";
import Landing from "../Landing/Landing";
import Skills from "../Skills/Skills";
import NoMatchPage from "../../Components/NoMatchPage/NoMatchPage";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

const Root = () => (
  <BrowserRouter>
    <AppContext.Provider>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route path="/skills" component={Skills}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route component={NoMatchPage}></Route>
      </Switch>
    </AppContext.Provider>
  </BrowserRouter>
);

export default Root;
