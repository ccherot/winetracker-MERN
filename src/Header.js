import React from "react";
// import { Link } from "@reach/router";
// import PropTypes from "prop-types";

const Header = () => <div className="headerDiv">Header Works!</div>;
/*
type Props = {
  showSearch?: boolean,
  // handleSearchTermChange: Function,
  searchTerm: string
};

function handleSearchTermChange() {
  console.log("Header: handleSearchtermChange()... search not implemented yet"); // eslint-disable-line no-console
}

const Header = (props: Props) => {
  //  { showSearch?: boolean, handleSearchTermChange: Function, searchTerm: string }
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input onChange={handleSearchTermChange} value={props.searchTerm} type="text" placeholder="Search Wines" />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/Dashboard">Back</Link>
      </h2>
    );
  }
  return (
    <div className="headerClass">
      <h1>Header Works</h1>
      {utilSpace}
    </div>
  );
};

Header.defaultProps = {
  showSearch: false
};
*/
export default Header;
