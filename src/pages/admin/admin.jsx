import React, { Component } from "react";
import{Route, Switch} from 'react-router-dom';

import routerPaths from './routes';

export default class Admin extends Component {
  render() {
    return (
      <div>
        <Switch>
          {routerPaths.map((routes, index) => (
            <Route
              key={index}
              exact
              path={routes.path}
              component={routes.component}
            />
          ))}
          <Route path="*" render={() => <p>404 page</p>} />
        </Switch>
      </div>
    );
  }
}
