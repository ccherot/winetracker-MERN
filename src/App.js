import React from "react"; // { useState }
import ReactDOM from "react-dom";
import Provider from "react-redux";
import store from "./store";
/* 
import { Router } from "@reach/router";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
import CellarDetail from "./CellarDetail";
import Footer from "./Footer";
import WineDetail from "./WineDetail";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
 */
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>App Works</h1>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
