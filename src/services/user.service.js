import axios from "axios";
import userConstants from "../constants/user.constants";

const login = (username, password) => {
  console.log("username $1, password $2", username, password); //eslint-disable-line no-console

  return axios
    .post("/login", { userEmail: username, userPassword: password })
    .then(response => {
      console.log("userServeice> login > response.data is ", response.data); //eslint-disable-line no-console
      if (!response.ok) {
        console.log("userServeice> login > response.ok is false"); //eslint-disable-line no-console
        // not sure if I should return the Promise.reject or the Flux Standard Error
        return {
          type: userConstants.LOGIN_FAILURE,
          payload: new Error(response.statusText),
          error: true
        };
        // return Promise.reject(response.statusText);
      }
      // return pretty much the same thing?
      console.log("userService> login > response.ok is ", response.ok); //eslint-disable-line no-console
      return {
        type: userConstants.LOGIN_FAILURE,
        payload: new Error(response.json()),
        error: true
      };
    })
    .then(user => {
      // login successful
      console.log("userServeice> login > user.token is ", user.token); //eslint-disable-line no-console
      if (user && user.token) {
        console.log("login sucess: ", user); // eslint-disable-line no-console
        // store user info locally for page refreshes
        localStorage.setItem("user", JSON.stringify(user));
      }
      //
      return { type: userConstants.LOGIN_SUCCESS, payload: user };
    })
    .catch(error => {
      console.log("login errror: ", error.statusText); // eslint-disable-line no-console
      return {
        type: userConstants.LOGIN_FAILURE,
        payload: new Error(error.statusText),
        error: true
      };
    });
};

const register = newUser => {
  console.log("userService > register > newUser is ", newUser); // eslint-disable-line no-console
  return axios
    .post("/register", newUser)
    .then(response => {
      console.log("userServeice> register > response.data is ", response.data); //eslint-disable-line no-console
      if (!response.ok) {
        console.log("userServeice> registergin > response.ok is false"); //eslint-disable-line no-console
        // not sure if I should return the Promise.reject or the Flux Standard Error
        return {
          type: userConstants.REGISTER_FAILURE,
          payload: new Error(response.statusText),
          error: true
        };
        // return Promise.reject(response.statusText);
      }
      // return pretty much the same thing?
      console.log("userServeice> ogregistern > response.ok is ", response.ok); //eslint-disable-line no-console
      return {
        type: userConstants.REGISTER_FAILURE,
        payload: new Error(response.json()),
        error: true
      };
    })
    .then(user => {
      // register successful
      console.log("userServeice> register > user.token is ", user.token); //eslint-disable-line no-console
      if (user && user.token) {
        console.log("register sucess: ", user); // eslint-disable-line no-console
        // store user info locally for page refreshes
        localStorage.setItem("user", JSON.stringify(user));
      }
      //
      return { type: userConstants.REGISTER_SUCCESS, payload: user };
    })
    .catch(error => {
      console.log("register errror: ", error.statusText); // eslint-disable-line no-console
      return {
        type: userConstants.REGISTER_FAILURE,
        payload: new Error(error.statusText),
        error: true
      };
    });
};

const logout = () => {
  // do we need to tell the user we are logging out?
  // delete local storage?
  //
};

const userService = {
  login,
  logout,
  register
  // getAll, // is ths needed?
  // getById,
  // update,
  // delete: _delete
};

export default userService;
