const { Certification } = require("../../models");

const certificationData = [
  {
    cert_name: "Driver",
  },
  {
    cert_name: "CPR",
  },
  {
    cert_name: "EMR",
  },
  {
    cert_name: "EMT",
  },
];

const seedCertification = () => Certification.bulkCreate(certificationData);

module.exports = seedCertification;
