import { userConstants } from "../constants";
import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../utils/history";

function login(username, password) {
  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      user => {
        dispatch(success(user));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function register(user) {
  function request(theUser) {
    return { type: userConstants.REGISTER_REQUEST, theUser };
  }
  function success(theUser) {
    return { type: userConstants.REGISTER_SUCCESS, theUser };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
  return dispatch => {
    dispatch(request(user));

    userService.register(user).then(
      () => {
        // was (user) but I was get the no-shadow eslint error or the no-unused error
        dispatch(success());
        history.push("/login");
        dispatch(alertActions.success("Registration successful"));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
}

export const userActions = {
  login,
  logout,
  register
};

export const bar = {};
