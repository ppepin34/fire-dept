const router = require('express').Router();
const { Employee, Certification, Station } = require('../models');

// find all certifications 
router.get('/', (req, res) => {
    Certification.findAll()
    .then(dbCertData => res.json(dbCertData))
    .catch(err => {
        console.log(err);
        res.status 
    })
})