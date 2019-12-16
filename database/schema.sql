DROP DATABASE IF EXISTS players_db;
CREATE DATABASE players_db;

USE players_db;

CREATE TABLE players (
id Int (50) AUTO_INCREMENT NOT NULL,
player_name VARCHAR (100) NOT NULL,
image VARCHAR (1000) NOT NULL,
position VARCHAR (100) NOT NULL,
dateOfBirth VARCHAR (50) NOT NULL,
nationality VARCHAR (100) NOT NULL,
PRIMARY KEY (id)
);

