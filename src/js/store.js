// @flow

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk"; //  was thunkMiddleware
// import { createLogger } from "redux-logger";
import { logger } from "redux-logger";
import rootReducer from "./reducers";

// const loggerMiddleware = createLogger();

// const store = createStore(
//   rootReducer,
//   applyMiddleware(
//     thunkMiddleware,
//     loggerMiddleware,
//     typeof window === "object" && typeof window.devToolsExtension !== "undefined" ? window.devToolsExtension() : f => f
//   )
// );

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk), // thunkMiddleware,
    applyMiddleware(logger), // loggerMiddleware
    typeof window === "object" && typeof window.devToolsExtension !== "undefined" ? window.devToolsExtension() : f => f
  )
);

export default store;
