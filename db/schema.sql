### Schema
CREATE DATABASE shark_db;
USE shark_db;

CREATE TABLE food
(
	id int NOT NULL AUTO_INCREMENT,
	item varchar(255) NOT NULL,
	PRIMARY KEY (id)
);