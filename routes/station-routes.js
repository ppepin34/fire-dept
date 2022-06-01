const router = require('express').Router();
const { Station } = require('../../models');

// route to see all stations
//GET /api/stations
router.get('/', (req, res) => {
    Station.findAll()
        .then()
});

// route to see one station
// GET /api/stations/1
router.get('/:id', (req, res) => {

});