<<<<<<< HEAD
var bestPlayers = require("../database/best-players");

module.exports = function (app) {
  // Get all examples
  app.get("/api/best-players", function (request, response) {
    db.Example.findAll({}).then(function (dbExamples) {
=======
module.exports = function(app) {
  // Get all examples
  app.get("/api/players", function(request, response) {
    db.Example.findAll({}).then(function(dbExample) {
>>>>>>> 5c66057644319b8f9626ae8d0945fb2133ddfaa5
      response.json(bestPlayers);
    });
  });

  // Create a new example
<<<<<<< HEAD
  app.post("/api/best-players", function (request, response) {
    db.Example.create(req.body).then(function (dbExample) {
=======
  app.post("/api/best-players", function(request, response) {
    db.Example.create(req.body).then(function(dbExample) {
>>>>>>> 5c66057644319b8f9626ae8d0945fb2133ddfaa5
      response.json(dbExample);
    });
  });
};
