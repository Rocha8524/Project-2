// Include football data npm package

var data = require("footballdata-api-v2");
var FootballData = data.default;

var footballData = new FootballData("f500a2871e0e423d9fe1ba869f73155e");

footballData
  .getTeamsFromCompetition({
    competitionId: 2021
  })
  .then(function(data) {
    console.log(JSON.stringify(data.teams, null, 4));
  });

/*
$(function() {
  var $teams = $("#team-info");
  $.ajax({
    headers: { "X-Auth-Token": "f500a2871e0e423d9fe1ba869f73155e" },
    url: "http://api.football-data.org/v2/competitions/2021/teams",
    dataType: "json",
    type: "GET",
    success: function(response) {
      $.each(response.teams, function(i, team) {
        $teams.append(
          "<li>Name: " +
            team.name +
            ", Crest: " +
            team.crestUrl +
            ", Founded: " +
            team.founded +
            ", Stadium: " +
            team.venue +
            ", Website: " +
            team.website +
            "</li>"
        );
      });
    }
  });
});
*/

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
    console.log(data);
    var { standings: [{ table: tableData }] } = data;
    var rowDataHTML = tableData.reduce(
      (html, { team: { name }, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points }) =>
        html += `<tr>
          <td>${name}</td>
          <td>${playedGames}</td>
          <td>${won}</td>
          <td>${draw}</td>
          <td>${lost}</td>
          <td>${goalsFor}</td>
          <td>${goalsAgainst}</td>
          <td>${goalDifference}</td>
          <td>${points}</td>
          </tr>
          `, "");
    document.getElementById("table").innerHTML += rowDataHTML
  });
});
*/
