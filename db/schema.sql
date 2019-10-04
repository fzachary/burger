-- Drop the database if exists
DROP DATABASE IF EXISTS burgers_db;

-- Create the burgers database
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the burgers table
CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);