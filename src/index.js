import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Homepage from "views/Homepage/Homepage.js";
import Learn from "components/Card/Learn"
import { Provider } from 'react-redux'

import "assets/css/material-dashboard-react.css?v=1.9.0";
import store from './store'

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/admin/learn" component={Learn} />
        <Route path="/rtl" component={RTL} />
        <Route path="/" component={Homepage} />


        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Router>

  </Provider>,
  document.getElementById("root")
);
