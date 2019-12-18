/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define("Player", {
    player_name: DataTypes.STRING,
    image: DataTypes.STRING,
    position: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    nationality: DataTypes.STRING
  });
  return Player;
};
