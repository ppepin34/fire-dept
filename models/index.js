// import all models
const Certification = require('./Certification');
const Employee = require('./Employee');
const Station = require('./Station');
const EmployeeCert = require('./EmployeeCert');

// create associations
Employee.belongsToMany(Certification, {
    through: EmployeeCert,
    as: 'employee_cert',
    foreignKey: 'certification_id'
});

Certification.belongsToMany(Employee, {
    through: EmployeeCert,
    as: 'employee_cert',
    foreignKey: 'employee_id',
});

Employee.belongsTo(Station, {
    foreignKey: 'employee_id'
});

Station.hasMany(Employee, {
    foreignKey: 'employee_id'
});


module.exports = { Employee, Certification, Station };