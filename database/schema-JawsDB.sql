DROP DATABASE IF Exists b53onvhwftf587py;

CREATE DATABASE b53onvhwftf587py;

USE b53onvhwftf587py;

CREATE TABLE players (
id Int (50) AUTO_INCREMENT NOT NULL,
player_name VARCHAR (100) NOT NULL,
image VARCHAR (1000) NOT NULL,
position VARCHAR (100) NOT NULL,
birthday VARCHAR (50) NOT NULL,
nationality VARCHAR (100) NOT NULL,
PRIMARY KEY (id)
);
