//  ------ STATION MODEL ---------

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Station extends Model {};

Station.init(
    {
        // names of columns
        id: {
            // rules of column
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        station_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'station'
    }
);

//  export to use in other files
module.exports = Station;