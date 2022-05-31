const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;

