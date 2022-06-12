// ------ CONNECTION FOR USING SEQUELIZE -----------

// .env file
require("dotenv").config();

const Sequelize = require("sequelize");

// to use contents of .env file (! Make sure they match your .env file names !)
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
<<<<<<< HEAD
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
=======
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
>>>>>>> 3f8ff03ee2821f138d9d8cbf73c3fe01d95c8ed3

// export to use in other files
module.exports = sequelize;
