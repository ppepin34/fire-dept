// ------ CONNECTION FOR USING SEQUELIZE -----------

// .env file
require("dotenv").config();

const Sequelize = require("sequelize");

// to use contents of .env file (! Make sure they match your .env file names !)
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

// export to use in other files
module.exports = sequelize;
