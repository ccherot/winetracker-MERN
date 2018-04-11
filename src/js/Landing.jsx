// @flow

import * as React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

// type Props = {
// searchTerm: string,
// handleSearchTermChange: Function,
// history: RouterHistory
// };

const Landing = () => (
  //  {searchTerm: string, handleSearchTermChange: Function, history: RouterHistory}

  <div className="landingDiv">
    <Header showSearch={false} searchTerm="" />
    <h1>Landing works</h1>
    <h1>Welcome to your Super Awesome Wine Cellar Management Site</h1>
    <Link to="/login2">Please Login 2 or </Link>
    <Link to="/login3"> Login 3 or </Link>
    <Link to="/register2">Register</Link>
    <Link to="/test">OR TEST</Link>
    <Footer someVar="this value is passed in from Landing" />
  </div>
);

export default Landing;
