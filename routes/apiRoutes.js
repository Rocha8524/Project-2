// Create variables for dependencies
var express = require("express");
var router = express.Router();
var database = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/players", function(request, response) {
    database.bestPlayers.findAll({}).then(function(bestPlayers) {
      response.json(bestPlayers);
    });
  });
};

// Export routes for server.js to use.
module.exports = router;
