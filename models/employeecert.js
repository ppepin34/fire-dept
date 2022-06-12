// ----- EMPLOYEE CERTIFICATION MODEL -------------

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class EmployeeCert extends Model {}

EmployeeCert.init(
    {
        // names of columns
        id: {
            // rules of column
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        employee_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'employee',
                key: 'id'
            }
        },
        certification_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'certification',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee_cert'
    }
);


//  Export to use in other files
module.exports = EmployeeCert;