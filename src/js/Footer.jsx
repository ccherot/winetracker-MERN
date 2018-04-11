// @flow

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Footer = (props: { someVar?: string }) => (
  <div className="footerDiv">
    <h1>Footer Works</h1>
    <Link to="/about">About</Link>
    <Link to="/">`{props.someVar}`</Link>
  </div>
);

Footer.propTypes = {
  someVar: PropTypes.string
};

Footer.defaultProps = {
  someVar: "some value"
};
export default Footer;
