$(function() {
  var $players = $("#players");
  $.ajax({
    headers: { "X-Auth-Token": "f500a2871e0e423d9fe1ba869f73155e" },
    type: "GET",
    url: "https://api.football-data.org/v2/competitions/2021/scorers",
    dataType: "json",
    success: function(response) {
      console.log(response);
      $.each(response.scorers, function(i, scorer) {
        $players.append(
          "<li>Name: " +
            scorer.player.name +
            ", Position: " +
            scorer.player.position +
            ", Nationality: " +
            scorer.player.nationality +
            ", Goals: " +
            scorer.numberOfGoals +
            "</li>"
        );
      });
    }
  });
});
