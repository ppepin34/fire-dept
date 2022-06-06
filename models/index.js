// import all models
const Certification = require('./Certification');
const Employee = require('./Employee');
const Station = require('./Station');
const EmployeeCert = require('./Employeecert');

//create associations
Employee.belongsTo(Station, {
    foreignKey: 'employee_id'
});

Station.hasMany(Employee, {
    foreignKey: 'employee_id'
});

Employee.belongsToMany(Certification, {
    through: EmployeeCert,
    as: 'certifications',
    foreignKey: 'employee_id'
});

Certification.belongsToMany(Employee, {
    through: EmployeeCert,
    as: 'certifications',
    foreignKey: 'certification_id',
});

module.exports = { Employee, Certification, Station };