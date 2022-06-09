const sequelize = require('../config/connection');
const { Employee, Station, Certification } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
  console.log(req.session);
  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/stations', (req, res) => {
  res.render('stations');
});

router.get('/info', (req, res) => {
  res.render('info');
});

module.exports = router;