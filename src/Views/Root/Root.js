import React from "react";
import Landing from "../Landing/Landing";
import AppContext from "../../context";

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppContext.Provider>
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            {/* <Route path="/menu" component={Menu}></Route> */}
          </Switch>
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;
