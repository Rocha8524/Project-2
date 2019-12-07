// Include football data npm package
const data = require("footballdata-api-v2");
const FootballData = data.default;

const footballData = new FootballData('f500a2871e0e423d9fe1ba869f73155e');

footballData.getStandingsFromCompetition({
    competitionId: 2021,
    standingType: 'TOTAL',
}).then((data) => {
    console.log(JSON.stringify(data, null, 4));
})