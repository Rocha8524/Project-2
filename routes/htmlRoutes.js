var db = require("../models");

module.exports = function(app) {
<<<<<<< HEAD
  // Load index page
  app.get("/index", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
=======
  // Load index pages
  app.get("/", function(req, res) {
    res.render("index", {
      msg: "Welcome!"
    });
  });

  app.get("/players", function(req, res) {
    db.Player.findAll({}).then(function(players) {
      console.log(players);
      res.render("players", {
>>>>>>> 5c66057644319b8f9626ae8d0945fb2133ddfaa5
        msg: "Welcome!",
        players: players
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(request, response) {
    db.Example.findOne({ where: { id: request.params.id } }).then(function(
      dataExample
    ) {
      response.render("example", {
        example: dataExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
