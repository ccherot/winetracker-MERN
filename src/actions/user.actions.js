import userService from "../services/user.service";
import userConstants from "../constants/user.constants";
import alertActions from "../actions/alert.actions";

const login = (username, password) => {
  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, payload: user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, payload: user };
  }
  function failure(error) {
    return {
      type: userConstants.LOGIN_FAILURE,
      payload: error,
      error: true
    };
  }
  return dispatch => {
    dispatch(request(username));

    userService.login(username, password).then(
      user => {
        dispatch(success(user));
        history.push("/login");
        dispatch(alertActions.success("Login successful"));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
};

const logout = () => {
  // will the userService.logout() return an action?
  userService.logout();
  return { type: userConstants.LOGOUT };
};

function register(user) {
  function request(username) {
    return { type: userConstants.REGISTER_REQUEST, payload: username };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, payload: user };
  }
  function failure(error) {
    return {
      type: userConstants.REGISTER_FAILURE,
      payload: new Error(error.statusText)
    };
  }
  return dispatch => {
    dispatch(request(user.userEmail));

    userService.register(user).then(
      user => {
        // was (user) but I was get the no-shadow eslint error or the no-unused error
        dispatch(success(user));
        history.push("/register");
        dispatch(alertActions.success("Registration successful"));
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };
}

const userActions = {
  login,
  logout,
  register
};
export default userActions;
