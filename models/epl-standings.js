// Include football data npm package
var data = require("footballdata-api-v2");
var FootballData = data.default;

var footballData = new FootballData("f500a2871e0e423d9fe1ba869f73155e");

// Store all arguments in an array
var commands = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

footballData
  .getStandingsFromCompetition({
    competitionId: 2021,
    standingType: "TOTAL"
  })
  .then(function(data) {
    console.log(JSON.stringify(data.standings, null, 4));
  });
