var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/best-players", function(request, response) {
    db.bestPlayers.findAll({}).then(function(bestPlayers) {
      response.json(bestPlayers);
    });
  });
};
