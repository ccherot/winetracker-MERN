// @flow

import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import userActions from "../actions";

// import PropTypes from "prop-types";
type Props = {
  user: NewUser,
  dispatch: Function,
  registering: boolean
};

type State = {
  user: NewUser,
  submitted: boolean
};
class Register extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      user: {
        birthday: null,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: ""
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    console.log(`Register: handleChange: name is${name} and value is `, value); // eslint-disable-line no-console
    // const { user } = this.state;
    // this.setState({
    //   user: {
    //     ...user,
    //     [name]: value
    //   }
    // });
    this.setState({ [name]: value });
  };
  handleSubmit: () => void;
  handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    this.setState({
      submitted: true
    });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (
      user.firstName &&
      user.lastName &&
      user.email &&
      user.password &&
      user.password === user.passwordConfirm
    ) {
      dispatch(userActions.register(user));
    }
  };

  render() {
    const { registering } = this.props;
    const { user, submitted } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Register</h2>
        <form
          name="form"
          onSubmit={this.handleSubmit}
          id="registrationForm"
          className="registrationFromClass"
        >
          <div
            className={`form-group${
              submitted && !user.firstName ? " has error" : ""
            }`}
          >
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              value={user.firstName}
              onChange={this.handleChange}
            />
          </div>
          <div
            className={`form-group${
              submitted && !user.lastName ? " has-error" : ""
            }`}
          >
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={user.lastName}
              onChange={this.handleChange}
            />
          </div>
          <div
            className={`form-group${
              submitted && !user.email ? " has-error" : ""
            }`}
          >
            <label htmlFor="regEmail">Email:</label>
            <input
              type="text"
              name="regEmail"
              className="form-control"
              value={this.props.user.email}
              onChange={this.handleChange}
            />
          </div>
          <label htmlFor="password">
            <div
              className={`form-group${
                submitted && !user.password ? " has-error" : ""
              }`}
            />Password:
          </label>
          <input
            type="text"
            name="regPassword"
            className="form-control"
            value={user.password}
            onChange={this.handleChange}
          />
          <div
            className={`form-group${
              submitted && !user.passwordConfirm ? " has-error" : ""
            }`}
          />
          <label htmlFor="passwordConfirm">Password Confirm:</label>
          <input
            type="text"
            name="passwordConfirm"
            className="form-control"
            value={user.passwordConfirm}
            onChange={this.handleChange}
          />
          <div
            className={`form-group${
              submitted && !user.birthday ? " has-error" : ""
            }`}
          >
            <label htmlFor="regBirthday">Birthday:</label>
            <input
              type="date"
              name="regBirthday"
              className="form-control"
              value={user.birthday}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>
            {registering && (
              <img
                alt="loading"
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
              />
            )}
            <Link to="./login" className="btn btn-link">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { registering } = state.registration;
  return {
    registering
  };
}
export const Unwrapped = Register;
export default connect(mapStateToProps)(Register);
