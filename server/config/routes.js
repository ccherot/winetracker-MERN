// we are going to need the following routes

// need path because of the last route that is handling the
// case where the use types in a URL
// const path = require("path");

// need reference to controllers for wines and users
const wines = require("../controllers/wines.js");
const users = require("../controllers/users.js");
const cellars = require("../controllers/cellars.js");
const cellarItems = require("../controllers/cellarItems.js");

//  this adds route listeners to users and wines
function doRoutes(app) {
  // these are the user related routes

  // TODO: do we want future functionality for
  // searching other user's cellars (if they are made public?)

  // this will get all the users
  app.get("/api/users", (req, res) => {
    users.getUsers(req, res);
  });

  // this should create a new user
  app.post("/api/register", (req, res) => {
    users.register(req, res);
  });

  // this should attempt to login an existing user
  app.post("/api/login", (req, res) => {
    users.login(req, res);
  });

  // this will delete a user
  app.delete("/api/users/:id", (req, res) => {
    users.deleteUser(req, res);
  });

  // this will update a user's profile info
  app.patch("/api/users", (req, res) => {
    users.updateUser(req, res);
  });

  // this will allow a user to change their password
  app.post("/api/users/changepassword", (req, res) => {
    users.changePassword(req, res);
  });

  //
  // Wine Routes
  //

  // this will get all the wines in the db. This can be useful for initially populating a cellar
  // this should probably paginate somehow or maybe the process can be broken up
  // TODO: how to get n number of records and then get the next n records
  // this might not be a good route to use...maybe force users to search by region before adding?
  app.get("/api/wines", (req, res) => {
    wines.getAllWines(req, res);
  });

  // This route searches ALL wines using a given query
  app.get("/api/winesearch", (req, res) => {
    wines.searchWines(req, res);
  });

  // this will post new wines
  app.post("/api/wines", (req, res) => {
    wines.addWine(req, res);
  });

  // this will delete a wine.  this should
  // only be done by an administrator
  app.delete("/api/wines/:id", (req, res) => {
    wines.deleteWine(req, res);
  });

  // this will update a wine.  Should this be an admin only route?
  app.patch("/api/wines", (req, res) => {
    wines.updateWine(req, res);
  });

  //
  // CELLAR ROUTES
  //

  // these routes are for user cellars so they are more
  // related to collections of wines than individual wines.
  // This app could be useful for professional wine cellar managers

  // this should create a new cellar attached to a user
  app.post("/cellar", (req, res) => {
    cellars.addCellar(req, res);
  });

  // this gets all the wines in a specific user's cellar
  app.get("/cellar/:id", (req, res) => {
    cellars.getCellar(req, res);
  });

  // this route deletes a cellar from a user's profile.
  // probably not going to be used much...I hope
  app.delete("/cellar/:id", (req, res) => {
    cellars.deleteCellar(req, res);
  });

  // this route allows a user to update a cellar name
  app.patch("/cellar", (req, res) => {
    cellars.updateCellar(req, res);
  });

  //
  // CellarItem Routes
  //

  app.patch("/cellaritem", (req, res) => {
    cellarItems.updateCellarItem(req, res);
  });

  // this route adds a new cellar item to the cellar
  app.post("/cellaritem", (req, res) => {
    cellarItems.addToCellar(req, res);
  });

  // this route deletes a CellarItem.  This will likely not get used
  // unless there is something very wring wit the CellarItem or maybe if
  // it is a duplicate.  Most of the time a CellarItems quantity will simply
  // be adjusted or the info will be edited in some way.  CellarItems with a
  // quantity of 0 will be moved to a different list of 'consumed' wines
  // perhaps.
  app.delete("/cellaritem/:id", (req, res) => {
    cellarItems.deleteFromCellar(req, res);
  });
}
export default doRoutes;
