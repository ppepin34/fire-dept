// import all models
const Certification = require('./Certification');
const Employee = require('./Employee');
const Station = require('./Station');

// create associations
Employee.belongsToMany(Certification, {
    foreignKey: 'certification_id'
});

Certification.belongsToMany(Employee, {
    foreignKey: 'employee_id'
});

Employee.belongsTo(Station, {
    foreignKey: 'employee_id'
});

Station.hasMany(Employee, {
    foreignKey: 'employee_id'
})


module.exports = { Employee, Certification, Station };