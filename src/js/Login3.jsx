// @flow

import * as React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "./actions/user.actions";

type Props = {
  dispatch: Function,
  loggingIn: boolean
};

type State = {
  userEmail: string,
  userPassword: string,
  submitted: boolean
};

class Login3 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // this logs the user out and allows this
    // component to be used for logout as well
    // as login
    //
    console.log("userActions is ", userActions); // eslint-disable-line no-console
    // FIX...userActions seems to be undefined
    // props.dispatch(userActions.logout());

    this.state = {
      userEmail: "",
      userPassword: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // workaround for Flow errors. Methods must be defined as properties
  // handleChange: () => void;
  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    console.log("handleChange()"); // eslint-disable-line no-console
    const { name, value } = event.currentTarget;
    console.log(`name is ${name}and value is `, value); // eslint-disable-line no-console
    this.setState({ [name]: value });
  };
  // workaround for Flow errors. Methods must be defined as properties
  handleSubmit: () => void;
  handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    this.setState({ submitted: true });
    const { userEmail, userPassword } = this.state;
    const { dispatch } = this.props;
    if (userEmail && userPassword) {
      dispatch(userActions.login(userEmail, userPassword));
    }
  };
  render() {
    const { loggingIn } = this.props;
    const { userEmail, userPassword, submitted } = this.state;
    return (
      <div className="loginDiv">
        <h2>Login</h2>

        <form
          id="loginForm"
          className="loginFormClass"
          onSubmit={this.handleSubmit}
          name="loginForm"
        >
          <div
            className={`form-group${
              submitted && !userEmail ? " has-error" : ""
            }`}
          >
            <label id="loginEmailabel" htmlFor="loginUserEmailInput">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              name="userEmail"
              // id="loginUserEmailInput"
              value={userEmail}
              onChange={this.handleChange}
            />
            {submitted &&
              !userEmail && (
                <div className="help-block">Username is required</div>
              )}
          </div>
          <div
            className={`form-group${
              submitted && !userEmail ? " has-error" : ""
            }`}
          >
            <label htmlFor="loginPasswordInput">Password</label>
            <input
              type="text"
              className="form-control"
              name="userPassword"
              // id="loginPasswordInput"
              value={userPassword}
              onChange={this.handleChange}
            />
          </div>
          {submitted &&
            !userPassword && (
              <div className="help-block">Password is required</div>
            )}
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            {loggingIn && (
              <img
                alt="loading"
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              />
            )}
            <Link to="/register2" className="btn btn-link">
              Register
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}
// }{ userEmail: this.props.userEmail, userpassword: this.props.userPassword });
export const Unwrapped = Login3;
export default connect(mapStateToProps)(Login3);
