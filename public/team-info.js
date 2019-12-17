$(document).ready(function () {
  $(function () {
    var $teams = $("#team-info");
    $.ajax({
      headers: { "X-Auth-Token": "f500a2871e0e423d9fe1ba869f73155e" },
      url: "http://api.football-data.org/v2/competitions/2021/teams",
      dataType: "json",
      type: "GET",
      success: function (response) {
        console.log(response);
        $.each(response.teams, function (i, team) {
          $teams.append(
            `<br><div class="text-center"><img width="50" height="50" src="${team.crestUrl}"></div><br>
            <div class="center">${team.name} </div>
            <div class="center">Founded: ${team.founded}</div>
            <div class="center">Stadium: ${team.venue}</div>
            <div class="center">Website: <a href="${team.website}" target="_blank">${team.website}</a></div>
            <div class="center">Address: ${team.address}</div><br>
            <hr>
        </div>
        </div>`
          );
        });
      }
    });
  });
