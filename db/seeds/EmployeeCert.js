const { EmployeeCert } = require("../../models");

const EmployeeCertData = [
    {
      employee_id: 1,
      cert_id: 1,
    },
    {
        employee_id: 2,
        cert_id: 2,
    },
    {
        employee_id: 3,
        cert_id: 3,
    },
    {
        employee_id: 4,
        cert_id: 4,
    },
    {
        employee_id: 5,
        cert_id: 1,
    },
    {
        employee_id: 6,
        cert_id: 2,
    },
    {
        employee_id: 7,
        cert_id: 3,
    },
    {
        employee_id: 8,
        cert_id: 4,
    },
    {
        employee_id: 9,
        cert_id: 1,
    },
    {
        employee_id: 10,
        cert_id: 2,
    },
    {
        employee_id: 11,
        cert_id: 3,
    },
    {
        employee_id: 12,
        cert_id: 4,
    },
    {
        employee_id: 14,
        cert_id: 1,
    },
    {
        employee_id: 15,
        cert_id: 2,
    },
    {
        employee_id: 16,
        cert_id: 4,
    },


];

const seedEmployeeCert = () => EmployeeCert.bulkCreate(EmployeeCertData);

module.exports = seedEmployeeCert;