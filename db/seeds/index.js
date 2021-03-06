// imported required info from seeds
const seedStations = require("./station-seeds");
const seedCertification = require("./certification-seeds");
const seedEmployee = require("./employee-seeds");
const seedEmployeeCert = require('./EmployeeCert');

const sequelize = require("../../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedStations();
  console.log("\n----- STATIONS SEEDED -----\n");

  await seedCertification();
  console.log('\n----- CERTIFICATIONS SEEDED -----\n');

  await seedEmployee();
  console.log('\n----- EMPLOYEE SEEDED -----\n');

  await seedEmployeeCert();
  console.log('\n----- EMPLOYEECERT SEEDED -----\n');

  process.exit(0);
};

seedAll();
