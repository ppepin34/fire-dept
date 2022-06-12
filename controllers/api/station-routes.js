// ------- STATION ROUTES ------------

const router = require('express').Router();
const { Employee, Certification, Station, EmployeeCert} = require('../../models');
const withAuth = require('../../utils/auth')

// find all stations
router.get('/', (req, res) => {
    Station.findAll()
    .then(dbStationData => res.json(dbStationData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// GET /api/station/id
// find one station

router.get('/:id', (req, res) => {
    // In the Stations Model, find a single Station
    Station.findOne({
        // where to look
        where: {
            // find by id
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
            //  if nonexistent id is searched
            res.status(404).json({ message: 'No station found with this id'});
            return;
        }
        res.json(dbStationData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// POST /api/station
//Create a Station
router.post('/', withAuth, (req, res) => {
    Station.create({
      station_name: req.body.station_name,
    })
      .then(dbStationData => res.json(dbStationData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// Export so you can use this file in other files
module.exports = router;