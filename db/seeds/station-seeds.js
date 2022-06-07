const { Station } = require("../../models");

<<<<<<< HEAD
const { Station} = require('../../models');

=======
>>>>>>> 5ac0d3c84cb9c028bc7ef6c9d3e76e4c0636c1e6
const StationData = [
  {
    station_name: "Belmopan",
  },
  {
    station_name: "Santa Elena",
  },
  {
    station_name: "San Ignacio",
  },
  {
    station_name: "Benque Viejo",
  },
];

const seedStations = () => Station.bulkCreate(StationData);

module.exports = seedStations;
