import userConstants from "../constants/user.constants";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true } : {};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggedIn: true,
        user: action.payload
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.payload
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};

export default authentication;
