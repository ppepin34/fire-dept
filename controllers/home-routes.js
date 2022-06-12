//  -------- HOME ROUTES ----------

const { response } = require('express');
const sequelize = require('../config/connection');
const { Employee, Station, Certification } = require('../models');
const withAuth = require('../utils/auth');

const router = require('express').Router();


// Homepage Route (How to view/GET the home page)
router.get('/', (req, res) => {
  res.render('homepage', {
    loggedIn: req.session.loggedIn
  });
});

// Login Route (How to view/GET the login page) http://localhost:3004/login
router.get('/login', (req, res) => {
  // if logged in redirect to localhost:3004/
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Route to view/GET stations http://localhost:3004/login
router.get('/stations', withAuth, (req, res) => {
  console.log(req.session.loggedIn);
  // Show all Station Models
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


// Route to view/GET info page http://localhost:3004/info
router.get('/info', withAuth, (req, res) => {
  // see all Employee models
  Employee.findAll({
    // do not show their passwords
    exclude:
      ['password'],
    //  include employees Certification Model
    include: [{
      model: Certification,
    },
      {
      // Include Station Model
      model: Station,
      attributes: ['station_name']
    }
    ]
  })
    .then(dbEmpData => {
      const employees = dbEmpData.map(employee => employee.get({ plain: true }))
      // use info template
      res.render('info', { employees, loggedIn: req.session.loggedIn });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET all employees by station http://localhost:3004/station:id
router.get('/station/:id', withAuth, (req, res) => {
  // In Employee model, find all employees...
  Employee.findAll({
    // where each employee has the same station_id
    where: {
      station_id: req.params.id
    },
    attributes: [
      'id',
      'first_name',
      'last_name',
      'rank',
    ],
    include: [
      {
        model: Certification,
      },
      {
        model: Station,
      }
    ]
  })
    .then(dbStationData => {
      if (!dbStationData) {
        res.status(404).json({ message: 'No station found with this id' });
        return;
      }

      //serialize the data
      //  loop and map over each Sequelize object into a serialized version of itself, saving results in a new employees array
      //  goes before the render
      const employees = dbStationData.map(employee => employee.get({ plain: true }));

      // pass data to template
      res.render('single-station', {
        employees,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;