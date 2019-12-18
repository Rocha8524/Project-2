// Create variables for dependencies
var playersData = require("../database/best-players");

module.exports = function(app) {
  // Get all examples
  app.get("/api/players", function(request, response) {
    response.json(playersData);
  });

  // Create a new example
  app.post("/api/players", function(request, response) {
    db.Example.push(request.body).then(function(dbExample) {
      response.json(players);
    });
  });
};
