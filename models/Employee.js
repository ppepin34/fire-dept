//import model and datatypes from sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// encrypt passwords
const bcrypt = require('bcrypt');

class Employee extends Model {}

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER
    }
)
