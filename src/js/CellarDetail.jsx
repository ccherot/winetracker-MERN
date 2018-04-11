// @flow

import React from "react";
import PropTypes from "prop-types";

/* We'll need to pass in some props here after creating a Cellar class */
const CellarDetail = (props: { someVar?: string }) => (
  <div className="cellarDetailDiv">
    <h1>Cellar Detail Works</h1>
    <h3>{props.someVar}</h3>
    {/* uss a map to create a table here with each cellarItem in it */}
  </div>
);

CellarDetail.propTypes = {
  someVar: PropTypes.string.isRequired
};

CellarDetail.defaultProps = {
  someVar: "default string value"
};

export default CellarDetail;
