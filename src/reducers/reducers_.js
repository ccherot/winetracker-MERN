// @flow

// import { combineReducers } from "redux";
// import { DO_LOGIN, DO_REGISTER } from "./actions";

// import { userConstants } from "./constants";

// const user = JSON.parse(localStorage.getItem("user"));
// const initialState = user ? { loggedIn: true, user } : {};

// export function authentication(state = initialState, action) {
//   switch (action.type) {
//     case userConstants.LOGIN_REQUEST:
//       return {
//         loggingIn: true,
//         user: action.user
//       };
//     case userConstants.LOGIN_SUCCESS:
//       return {
//         loggedIn: true,
//         user: action.user
//       };
//     case userConstants.LOGIN_FAILURE:
//       return {};
//     case userConstants.LOGOUT:
//       return {};
//     default:
//       return state;
//   }
// }

// const login = (state = "", action: Action) => {
//   if (action.type === DO_LOGIN) {
//     return action.payload;
//   }
//   return state;
// };

// const register = (state = "", action: Action) => {
//   if (action.type === DO_REGISTER) {
//     return action.payload;
//   }

//   return state;
// };

// const rootReducer = combineReducers({ login, register });

// export default rootReducer;
