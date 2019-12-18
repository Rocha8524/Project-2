// Create variables for dependencies
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var player = require("../models/player.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(request, response) {
  player.all(function(data) {
    var hbsObject = {
      player: data
    };
    console.log(hbsObject);
    response.render("index", hbsObject);
  });
});

router.put("/:id", function(request, response) {
  var condition = "id = " + request.params.id;

  console.log("condition", condition);

  player.update(
    {
      favorite: request.body.favorite
    },
    condition,
    function() {
      response.redirect("/favorites");
    }
  );
});
