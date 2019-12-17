var bestPlayers = require("../database/best-players");

module.exports = function(app) {
  // Get all examples
  app.get("/api/players", function(request, response) {
    db.Example.findAll({}).then(function() {
      response.json(bestPlayers);
    });
  });

  // Create a new example
  app.post("/api/best-players", function(request, response) {
    db.Example.create(req.body).then(function(dbExample) {
      response.json(dbExample);
    });
  });
};
