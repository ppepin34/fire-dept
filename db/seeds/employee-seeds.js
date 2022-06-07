const { Employee } = require("../../models");

const employeeData = [
  {
    first_name: "Darrin",
    last_name: "Robinson",
    username: "drobinson2",
    email: "drobinson@firedeptbelize.com",
    password: "belizefd1",
    station_id: 1,
  },
  {
    first_name: "Brittani",
    last_name: "Court",
    username: "bcourt1",
    email: "bcourt@firedeptbelize.com",
    password: "belizefd1",
    station_id: 1,
  },
  {
    first_name: "Phil",
    last_name: "Pepin",
    username: "ppepin3",
    email: "ppepin@firedeptbelize.com",
    password: "belizefd1",
    station_id: 1,
  },
  {
    first_name: "Megan",
    last_name: "Middleton",
    username: "mmiddleton4",
    email: "mmiddleton@firedeptbelize.com",
    password: "belizefd1",
    station_id: 1,
  },
];

const seedEmployee = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployee;
