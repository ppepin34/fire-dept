// ------- EMPLOYEE MODEL ---------

//import model and datatypes from sequelize
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// encrypt passwords
const bcrypt = require("bcrypt");

class Employee extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Employee.init(
    {
        // name of columns
        id: {
            // rules of column
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        rank: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        },
        station_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'station',
                key: 'id'
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newEmpData) {
                newEmpData.password = await bcrypt.hash(newEmpData.password, 10);
                return newEmpData;
            },
            async beforeUpdate(updatedEmpData) {
                updatedEmpData.password = await bcrypt.hash(updatedEmpData.password, 10);
                return updatedEmpData;
            }
        },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
  }
);

// export Employee Model to ues in other files
module.exports = Employee;
