// ----- ASSOCIATIONS FOR MODELS -------

// import all models
const Certification = require('./Certification');
const Employee = require('./Employee');
const Station = require('./Station');
const EmployeeCert = require('./employeecert');

//create associations
Employee.belongsTo(Station);

Station.hasMany(Employee);

Employee.belongsToMany(Certification, {
    through: EmployeeCert,
    // as: 'certifications',
    foreignKey: 'employee_id'
});

Certification.belongsToMany(Employee, {
    through: EmployeeCert,
    as: 'certifications',
    foreignKey: 'cert_id',
});

EmployeeCert.belongsTo(Certification,{
    foreignKey: 'cert_id'
});

EmployeeCert.belongsTo(Employee, {
    foreignKey: 'employee_id'
});

// EmployeeCert.belongsTo(Certification, {
//     foreignKey: 'cert_id'
// });

// EmployeeCert.belongsTo(Employee, {
//     foreignKey: 'employee_id'
// })

// export to use in other files
module.exports = { Employee, Certification, Station, EmployeeCert };