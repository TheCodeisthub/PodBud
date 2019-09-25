import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Styles
import "../styles/App.scss";

// Routes
import Login from "./login";
import Admin from "./admin";
import LandingPage from "./site";

export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/admin" component={Admin} />
              <Route path="/" component={LandingPage} />
            </Switch>
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
