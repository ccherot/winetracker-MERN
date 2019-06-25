import React from "react";
import { Link } from "@reach/router";

const Footer = () => (
  <div className="footerDiv">
    <h1>Footer Still Works</h1>
    <Link to="/about">About</Link>
    <Link to="/">Home</Link>
  </div>
);

export default Footer;
