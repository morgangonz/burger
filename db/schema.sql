### Schema
CREATE DATABASE shark_db;
USE shark_db;

CREATE TABLE food
(
	id int NOT NULL AUTO_INCREMENT,
	item varchar(255) NOT NULL, 
	devoured tinyint(1) DEFAULT 0,
	`date` timestamp NOT NULL DEFAULT CURRENT_timestamp ON UPDATE CURRENT_timestamp,
	PRIMARY KEY (id)
);