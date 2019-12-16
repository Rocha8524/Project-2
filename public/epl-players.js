/* eslint-disable prettier/prettier */
// Create variables that connect npm packages
// var mysql = require("mysql");
// var inquirer = require("inquirer");

// Create the connection information for the sql database
/* var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "WARNING",

    // Connects to the database used in MySQL
    database: "players_db"
});
*/
// Include football data npm package
var data = require("footballdata-api-v2");
var FootballData = data.default;

var footballData = new FootballData("f500a2871e0e423d9fe1ba869f73155e");

/* Connect to the mysql server and sql database
connection.connect(function (error) {
    if (error) throw error;
    teamInquirer();
});
*/

//Store all arguments in an array
var commands = process.argv[2];
//var userInput = process.argv.slice(3).join(" ");

/*function teamInquirer() {
    inquirer.prompt([{
        name: "teams",
        type: "list",
        message: "Choose a team you wish to look at:",
        choices: ["Liverpool FC", "Leicester City FC", "Manchester City FC", "Chelsea FC", "Tottenham Hotspur FC", "Manchester United FC", "Crystal Palace FC", "Arsenal FC", "Newcastle United FC", "West Ham United FC", "Southampton FC", "Sheffield United FC", "Norwich City", "Watford FC", "Aston Villa FC", "AFC Bournemouth", "Everton FC", "Burnley FC", "Brighton & Hove Albion FC", "Wolverhampton Wanderers FC"]

    }]).then(function (answer) {*/
switch (commands) {
case "liverpool":
  liverpool();
  break;

case "leicester":
  leicesterCity();
  break;

case "man-city":
  manCity();
  break;

case "chelsea":
  chelsea();
  break;

case "man-utd":
  manUtd();
  break;

case "tottenham":
  tottenham();
  break;

case "wolves":
  wolves();
  break;

case "crystal-palace":
  crystal();
  break;

case "sheffield":
  sheffield();
  break;

case "arsenal":
  arsenal();
  break;

case "newcastle":
  newcastle();
  break;

case "brighton":
  brighton();
  break;

case "burnley":
  burnley();
  break;

case "everton":
  everton();
  break;

case "bournemouth":
  bournemouth();
  break;

case "west-ham":
  westHam();
  break;

case "aston-villa":
  astonVilla();
  break;

case "southampton":
  southampton();
  break;

case "norwich":
  norwich();
  break;

case "watford":
  watford();
  break;
}
//});
//};

function liverpool() {
  footballData
    .getTeam({
      id: 64 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function leicesterCity() {
  footballData
    .getTeam({
      id: 338 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function manCity() {
  footballData
    .getTeam({
      id: 65 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function chelsea() {
  footballData
    .getTeam({
      id: 61 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function manUtd() {
  footballData
    .getTeam({
      id: 66 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function tottenham() {
  footballData
    .getTeam({
      id: 73 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function wolves() {
  footballData
    .getTeam({
      id: 76 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function crystal() {
  footballData
    .getTeam({
      id: 354 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function sheffield() {
  footballData
    .getTeam({
      id: 356 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function arsenal() {
  footballData
    .getTeam({
      id: 57 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function newcastle() {
  footballData
    .getTeam({
      id: 67 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function brighton() {
  footballData
    .getTeam({
      id: 397 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function burnley() {
  footballData
    .getTeam({
      id: 328 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function everton() {
  footballData
    .getTeam({
      id: 62 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function bournemouth() {
  footballData
    .getTeam({
      id: 1044 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function westHam() {
  footballData
    .getTeam({
      id: 563 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function astonVilla() {
  footballData
    .getTeam({
      id: 58 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function southampton() {
  footballData
    .getTeam({
      id: 340 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function norwich() {
  footballData
    .getTeam({
      id: 68 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}

function watford() {
  footballData
    .getTeam({
      id: 346 // Liverpool
    })
    .then(function(data) {
      console.log(JSON.stringify(data.squad, null, 4));
    });
}
