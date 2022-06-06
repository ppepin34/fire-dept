const router = require('express').Router();

const empRoutes = require('./employee-routes.js');
const stationRoutes = require('./station-routes.js');
const certRoutes = require('./certification-routes.js');

router.use('/employee', empRoutes);
router.use('/certification', certRoutes);
router.use('/station', stationRoutes);

module.exports = router;