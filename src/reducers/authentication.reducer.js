import get from "lodash/get";
import { userConstants } from "../constants";

let user;
if (typeof window !== "undefined") {
  const storage = get(window, "localStorage", null);
  if (storage) {
    user = JSON.parse(storage.getItem("user"));
  }
}

const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}

// figure out how to use an index file and not
// piss off ESLint
export const authenticationDummy = {};
