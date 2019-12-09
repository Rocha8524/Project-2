// Include football data npm package
var data = require("footballdata-api-v2");
var FootballData = data.default;

// Variable for fs text portion of LIRI
var fs = require("fs");

var footballData = new FootballData("f500a2871e0e423d9fe1ba869f73155e");

footballData
  .getTeamsFromCompetition({
    competitionId: 2021
  })
  .then(function(data) {
    console.log(JSON.stringify(data.teams, null, 4));
  });
