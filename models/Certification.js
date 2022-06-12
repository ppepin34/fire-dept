//  ------- CERTIFICATION MODEL --------

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Certification extends Model {}

Certification.init(
    {
        // names of columns
        id: {
            // rules of column
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true 
        },
        cert_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        },
        {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'certification'
        }
);

// export to use in other files
module.exports = Certification