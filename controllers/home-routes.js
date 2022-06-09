const sequelize = require('../config/connection');
const { Employee, Station, Certification } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/stations', (req, res) => {
  console.log(req.session);
  Station.findAll({
      attributes: [
          'station_name'
      ],
  })
      .then(dbStationData => {
          const stations = dbStationData.map(station => station.get({ plain: true }))
          res.render('stations', {
              stations,
              loggedIn: req.session.loggedIn
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});


router.get('/info', (req, res) => {
  res.render('info');
});

module.exports = router;