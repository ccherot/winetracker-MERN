// @flow
// import authHeader from "../utils/auth-header";
import axios from "axios";

function login(username: string, password: string) {
  console.log("username: $1, password: $2", username, password); // eslint-disable-line no-console

  // return () => {
  return axios
    .post("/login", { userEmail: username, userPassword: password }) // http://localhost:8000
    .then(response => {
      console.log("response.data is ", response.data); // eslint-disable-line no-console
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .then(user => {
      // login successful
      if (user && user.token) {
        // store user info in local storage so its there for page refreshes
        localStorage.setItem("user", JSON.stringify(user));
      }

      return user;
    })
    .catch(error => {
      console.error("axios error", error); // eslint-disable-line no-console
    });
  // };
}
export const userService = {
  login
  //   logout,
  //   register,
  //   getAll,
  //   getById,
  //   update,
  //   delete: _delete
};

export const foo = {};
