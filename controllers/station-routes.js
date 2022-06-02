const router = require('express').Router();
const { Employee, Certification, Station } = require('../models');

// find all stations
router.get('/', (req, res) => {
    Station.findAll()
    .then(dbStationData => res.json(dbStationData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// find one station
router.get('/:id', (req, res) => {
    Station.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Employee,
                attributes: ['id', 'first_name', 'last_name', 'rank']
            },
            {
                model: Certification,
                attributes: ['id', 'cert_name']
            }
        ]
    })
    .then(dbStationData => {
        if (!dbStationData) {
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

module.exports = router;