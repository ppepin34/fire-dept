const { Certification } = require("../../models");

const Certification = [
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

const seedCertification = () => Certification.bulkCreate(CertificationData);

module.exports = seedCertification;
