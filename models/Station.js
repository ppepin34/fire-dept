const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Station extends Model {};

Station.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        station_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'station'
    }
);

module.exports = Station;