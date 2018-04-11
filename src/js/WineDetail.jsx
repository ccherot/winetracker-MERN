// @flow

import React from "react";
import PropTypes from "prop-types";

const WineDetail = (props: { someVar?: string }) => (
  <div className="wineDetail">
    <h1>Wine Detail Works</h1>
    <h3>{props.someVar}</h3>
  </div>
);

WineDetail.propTypes = {
  someVar: PropTypes.string
};

WineDetail.defaultProps = {
  someVar: "default value"
};

export default WineDetail;
