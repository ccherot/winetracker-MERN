import { Link } from "@reach/router";
import React from "react";
// type Props = {
// searchTerm: string,
// handleSearchTermChange: Function,
// history: RouterHistory
// };

const Landing = () => (
  <div className="landingDiv">
    <h1>Landing works</h1>
    <h1>Welcome to your Super Awesome Wine Cellar Management Site</h1>
    <Link to="/login">
      <h2>Please Login or </h2>
      <br />
    </Link>
    <Link to="/register">
      <h2>Register</h2>
    </Link>
    <br />
    <Link to="/winedetail:123">
      <h2>Test Wine Detail</h2>
    </Link>
    <br />
    <Link to="/cellardetail">
      <h2>Test Cellar Detail</h2>
    </Link>
    <br />
    <Link to="/dashboard">
      <h2>Test Dashboard</h2>
    </Link>
  </div>
);

export default Landing;
{
  /*     
<Link to="/register">Register</Link>
<Link to="/test">OR TEST</Link>
<Footer someVar="this value is passed in from Landing" />
*/
}
