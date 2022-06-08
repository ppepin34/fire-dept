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
<<<<<<< HEAD
    as: 'certifications',
    foreignKey: 'cert_id',
});

EmployeeCert.belongsTo(Certification,{
    foreignKey: 'cert_id'
});

EmployeeCert.belongsTo(Employee, {
    foreignKey: 'employee_id'
=======
    // as: 'certifications',
    foreignKey: 'certification_id',
>>>>>>> dd820fa5cd771a85a1f4281269aed278b8cc8ee7
});

// EmployeeCert.belongsTo(Certification, {
//     foreignKey: 'cert_id'
// });

// EmployeeCert.belongsTo(Employee, {
//     foreignKey: 'employee_id'
// })

module.exports = { Employee, Certification, Station, EmployeeCert };