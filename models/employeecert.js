const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class EmployeeCert extends Model {}

EmployeeCert.init(
    {
        id: {
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
        cert_id: {
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
        modelName: 'Employee_cert'
    }
);

module.exports = EmployeeCert;