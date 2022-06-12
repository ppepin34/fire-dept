// created seeds for station names 
const { Station } = require("../../models");

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
