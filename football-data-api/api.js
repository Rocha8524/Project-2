// Include football data npm package
const data = require("footballdata-api-v2");
const FootballData = data.default;

const footballData = new FootballData("f500a2871e0e423d9fe1ba869f73155e");

// Store all arguments in an array
var commands = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

switch (commands) {

    case "squad":
        squadThis();
        break;

    case "standings":
        standingsThis();
        break;
}

// Display squad members
function squadThis() {

    footballData.getTeam({
        id: 73, // Real Madrid
    }).then(function (data) {
        console.log(JSON.stringify(data.squad, null, 4));
    })
}

function standingsThis() {
    footballData.getStandingsFromCompetition({
        competitionId: 2021,
        standingType: "TOTAL",
    }).then(function (data) {
        console.log(JSON.stringify(data.standings, null, 4));
        console.log()
    })
}