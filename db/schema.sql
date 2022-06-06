-- Delete database if it already exists
DROP DATABASE IF EXISTS fire_dept_db;

-- Create database
CREATE DATABASE fire_dept_db;

-- CREATE TABLE station (
--     id INTEGER AUTO_INCREMENT PRIMARY KEY,
--     station_name VARCHAR(30) NOT NULL
--     );

-- CREATE TABLE ranks (
--     id INTEGER AUTO_INCREMENT PRIMARY KEY,
--     rank_title VARCHAR(30) NOT NULL,
--     station_id INTEGER,
--     CONSTRAINT fk_stations FOREIGN KEY (station_id) REFERENCES stations(id) ON DELETE SET NULL
-- )

-- CREATE TABLE certifications (
--     id INTEGER AUTO_INCREMENT PRIMARY KEY,
--     cert_name VARCHAR(40) NOT NULL
-- )

-- CREATE TABLE employee (
--     id INTEGER AUTO_INCREMENT PRIMARY KEY,
--     first_name VARCHAR(30) NOT NULL,
--     last_name VARCHAR(30) NOT NULL,
-- )