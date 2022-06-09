require('dotenv').config();

const Sequelize = require('sequelize');

// create connection to our db
const sequelize = new Sequelize(process.env.JAWSDB_NAME, process.env.JAWSDB_USER, process.env.JAWSDB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});



module.exports = sequelize;