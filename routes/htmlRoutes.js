var path = require("path");

module.exports = function(app) {
  // Load index pages
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/standings", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/standings.html"));
  });

  app.get("/football", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/football.html"));
  });

  app.get("/team-info", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/team-info.html"));
  });

  app.get("/top-scorers", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/top-scorers.html"));
  });

  app.get("/bplayers", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/players.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
