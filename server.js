/* eslint no-console:0 */
require("babel-register");

// first require all of the Reacat / Webpack stuff
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const ReactRouter = require("react-router-dom");
const _ = require("lodash");
const fs = require("fs");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const compression = require("compression");
const webpack = require("webpack");
const config = require("./webpack.config");
const App = require("./src/js/App").default;

const StaticRouter = ReactRouter.StaticRouter;
const port = 8080;
const baseTemplate = fs.readFileSync("./index.html");
const template = _.temmplate(baseTemplate);

// require express
const express = require("express");

// create an express app
const server = express();

// tell the server to use compression
server.use(compression());
// if we are in dev mode then we need to tell the
// server to use webpack and the dev middleware
// and hot module reloading middleware and all that
// fun stuff
if (process.env.NODE_ENV === "development") {
  const compiler = webpack(config);
  server.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }));
  server.use(webpackHotMiddleware(compiler));
}
server.use("/public", express.static("./public"));

// require path
const path = require("path");

// require body-parser
const bodyParser = require("body-parser");

// tell express to use body parser and to use extended
// and json so that we can parse the json in the req.body
// server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json());

// tell express where the static files are.  This is the
// public folder for our React front end code
server.use(express.static(path.join(__dirname, "./public")));

// require mongoose for our MongoDB connectivity
require("./server/config/mongoose.js");

// define the routes_setter
const routeSetter = require("./server/config/routes.js");

// invoke the function in the routes_setter and pass
// a reference to our express server
routeSetter(server);

// finally start the server
server.listen(8000, () => {
  console.log("winetracker listening on port 8000!!!");
});
