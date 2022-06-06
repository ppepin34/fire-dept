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
    as: 'employees',
    foreignKey: 'id_employee'
});

Certification.belongsToMany(Employee, {
    through: EmployeeCert,
    as: 'certifications',
    foreignKey: 'id_certification',
});

module.exports = { Employee, Certification, Station };