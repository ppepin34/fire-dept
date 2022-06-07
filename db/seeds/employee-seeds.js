const { Employee } = require("../../models");

const employeeData = [
  {
    first_name: "Darrin",
    last_name: "Robinson",
    username: "drobinson2",
    email: "drobinson@firedeptbelize.com",
    password: "belizefd1",
    station_id: 1,
    rank: "FireFighter"
  },
  {
    first_name: "Brittani",
    last_name: "Court",
    username: "bcourt1",
    email: "bcourt@firedeptbelize.com",
    password: "belizefd1",
    station_id: 1,
    rank: "FireFighter"
  },
  {
    first_name: "Phil",
    last_name: "Pepin",
    username: "ppepin3",
    email: "ppepin@firedeptbelize.com",
    password: "belizefd1",
    station_id: 1,
    rank: "FireFighter"
  },
  {
    first_name: "Megan",
    last_name: "Middleton",
    username: "mmiddleton4",
    email: "mmiddleton@firedeptbelize.com",
    password: "belizefd1",
    station_id: 1,
    rank: "FireFighter"
  },
  {
    first_name: "Dwayne",
    last_name: "The Rock Johnson",
    username: "therock1",
    email: "djohnson@firedeptbelize.com",
    password: "belizefd2",
    station_id: 2,
    rank: "FireFighter"
  },
  {
    first_name: "Jeff",
    last_name: "Hardy",
    username: "jhardy2",
    email: "jhardy@firedeptbelize.com",
    password: "belizefd2",
    station_id: 2,
    rank: "FireFighter"
  },
  {
    first_name: "Matt",
    last_name: "Hardy",
    username: "mhardy3",
    email: "mhardy@firedeptbelize.com",
    password: "belizefd2",
    station_id: 2,
    rank: "FireFighter"
  },
  {
    first_name: "John",
    last_name: "Cena",
    username: "jcena4",
    email: "jcena@firedeptbelize.com",
    password: "belizefd2",
    station_id: 2,
    rank: "FireFighter"
  },
  {
    first_name: "Carmelo",
    last_name: "Anthony",
    username: "canthony1",
    email: "canthony@firedeptbelize.com",
    password: "belizefd3",
    station_id: 3,
    rank: "FireFighter"
  },
  {
    first_name: "Ja",
    last_name: "Morant",
    username: "jmorant2",
    email: "jmorant@firedeptbelize.com",
    password: "belizefd3",
    station_id: 3,
    rank: "FireFighter"
  },
  {
    first_name: "Luka",
    last_name: "Doncic",
    username: "ldoncic3",
    email: "ldoncic@firedeptbelize.com",
    password: "belizefd3",
    station_id: 3,
    rank: "FireFighter"
  },
  {
    first_name: "LeBron",
    last_name: "James",
    username: "ljames4",
    email: "ljames@firedeptbelize.com",
    password: "belizefd3",
    station_id: 3,
    rank: "FireFighter"
  },
  {
    first_name: "Bruce",
    last_name: "Wayne",
    username: "thebat1",
    email: "bwayne@firedeptbelize.com",
    password: "belizefd4",
    station_id: 4,
    rank: "FireFighter"
  },
  {
    first_name: "Peter",
    last_name: "Parker",
    username: "thespider2",
    email: "pparker@firedeptbelize.com",
    password: "belizefd4",
    station_id: 4,
    rank: "FireFighter"
  },
  {
    first_name: "Tony",
    last_name: "Stark",
    username: "metalguy3",
    email: "tstark@firedeptbelize.com",
    password: "belizefd4",
    station_id: 4,
    rank: "FireFighter"
  },
  {
    first_name: "King",
    last_name: "Tchalla",
    username: "wakanda4",
    email: "ktchalla@firedeptbelize.com",
    password: "belizefd4",
    station_id: 4,
    rank: "FireFighter"
  },
];

const seedEmployee = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployee;
