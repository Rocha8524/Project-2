// Include football data npm package
/*
var data = require("footballdata-api-v2");
var FootballData = data.default;

var footballData = new FootballData("f500a2871e0e423d9fe1ba869f73155e");

footballData
  .getTeamsFromCompetition({
    competitionId: 2021
  })
  .then(function (data) {
    console.log(JSON.stringify(data.teams, null, 4));
  });
*/

$(document).ready(function() {
  $(function() {
    var $teams = $("#team-info");
    $.ajax({
      headers: { "X-Auth-Token": "f500a2871e0e423d9fe1ba869f73155e" },
      url: "http://api.football-data.org/v2/competitions/2021/teams",
      dataType: "json",
      type: "GET",
      success: function(response) {
        console.log(response);
        $.each(response.teams, function(i, team) {
          $teams.append(
            `<br><div class="text-center"><img width="50" height="50" src="${team.crestUrl}"></div>
            <div class="center">${team.name} </div>
            <div class="center">${team.area.name}</div>
            <div class="center">${team.founded}</div>
            <div class="center">${team.venue}</div>
            <div class="center"><a href="${team.website}" target="_blank">${team.website}</a></div>
            <div class="card-action right-align">
            <a class="waves-effect waves-light btn red" onclick="deleteTeamListener(${team.id})"><i class="material-icons right"></i>Delete from Favorite</a>
            </div><hr>
        </div>
        </div>`
          );
        });
      }
    });
  });
});
