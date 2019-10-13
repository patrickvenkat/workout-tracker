var db = require("../models");

var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/workoutplan", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("error");
  // });
};
