// @flow

import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Landing from "./Landing";
import CellarDetail from "./CellarDetail";
import WineDetail from "./WineDetail";
import Login from "./Login";
import Login2 from "./Login2";
import Login3 from "./Login3";
import Dashboard from "./Dashboard";
import TestComponent from "./TestComponent";
import Register from "./Register";
import Register2 from "./Register2";

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <Provider store={store}>
    <div className="app">
      <div className="jumbotron">
        <div className="col-sm-8 col-sm-offset-2">
          {/* {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>} */}
          <h1>App Works</h1>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/test" component={props => <TestComponent {...props} />} />
            <Route exact path="/login" component={props => <Login {...props} />} />
            <Route exact path="/login2" component={props => <Login2 {...props} />} />
            <Route exact path="/login3" component={props => <Login3 {...props} />} />
            <Route exact path="/register" component={props => <Register {...props} />} />
            <Route exact path="/register2" component={props => <Register2 {...props} />} />
            {/* <Route exact path="/testcomponent" component={TestComponent} /> */}
            <Route path="/cellardetail/:id" component={props => <CellarDetail {...props} />} />
            <Route path="/winedetail/:id" component={props => <WineDetail {...props} />} />
            <Route path="/dashboard/:id" component={props => <Dashboard {...props} />} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </div>
    </div>
  </Provider>
);

export default App;
