/* eslint no-console:0 */

// for now I am going to remove all of the React and Webpack code from
// the server.  I might not add webpack back in if I can get away with using
// Parcel instead although it makes a lot of sense to figure out how to get
// all of this working with webpack.  Itm might make sense to have two different
// server.js files at some point but I am not sure yet.

// I will prefix comments with OLD to denote stuff that was using
// webpack for the server

// TEMP
// require("babel-register");

// first require all of the Reacat / Webpack stuff
// TEMP const React = require("react");
// TEMP const ReactDOMServer = require("react-dom/server");
// TEMP const ReactRouter = require("react-router-dom");

// file system module that we need for various things
// const fs = require("fs");

// START TEMP
// const webpackDevMiddleware = require("webpack-dev-middleware");
// const webpackHotMiddleware = require("webpack-hot-middleware");
// const compression = require("compression");
// const webpack = require("webpack");
// const config = require("./webpack.config");
// const App = require("./src/js/App").default;

// const staticRouter = ReactRouter.StaticRouter; // { StaticRouter }
// we DO need the port regardless
const port = 8080;
// const baseTemplate = fs.readFileSync("./index.html");
// const templateFunc = require("lodash.template");
// const template = templateFunc(baseTemplate);
// END TEMP

// require express
const express = require("express");

// create an express app
const server = express();

// tell the server to use compression
// TEMP I don't think we need the compression if we
// TEMP are not using webpack
// TEMP server.use(compression());

// if we are in dev mode then we need to tell the
// server to use webpack and the dev middleware
// and hot module reloading middleware and all that
// fun stuff
// START TEMP
// if (process.env.NODE_ENV === "development") {
//   const compiler = webpack(config);
//   server.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));
//   server.use(webpackHotMiddleware(compiler));
// }
// server.use("/public", express.static("./public"));

// here is where we hook up the React parts for the client side
// routing
// // END TEMP

// require body-parser
const bodyParser = require("body-parser");

// tell express to use body parser and to use extended
// and json so that we can parse the json in the req.body
// server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json());

// require mongoose for our MongoDB connectivity
require("./server/config/mongoose.js");

// define the routes_setter for the server side routes
const routeSetter = require("./server/config/routes.js");

// invoke the function in the routes_setter and pass
// a reference to our express server
routeSetter(server);

// finally start the server
server.listen(port, () => {
  console.log(`winetracker listening on port ${port}!!!`);
});
