// @flow

import React from "react";
import PropTypes from "prop-types";

const Dashboard = (props: { someVar?: string }) => (
  <div className="dashboardDiv">
    <h1> Dashboard works</h1>
    <h3>{props.someVar}</h3>
  </div>
);

Dashboard.propTypes = {
  someVar: PropTypes.string
};

Dashboard.defaultProps = {
  someVar: "default string value"
};

export default Dashboard;
