// Include football data npm package
var data = require("footballdata-api-v2");
var FootballData = data.default;
var footballData = new FootballData("f500a2871e0e423d9fe1ba869f73155e");
var logTeamInfo = [];

footballData
  .getTeamsFromCompetition({
    competitionId: 2021
  })
  .then(function(data) {
    console.log(data.teams);

    // Log information into teams-info html
    logTeamInfo.push = JSON.stringify(data.teams, null, 4);

    output.innerHTML = JSON.stringify(logTeamInfo);
  });

/*
    $(document).ready(function () {
      const url = "https://api.football-data.org/v2/competitions/2021/teams";
      fetch(url, {
        method: "GET",
        headers: {
          "X-Auth-Token": "f500a2871e0e423d9fe1ba869f73155e"
        }
      })
        .then(resp => resp.json())
        .then(function (data) {
          //console.log(JSON.stringify(data.teams, null, 4));
          console.log(data);

          var { teams: [{ table: tableData }] } = data;
          var rowDataHTML = tableData.reduce(
            (html, name, crestUrl, address, website, founded, venue ) =>
              html += `<tr>
          <td>${name}</td>
          <td>${crestUrl}</td>
          <td>${address}</td>
          <td>${website}</td>
          <td>${founded}</td>
          <td>${venue}</td>
          </tr>
          `, "");
          document.getElementById("output").innerHTML += rowDataHTML
        });
    });
    */
