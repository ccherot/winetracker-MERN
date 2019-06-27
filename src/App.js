import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
import CellarDetail from "./CellarDetail";
import ThemeContext from "./ThemeContext";
import Footer from "./Footer";
import WineDetail from "./WineDetail";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";

const App = () => {
  const theme = useState("darkBlue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <NavBar />
        <Router>
          <Landing path="/" />
          <Login path="/login" />
          <Register path="/register" />
          <CellarDetail path="/cellardetail" />
          <WineDetail path="/winedetail" />
          <Dashboard path="/dashboard" />
        </Router>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
