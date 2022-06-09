const { response } = require('express');
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
  Station.findAll({})
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
  Employee.findAll({
    exclude:
      ['password'],
    include: [{
      model: Certification,
    },
    {
      model: Station,
      attributes: ['station_name']
    }
    ]
  })
    .then(dbEmpData => {
      const employees = dbEmpData.map(employee => employee.get({ plain: true }))
      res.render('info', { employees, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/station/:id', (req, res) => {
  Station.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Employee,
        attributes: ['id', 'first_name', 'last_name', 'rank'],
        include: [
          {
            model: Certification,
            attributes: ['cert_name']
          }
        ]
      }
    ]
  })
    .then(dbStationData => {
      if (!dbStationData) {
        res.status(404).json({ message: 'No station found with this id' });
        return;
      }

      //serialize the data
      const station = dbStationData.get({ plain: true });

      // pass data to template
      res.render('single-station', {
        station,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;