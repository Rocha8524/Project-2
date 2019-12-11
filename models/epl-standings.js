$(document).ready(function () {
  var url = "https://api.football-data.org/v2/competitions/2021/standings";
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