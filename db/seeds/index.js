const seedStations = require('./station-seeds');
const seedRoles = require('./roles-seeds');
const seedCertifications = require('./certification-seeds');
const seedEmployee = require('./employee-seeds');

const sequelize = require('../..//config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedStations();
  console.log('\n----- STATIONS SEEDED -----\n');

  // await seedRoles();
  // console.log('\n----- ROLES SEEDED -----\n');

  // await seedCertifications();
  // console.log('\n----- CERTIFICATIONS SEEDED -----\n');

  // await seedEmployee();
  // console.log('\n----- EMPLOYEES SEEDED -----\n');

  process.exit(0);
};

seedAll();