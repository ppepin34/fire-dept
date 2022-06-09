const sequelize = require('../config/connection');
const { Employee, Station, Certification } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
  console.log(req.session.loggedIn);
  res.render('homepage', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/stations', (req, res) => {
  console.log(req.session.loggedIn);
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
  if (req.session.loggedIn) {
    res.render('info', {
      // loggedIn: req.session.loggedIn,
    });
    return;
  }

  res.render('login')
});

router.get('/station', (req, res) => {
  if (req.session.loggedIn) {
    res.render('single-station');
    return;
  }

  res.render('login')
})

module.exports = router;